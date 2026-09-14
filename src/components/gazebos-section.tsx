import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const g1ExteriorCloseup = "/assets/gazebo-1-exterior-closeup.png";
const g1Interior = "/assets/gazebo-1-interior.png";
const g1Path = "/assets/gazebo-1-path.png";
const g1Wide = "/assets/gazebo-1-wide.png";

const g2ExteriorCloseup = "/assets/gazebo-2-exterior-closeup.png";
const g2ExteriorWide = "/assets/gazebo-2-exterior-wide.png";
const g2Interior = "/assets/gazebo-2-interior.png";

type Photo = { url: string; alt: string; objectPosition?: string };
type Gazebo = {
  id: string;
  name: string;
  type: string;
  description: string;
  details: string;
  cover: Photo;
  photos: Photo[];
};

const gazebos: Gazebo[] = [
  {
    id: "gazebo-1",
    name: "Беседка 1",
    type: "Под виноградом",
    description:
      "Уютная беседка под виноградом рядом с двухуровневым домиком — для утреннего кофе, отдыха в тени и спокойных вечеров.",
    details:
      "Тихая беседка, укрытая виноградом, расположена рядом с двухуровневым домиком. Здесь приятно провести утро с чашкой кофе, отдохнуть в тени в жаркий день или собраться вечером в спокойной обстановке. Это более камерная зона отдыха для тех, кому хочется тишины и своего уголка на территории Парма Хутор.",
    cover: { url: g1ExteriorCloseup, alt: "Беседка под виноградом снаружи", objectPosition: "object-[50%_45%]" },
    photos: [
      { url: g1ExteriorCloseup, alt: "Беседка под виноградом снаружи" },
      { url: g1Interior, alt: "Интерьер беседки под виноградом" },
      { url: g1Path, alt: "Дорожка к беседке" },
      { url: g1Wide, alt: "Беседка на зелёной территории" },
    ],
  },
  {
    id: "gazebo-2",
    name: "Беседка 2",
    type: "С мангальной зоной",
    description:
      "Просторная беседка с мангальной зоной — для семейных ужинов и вечерних посиделок на свежем воздухе.",
    details:
      "Отдельная беседка с мангальной зоной подходит для семейных ужинов, дружеских встреч и спокойных вечеров на свежем воздухе. Здесь можно приготовить ужин на мангале, собраться всей семьёй за столом и провести вечер после моря или поездки по Тарханкуту.",
    cover: { url: g2ExteriorCloseup, alt: "Беседка с мангальной зоной снаружи", objectPosition: "object-[50%_45%]" },
    photos: [
      { url: g2ExteriorCloseup, alt: "Беседка с мангальной зоной снаружи" },
      { url: g2ExteriorWide, alt: "Общий вид беседки с мангалом" },
      { url: g2Interior, alt: "Интерьер беседки с мангальной зоной" },
    ],
  },
];

export function GazebosSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const active = gazebos.find((g) => g.id === activeId) ?? null;
  const total = active?.photos.length ?? 0;

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, prev, next]);

  const open = (id: string) => {
    setActiveId(id);
    setIndex(0);
    setShowAll(false);
  };

  return (
    <section id="gazebos" className="py-20 sm:py-28 lg:py-32" aria-labelledby="gazebos-title">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <header className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="h-px w-8 bg-accent" />
            Территория
          </p>
          <h2 id="gazebos-title" className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Беседки для отдыха
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-muted-foreground sm:text-lg">
            На территории Парма Хутор есть две разные беседки — камерная под виноградом и отдельная беседка с
            мангальной зоной. Можно выбрать место для тихого отдыха, семейного ужина или вечерних посиделок на свежем
            воздухе.
          </p>
        </header>

        <ul className="mt-14 grid gap-7 lg:grid-cols-6">
          {gazebos.map((gazebo) => (
            <li
              key={gazebo.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_24px_60px_-38px_oklch(0.4_0.06_220/55%)] lg:col-span-3"
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-secondary">
                <img
                  src={gazebo.cover.url}
                  alt={gazebo.cover.alt}
                  loading="lazy"
                  className={`h-full w-full object-cover ${gazebo.cover.objectPosition ?? "object-center"}`}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl text-foreground">{gazebo.name}</h3>
                  <p className="mt-2 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {gazebo.type}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{gazebo.description}</p>
                </div>
                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() => open(gazebo.id)}
                    className="btn-primary-sea inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold text-primary-foreground"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActiveId(null)}>
        <DialogContent className="max-h-[92svh] w-[calc(100vw-1.5rem)] max-w-3xl overflow-y-auto rounded-3xl p-4 sm:p-6">
          {active && (
            <>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <DialogTitle className="font-display text-2xl text-foreground">{active.name}</DialogTitle>
                  <DialogDescription className="mt-1 text-sm text-muted-foreground">{active.type}</DialogDescription>
                </div>
              </div>

              <p className="mt-4 text-[0.95rem] leading-[1.75] text-muted-foreground">{active.details}</p>

              <div className="relative mt-4 overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={active.photos[index]!.url}
                  alt={active.photos[index]!.alt}
                  className="aspect-[4/3] w-full object-contain"
                />
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Предыдущее фото"
                  className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-foreground shadow-md"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Следующее фото"
                  className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-foreground shadow-md"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="absolute bottom-3 right-3 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground">
                  {index + 1} / {total}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-5">
                {(showAll ? active.photos : active.photos.slice(0, 5)).map((photo, i) => (
                  <button
                    key={photo.url}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={
                      "overflow-hidden rounded-xl ring-offset-2 transition " +
                      (i === index ? "ring-2 ring-primary" : "opacity-80 hover:opacity-100")
                    }
                  >
                    <img src={photo.url} alt={photo.alt} loading="lazy" className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>

              {!showAll && (
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-accent-foreground underline-offset-4 hover:underline"
                >
                  <Images size={16} />
                  Смотреть все фото ({total})
                </button>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

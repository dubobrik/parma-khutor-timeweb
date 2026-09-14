import { useCallback, useEffect, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Images } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const c1Exterior = "/assets/cottage-1-exterior.webp";
const c1Living1 = "/assets/cottage-1-living-1.webp";
const c1Living2 = "/assets/cottage-1-living-2.webp";
const c1Living3 = "/assets/cottage-1-living-3.webp";
const c1Living4 = "/assets/cottage-1-living-4.webp";
const c1Stairs = "/assets/cottage-1-stairs.webp";
const c1Loft = "/assets/cottage-1-loft-bedroom.webp";
const c1Bathroom = "/assets/cottage-1-bathroom.webp";
const c1Towels = "/assets/cottage-1-towels.webp";

const c2Exterior = "/assets/cottage-2-exterior.webp";
const c2Terrace = "/assets/cottage-2-terrace.webp";
const c2Kitchen = "/assets/cottage-2-kitchen.webp";
const c2Dining = "/assets/cottage-2-dining.webp";
const c2Sofa = "/assets/cottage-2-sofa.webp";
const c2Bedroom = "/assets/cottage-2-bedroom.webp";
const c2BedroomTv = "/assets/cottage-2-bedroom-tv.webp";
const c2BunkRoom = "/assets/cottage-2-bunk-room.webp";
const c2Wc = "/assets/cottage-2-wc.webp";
const c2Shower = "/assets/cottage-2-shower.webp";

const c6Cover = "/assets/cottage-6-cover.png";
const c3Veranda = "/assets/cottage-3-veranda.webp";
const c3Swing = "/assets/cottage-3-swing.webp";
const c3Roses = "/assets/cottage-3-roses.webp";
const c3TwinRoom = "/assets/cottage-3-twin-room.webp";
const c3Dining = "/assets/cottage-3-dining.webp";
const c3Kitchen = "/assets/cottage-3-kitchen.webp";
const c3BedroomWardrobe = "/assets/cottage-3-bedroom-wardrobe.webp";
const c3Bedroom = "/assets/cottage-3-bedroom.webp";
const c3Wc = "/assets/cottage-3-wc.webp";
const c3Shower = "/assets/cottage-3-shower.webp";

const c4Porch = "/assets/cottage-4-porch.webp";
const c4Garden = "/assets/cottage-4-garden.webp";
const c4Living1 = "/assets/cottage-4-living-1.webp";
const c4Living2 = "/assets/cottage-4-living-2.webp";
const c4Bedroom1 = "/assets/cottage-4-bedroom-1.webp";
const c4Bedroom2 = "/assets/cottage-4-bedroom-2.webp";
const c4Wc = "/assets/cottage-4-wc.webp";
const c4Shower = "/assets/cottage-4-shower.webp";

const c5Exterior = "/assets/cottage-5-exterior.jpg";
const c5Porch = "/assets/cottage-5-porch.png";
const c5BunkRoom = "/assets/cottage-5-bunk-room.png";
const c5BunkCorner = "/assets/cottage-5-bunk-corner.png";
const c5Dining = "/assets/cottage-5-dining.png";
const c5BedroomTv = "/assets/cottage-5-bedroom-tv.png";
const c5Bedroom = "/assets/cottage-5-bedroom.png";
const c5Bathroom = "/assets/cottage-5-bathroom.png";

type Photo = { url: string; alt: string };
type Cottage = {
  id: string;
  name: string;
  type: string;
  description: string;
  details: string;
  cover: Photo;
  photos: Photo[];
};

const cottages: Cottage[] = [
  {
    id: "cottage-1",
    name: "Домик 1",
    type: "Двухуровневый",
    description:
      "Двухуровневый деревянный домик для отдыха до 4 гостей — с отдельными зонами для сна и отдыха.",
    details:
      "Уютный двухуровневый домик для семьи или небольшой компании до 4 человек. Внутри есть двуспальная кровать и раскладной диван, санузел с душем, кондиционер, телевизор, Wi‑Fi, холодильник и чайник. В доме тёплый пол, поэтому он подходит для проживания круглый год. Для приготовления еды гости могут пользоваться общей летней кухней. Рядом — парковка, беседка, мангальная зона и зелёная территория.",
    cover: { url: c1Exterior, alt: "Двухуровневый домик снаружи" },
    photos: [
      { url: c1Exterior, alt: "Двухуровневый домик снаружи" },
      { url: c1Living1, alt: "Комната двухуровневого домика" },
      { url: c1Living2, alt: "Зона отдыха двухуровневого домика" },
      { url: c1Living3, alt: "Интерьер двухуровневого домика" },
      { url: c1Living4, alt: "Интерьер двухуровневого домика" },
      { url: c1Stairs, alt: "Лестница на второй уровень" },
      { url: c1Loft, alt: "Спальня на втором уровне" },
      { url: c1Bathroom, alt: "Санузел двухуровневого домика" },
      { url: c1Towels, alt: "Полотенца и детали интерьера" },
    ],
  },
  {
    id: "cottage-2",
    name: "Домик 5",
    type: "С кухонной зоной",
    description:
      "Двухкомнатный домик с собственной кухонной зоной — удобно, когда хочется готовить прямо в доме.",
    details:
      "Двухкомнатный деревянный домик до 4 гостей с собственной кухонной зоной. Здесь есть двуспальная и две односпальные кровати, холодильник, индукционная плита, микроволновая печь, чайник и посуда. В доме также есть санузел с душем, кондиционер, телевизор, Wi‑Fi и тёплый пол. Хороший вариант для семейного отдыха и более длительного проживания.",
    cover: { url: c2Exterior, alt: "Домик с кухонной зоной снаружи" },
    photos: [
      { url: c2Exterior, alt: "Домик с кухонной зоной снаружи" },
      { url: c2Terrace, alt: "Терраса домика" },
      { url: c2Kitchen, alt: "Кухонная зона" },
      { url: c2Dining, alt: "Обеденная зона" },
      { url: c2Sofa, alt: "Зона отдыха с диваном" },
      { url: c2Bedroom, alt: "Спальня" },
      { url: c2BedroomTv, alt: "Спальня с телевизором" },
      { url: c2BunkRoom, alt: "Комната с двухъярусной кроватью" },
      { url: c2Wc, alt: "Санузел" },
      { url: c2Shower, alt: "Душевая" },
    ],
  },
  {
    id: "cottage-3",
    name: "Домик 6",
    type: "С кухонной зоной",
    description:
      "Уютный двухкомнатный домик с кухней для спокойного семейного отдыха в своём ритме.",
    details:
      "Ещё один двухкомнатный домик с собственной кухонной зоной, рассчитанный до 4 гостей. Внутри предусмотрены отдельные спальные места, холодильник, индукционная плита, микроволновая печь, чайник и необходимая посуда. Есть собственный санузел, кондиционер, телевизор, Wi‑Fi и тёплый пол. Можно самостоятельно готовить и не зависеть от общей кухни.",
    cover: { url: c6Cover, alt: "Зона со столиком и лавочками под крышей у домика" },
    photos: [
      { url: c6Cover, alt: "Зона со столиком и лавочками под крышей" },
      { url: c3Veranda, alt: "Веранда домика" },
      { url: c3Swing, alt: "Качели рядом с домиком" },
      { url: c3Roses, alt: "Вход в домик в розах" },
      { url: c3Kitchen, alt: "Кухонная зона" },
      { url: c3Dining, alt: "Обеденная зона" },
      { url: c3TwinRoom, alt: "Комната с двумя кроватями" },
      { url: c3Bedroom, alt: "Спальня с окном" },
      { url: c3BedroomWardrobe, alt: "Спальня со шкафом" },
      { url: c3Wc, alt: "Санузел" },
      { url: c3Shower, alt: "Душевая кабина" },
    ],
  },
  {
    id: "cottage-4",
    name: "Домик 4",
    type: "Без кухонной зоны",
    description:
      "Двухкомнатный домик без собственной кухни — готовить можно на общей летней кухне.",
    details:
      "Уютный двухкомнатный домик для отдыха семьи — до 4 гостей. Внутри есть двуспальная и двухъярусная кровати, холодильник, микроволновая печь, чайник, кондиционер, телевизор и Wi‑Fi. Собственный санузел оборудован душем и водонагревателем. Для приготовления еды предусмотрена общая летняя кухня на территории.",
    cover: { url: c4Garden, alt: "Домик без кухонной зоны со стороны сада" },
    photos: [
      { url: c4Garden, alt: "Домик со стороны сада" },
      { url: c4Porch, alt: "Крытая веранда домика" },
      { url: c4Living1, alt: "Зона отдыха" },
      { url: c4Living2, alt: "Зона отдыха с креслом" },
      { url: c4Bedroom1, alt: "Спальня" },
      { url: c4Bedroom2, alt: "Спальня, другой ракурс" },
      { url: c4Wc, alt: "Санузел" },
      { url: c4Shower, alt: "Душевая кабина" },
    ],
  },
  {
    id: "cottage-5",
    name: "Домик 3",
    type: "Без кухонной зоны",
    description:
      "Комфортный двухкомнатный домик для семейного отдыха с доступом к общей кухне.",
    details:
      "Второй двухкомнатный домик без собственной кухонной зоны. Подходит для семьи с детьми и рассчитан до 4 гостей. В доме есть двуспальная и двухъярусная кровати, холодильник, микроволновая печь, чайник, кондиционер, телевизор, Wi‑Fi и собственный санузел с душем. Готовить можно на общей летней кухне, расположенной на территории Парма Хутор.",
    cover: { url: c5Exterior, alt: "Домик 3 снаружи" },
    photos: [
      { url: c5Exterior, alt: "Домик 3 снаружи" },
      { url: c5Porch, alt: "Веранда домика" },
      { url: c5BunkRoom, alt: "Комната с двухъярусной кроватью" },
      { url: c5BunkCorner, alt: "Обеденный уголок у окна" },
      { url: c5Dining, alt: "Обеденная зона" },
      { url: c5Bedroom, alt: "Спальня" },
      { url: c5BedroomTv, alt: "Спальня с телевизором" },
      { url: c5Bathroom, alt: "Санузел с душевой" },
    ],
  },
];

export function CottagesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const active = cottages.find((c) => c.id === activeId) ?? null;
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
    <section id="cottages" className="py-20 sm:py-32 lg:py-40" aria-labelledby="cottages-title">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <header className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="h-px w-8 bg-accent" />
            Размещение
          </p>
          <h2 id="cottages-title" className="font-display text-5xl leading-tight text-foreground sm:text-6xl lg:text-7xl">
            Выберите свой домик
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-muted-foreground sm:text-lg">
            В Парма Хутор можно выбрать подходящий формат отдыха: домик с кухонной зоной, без кухни или уютный
            двухуровневый домик. Все варианты расположены на общей зелёной территории и подходят для спокойного отдыха
            у моря.
          </p>
        </header>

        <ul className="mt-10 grid auto-rows-fr gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6">
          {cottages.map((cottage, i) => (
            <li
              key={cottage.id}
              className={
                "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_24px_58px_-28px_oklch(0.4_0.06_220/68%)] ring-1 ring-border/60 sm:shadow-[0_24px_60px_-38px_oklch(0.4_0.06_220/55%)] sm:ring-0 lg:col-span-2 " +
                (i === 3 ? "lg:col-start-2" : "")
              }
            >
              <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-background">
                <img
                  src={cottage.cover.url}
                  alt={cottage.cover.alt}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-7 sm:p-8">
                <div className="min-w-0">
                  <h3 className="font-display text-3xl text-foreground">{cottage.name}</h3>
                  <p className="mt-2 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {cottage.type}
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{cottage.description}</p>
                </div>
                <div className="mt-auto flex flex-col gap-2.5 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => open(cottage.id)}
                    className="btn-primary-sea inline-flex min-h-11 flex-1 items-center justify-center rounded-full px-5 text-sm font-semibold text-primary-foreground"
                  >
                    Подробнее
                  </button>
                  <a
                    href="#contacts"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    <CalendarDays size={16} strokeWidth={1.75} />
                    Свободные даты
                  </a>
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
                  className="aspect-[4/3] w-full object-cover"
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

              <a
                href="#contacts"
                onClick={() => setActiveId(null)}
                className="btn-primary-sea mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-primary-foreground"
              >
                <CalendarDays size={17} strokeWidth={1.75} />
                Узнать свободные даты
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

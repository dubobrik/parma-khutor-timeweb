import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const kitchenExterior = "/assets/summer-kitchen-exterior.webp";
const kitchenLantern = "/assets/summer-kitchen-lantern.webp";
const kitchenTableDetail = "/assets/summer-kitchen-table-detail.webp";
const kitchenWallArtCrabs = "/assets/summer-kitchen-wall-art-crabs.webp";
const kitchenCabinetsStove = "/assets/summer-kitchen-cabinets-stove.webp";
const kitchenSinkCorner = "/assets/summer-kitchen-sink-corner.webp";
const kitchenSinkWide = "/assets/summer-kitchen-sink-wide.webp";
const kitchenWallArtFish = "/assets/summer-kitchen-wall-art-fish.webp";
const kitchenInteriorSeating = "/assets/summer-kitchen-interior-seating.webp";

const groundsWelcomeCat = "/assets/grounds-welcome-cat.webp";
const groundsCypressStones = "/assets/grounds-cypress-stones.webp";
const groundsCypressRoses = "/assets/grounds-cypress-roses.webp";
const groundsPathCottage = "/assets/grounds-path-cottage.webp";
const groundsRoseArch = "/assets/grounds-rose-arch.webp";
const groundsGardenPath = "/assets/grounds-garden-path.webp";
const groundsPeachTree = "/assets/grounds-peach-tree.webp";
const groundsGrillPath = "/assets/grounds-grill-path.webp";
const groundsSwingBench = "/assets/grounds-swing-bench.webp";
const groundsBarrelGrill = "/assets/grounds-barrel-grill.webp";
const groundsGrapes = "/assets/grounds-grapes.webp";
const groundsThuja = "/assets/grounds-thuja.webp";
const groundsHammock = "/assets/grounds-hammock.webp";
const groundsEggChair = "/assets/grounds-egg-chair.webp";
const groundsKidsSwings = "/assets/grounds-kids-swings.webp";
const groundsTrampoline = "/assets/grounds-trampoline.png";

type Photo = { url: string; alt: string; objectPosition?: string };
type Zone = {
  id: string;
  name: string;
  description: string;
  details: string[];
  cover: Photo;
  photos: Photo[];
};

const zones: Zone[] = [
  {
    id: "summer-kitchen",
    name: "Общая летняя кухня",
    description:
      "Общая кухня для гостей домиков без собственной кухонной зоны — удобно приготовить завтрак, обед или ужин прямо на территории.",
    details: [
      "На территории Парма Хутор есть отдельная общая летняя кухня для гостей. Здесь можно спокойно приготовить еду и не зависеть от кафе или поездок в посёлок.",
      "В кухне есть газовая плита, микроволновая печь, мойка с горячей водой, необходимая посуда и стиральная машина.",
    ],
    cover: { url: kitchenExterior, alt: "Общая летняя кухня Парма Хутор снаружи", objectPosition: "object-[50%_60%]" },
    photos: [
      { url: kitchenExterior, alt: "Общая летняя кухня снаружи" },
      { url: kitchenInteriorSeating, alt: "Крытая обеденная зона летней кухни" },
      { url: kitchenCabinetsStove, alt: "Кухонные шкафы и газовая плита" },
      { url: kitchenSinkCorner, alt: "Мойка и рабочая зона кухни" },
      { url: kitchenSinkWide, alt: "Общий вид рабочей зоны кухни" },
      { url: kitchenTableDetail, alt: "Детали оформления летней кухни" },
      { url: kitchenLantern, alt: "Фонарь под виноградом у летней кухни" },
      { url: kitchenWallArtCrabs, alt: "Роспись на стене летней кухни" },
      { url: kitchenWallArtFish, alt: "Декоративная роспись с рыбами" },
    ],
  },
  {
    id: "grounds",
    name: "Территория Парма Хутор",
    description:
      "Зелёная территория с цветами, качелями, гамаком и местами для спокойного отдыха между морем и поездками по Тарханкуту.",
    details: [
      "Парма Хутор — это не только домики, но и пространство вокруг них. На территории много зелени и цветов, есть качели, гамак и места, где можно просто посидеть в тени, выпить кофе или отдохнуть после моря.",
      "Здесь легко провести время без спешки: утром выйти на свежий воздух, днём отдохнуть в тени, а вечером вернуться после прогулки или поездки по Тарханкуту и провести время на территории.",
    ],
    cover: { url: groundsWelcomeCat, alt: "Железный кот с надписью Welcome на территории Парма Хутор", objectPosition: "object-[50%_55%]" },
    photos: [
      { url: groundsWelcomeCat, alt: "Железный кот с надписью Welcome" },
      { url: groundsGardenPath, alt: "Садовые дорожки и зелень территории" },
      { url: groundsPathCottage, alt: "Дорожка к домику среди деревьев" },
      { url: groundsRoseArch, alt: "Арка с розами у входа в домик" },
      { url: groundsCypressStones, alt: "Кипарис и каменная клумба на лужайке" },
      { url: groundsCypressRoses, alt: "Кипарисы и розы вдоль дорожки" },
      { url: groundsPeachTree, alt: "Персиковое дерево с плодами" },
      { url: groundsGrapes, alt: "Гроздь винограда на территории" },
      { url: groundsThuja, alt: "Декоративные хвойные у домика" },
      { url: groundsHammock, alt: "Гамак и шезлонги у домика" },
      { url: groundsSwingBench, alt: "Качели и зона отдыха у домика" },
      { url: groundsEggChair, alt: "Подвесное кресло в саду" },
      { url: groundsKidsSwings, alt: "Детские качели на лужайке" },
      { url: groundsTrampoline, alt: "Батут на зелёной территории" },
      { url: groundsGrillPath, alt: "Мангальная зона и дорожки в саду" },
      { url: groundsBarrelGrill, alt: "Мангал у кирпичной стены" },
    ],
  },
];

export function GroundsKitchenSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const active = zones.find((z) => z.id === activeId) ?? null;
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
    <section id="grounds" className="py-20 sm:py-28 lg:py-32" aria-labelledby="grounds-title">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <header className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="h-px w-8 bg-accent" />
            На территории
          </p>
          <h2 id="grounds-title" className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Для отдыха и повседневных мелочей
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-muted-foreground sm:text-lg">
            В Парма Хутор всё устроено так, чтобы отдых был простым и удобным: можно приготовить еду на общей летней
            кухне, а потом вернуться на зелёную территорию, отдохнуть в тени или просто провести время на свежем
            воздухе.
          </p>
        </header>

        <ul className="mt-14 grid gap-7 lg:grid-cols-2">
          {zones.map((zone) => (
            <li
              key={zone.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-card shadow-[0_28px_70px_-40px_oklch(0.4_0.06_220/55%)]"
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-secondary">
                <img
                  src={zone.cover.url}
                  alt={zone.cover.alt}
                  loading="lazy"
                  className={`h-full w-full object-cover ${zone.cover.objectPosition ?? "object-center"}`}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl text-foreground sm:text-3xl">{zone.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{zone.description}</p>
                </div>
                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() => open(zone.id)}
                    className="btn-primary-sea inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold text-primary-foreground sm:w-auto sm:px-8"
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
                  <DialogDescription className="mt-1 text-sm text-muted-foreground">
                    {active.id === "summer-kitchen" ? "Общая зона для гостей" : "Зелёная территория"}
                  </DialogDescription>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {active.details.map((paragraph) => (
                  <p key={paragraph} className="text-[0.95rem] leading-[1.75] text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

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

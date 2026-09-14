import { ArrowUpRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

import beachAsset from "../assets/places-beach-olenevka.jpeg.asset.json";
import windsurfAsset from "../assets/places-liman-windsurf.jpeg.asset.json";
import kiteAsset from "../assets/places-kitesurf.jpeg.asset.json";
import divingAsset from "../assets/places-diving.jpeg.asset.json";
import atleshAsset from "../assets/places-atlesh.jpeg.asset.json";
import chashaAsset from "../assets/places-chasha-lyubvi.jpeg.asset.json";
import dzhangulAsset from "../assets/places-dzhangul.jpeg.asset.json";
import lavenderAsset from "../assets/lavender-bright.jpeg.asset.json";
import solnechnayaAsset from "../assets/places-solnechnaya-dolina.jpeg.asset.json";
import sunsetAsset from "../assets/places-sunset-cape.jpeg.asset.json";

type Place = {
  name: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
};

const places: Place[] = [
  {
    name: "Пляж Оленевки",
    description:
      "Белый песок, прозрачная вода и просторный берег. Место для неспешного дня у моря, купания и тех самых долгих летних вечеров.",
    image: { url: beachAsset.url, alt: "Белый песчаный пляж Оленевки и прозрачное море" },
  },
  {
    name: "Лиман и виндсерфинг",
    description:
      "Лиман рядом с Оленевкой — одно из популярных мест для виндсерфинга. Можно попробовать выйти на воду с парусом или просто наблюдать за теми, кто ловит ветер.",
    image: { url: windsurfAsset.url, alt: "Виндсерфинг на лимане рядом с Оленевкой" },
  },
  {
    name: "Кайтсерфинг, вингфойл и SUP",
    description:
      "Для тех, кому хочется движения: кайт, вингфойл или спокойная прогулка на SUP. Можно выбрать свой темп — от первых попыток до настоящего драйва на воде.",
    image: { url: kiteAsset.url, alt: "Кайтсерфинг у побережья Тарханкута" },
  },
  {
    name: "Дайвинг и подводный мир",
    description:
      "Тарханкут интересен не только с берега. Прозрачная вода, скалы и подводный рельеф делают морские прогулки и погружения отдельным приключением.",
    image: { url: divingAsset.url, alt: "Прозрачная вода и подводный мир Тарханкута" },
  },
  {
    name: "Большой и Малый Атлеш",
    description:
      "Скалы, природные арки, бухты и открытое море. Одно из тех мест, ради которых хочется останавливаться на каждом повороте и фотографировать.",
    image: { url: atleshAsset.url, alt: "Скалы и открытое море у Малого Атлеша" },
  },
  {
    name: "Чаша Любви",
    description:
      "Одна из самых известных природных локаций Тарханкута — небольшая каменная чаша с морской водой среди скал.",
    image: { url: chashaAsset.url, alt: "Чаша Любви среди скал Тарханкута" },
  },
  {
    name: "Джангуль",
    description:
      "Совсем другой Тарханкут: высокие берега, степь, море и необычный рельеф побережья. Отличное направление для поездки и красивого маршрута.",
    image: { url: dzhangulAsset.url, alt: "Высокие берега и рельеф побережья Джангуль" },
  },
  {
    name: "Лавандовые поля",
    description:
      "Летом степной пейзаж дополняют сиреневые оттенки лаванды. Красивое место для прогулки, фотографий и ещё одного совсем другого впечатления от Крыма.",
    image: { url: lavenderAsset.url, alt: "Лавандовое поле в окрестностях Оленевки" },
  },
  {
    name: "«Солнечная Долина»",
    description:
      "Ещё одно атмосферное место в Оленевке, которое можно добавить в прогулку или небольшой маршрут во время отдыха.",
    image: { url: solnechnayaAsset.url, alt: "Белое здание «Солнечной Долины» в Оленевке" },
  },
  {
    name: "Закаты Тарханкута",
    description:
      "А вечером необязательно куда-то ехать. Здесь можно просто остановиться, посмотреть на море и встретить закат без спешки.",
    image: { url: sunsetAsset.url, alt: "Закат над морем на Тарханкуте" },
  },
];

function PlaceImage({ place, featured }: { place: Place; featured: boolean }) {
  const sizeClass = featured ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]";

  return (
    <div className={`overflow-hidden bg-secondary ${sizeClass}`}>
      <img
        src={place.image.url}
        alt={place.image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out motion-reduce:transition-none lg:group-hover:scale-[1.025]"
      />
    </div>
  );
}


export function PlacesSection() {
  const featured = places.slice(0, 2);
  const compact = places.slice(2);

  return (
    <section id="places" className="bg-secondary/45 py-20 sm:py-28 lg:py-36" aria-labelledby="places-title">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <header className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="h-px w-8 bg-accent" />
            Вокруг Оленевки
          </p>
          <h2 id="places-title" className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Что посмотреть и как отдохнуть
          </h2>
          <p className="mt-6 max-w-3xl text-[1.02rem] leading-[1.85] text-muted-foreground sm:text-lg">
            Море, ветер, скалы, подводный мир и степные маршруты — в Оленевке легко каждый день выбирать новый сценарий отдыха.
          </p>
        </header>

        <ul className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-7">
          {featured.map((place) => (
            <li key={place.name} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_22px_55px_-38px_oklch(0.4_0.06_220/48%)]">
              <PlaceImage place={place} featured />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="font-display text-2xl leading-snug text-foreground sm:text-3xl">{place.name}</h3>
                <p className="mt-3 text-[0.96rem] leading-[1.75] text-muted-foreground sm:text-base">{place.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid auto-rows-fr gap-6 md:grid-cols-2 lg:mt-7 lg:grid-cols-3 lg:gap-7">
          {compact.map((place) => (
            <li key={place.name} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_20px_48px_-38px_oklch(0.4_0.06_220/42%)]">
              <PlaceImage place={place} featured={false} />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-[1.45rem] leading-snug text-foreground sm:text-2xl">{place.name}</h3>
                <p className="mt-3 text-[0.94rem] leading-[1.75] text-muted-foreground">{place.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Button asChild className="btn-primary-sea h-auto min-h-13 w-full rounded-full px-8 py-3.5 text-sm font-semibold sm:w-auto">
            <a href="#cottages">
              <Home size={18} strokeWidth={1.75} />
              Выбрать домик для отдыха
              <ArrowUpRight size={17} strokeWidth={1.75} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
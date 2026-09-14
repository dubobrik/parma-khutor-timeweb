import { createFileRoute } from "@tanstack/react-router";
import { Menu, X, Home, CalendarDays, ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";

import { CottagesSection } from "@/components/cottages-section";
import { GazebosSection } from "@/components/gazebos-section";
import { GroundsKitchenSection } from "@/components/grounds-kitchen-section";
import { PlacesSection } from "@/components/places-section";
import { ContactsSection } from "@/components/contacts-section";

import heroAsset from "../assets/parma-hutor-hero-new.png.asset.json";
import hammockAsset from "../assets/parma-hutor-hammock.png.asset.json";
import swingAsset from "../assets/parma-hutor-about-replacement.png.asset.json";
import supAsset from "../assets/parma-hutor-sup.png.asset.json";
import beachAsset from "../assets/parma-hutor-beach.png.asset.json";
import windsurfAsset from "../assets/parma-hutor-windsurf.png.asset.json";
import kiteAsset from "../assets/parma-hutor-kite.png.asset.json";
import atleshAsset from "../assets/parma-hutor-atlesh.jpg.asset.json";
import lavenderFieldAsset from "../assets/lavender-bright.jpeg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Парма Хутор — отдых в Оленевке" },
      {
        name: "description",
        content: "Камерное место с уютными деревянными домиками в Оленевке — среди моря, простора и природы Тарханкута.",
      },
      { property: "og:title", content: "Парма Хутор — отдых в Оленевке" },
      {
        property: "og:description",
        content: "Домики, море, природа и активный отдых на Тарханкуте.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  { label: "О месте", href: "#about" },
  { label: "Домики", href: "#cottages" },
  { label: "Что посмотреть и как отдохнуть", href: "#places" },
  { label: "Контакты", href: "#contacts" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <section className="relative min-h-[92svh] overflow-hidden" aria-labelledby="hero-title">
        <img
          src={heroAsset.url}
          alt="Два деревянных домика и цветущий сад в Парма Хутор"
          className="absolute inset-0 h-full w-full object-cover object-[50%_60%] sm:object-[50%_55%]"
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        <header className="absolute inset-x-0 top-0 z-20 border-b border-hero-line lg:bg-hero-header-veil">
          <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
            <a href="#top" className="font-display text-[1.35rem] text-hero-foreground sm:text-2xl">
              Парма Хутор
            </a>

            <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-hero-muted text-shadow-hero transition-colors hover:text-hero-foreground">
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-11 place-items-center text-hero-foreground lg:hidden"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <nav aria-label="Мобильная навигация" className="border-t border-hero-line bg-mobile-menu px-5 py-5 backdrop-blur-xl lg:hidden">
              <div className="mx-auto flex max-w-[1440px] flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-hero-line py-4 text-base font-medium text-hero-foreground last:border-0"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </header>

        <div id="top" className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
          <div className="max-w-4xl text-hero-foreground">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-hero-muted sm:text-sm">Оленевка · Тарханкут · Крым</p>
            <h1 id="hero-title" className="font-display text-[2.9rem] leading-[1.06] sm:text-[4.1rem] lg:text-[6.5rem]">Парма Хутор</h1>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-hero-foreground sm:text-2xl lg:text-[1.75rem]">
              Камерное место для отдыха в Оленевке — среди моря, простора и природы Тарханкута
            </p>
            <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-7 text-hero-muted sm:text-lg">
              {"Уютные деревянные домики, зелёная территория, беседки и отдых в своём ритме.\nДо пляжа Оленевки — около 1 км."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cottages"
                className="btn-primary-sea group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground"
              >
                <Home size={18} strokeWidth={1.75} />
                Выбрать домик
                <ArrowUpRight size={17} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contacts"
                className="btn-glass-sea max-sm:btn-glass-sea-strong inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-hero-foreground"
              >
                <CalendarDays size={18} strokeWidth={1.75} />
                Узнать свободные даты
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-20 sm:py-28 lg:py-36" aria-labelledby="about-title">
        <img
          src={beachAsset.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-3xl"
        />
        <div className="pointer-events-none absolute inset-0 bg-sea-veil" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <header className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              <span className="h-px w-8 bg-accent" />
              Отдых в своём ритме
            </p>
            <h2 id="about-title" className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">О Парма Хутор</h2>
          </header>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
            <div className="about-copy space-y-6 text-[1.02rem] leading-[1.85] text-muted-foreground sm:text-lg">
              <p>Парма Хутор — место в Оленевке для тех, кто любит отдыхать по-разному: сегодня провести день у моря и никуда не спешить, а завтра — встать на SUP, поймать ветер на кайте или отправиться исследовать Тарханкут.</p>
              <p>Здесь можно остановиться в уютных деревянных домиках, пить утренний кофе на веранде, отдыхать на зелёной территории, собираться вечером в беседке и готовить ужин на мангале. На территории есть общая кухня, зоны для отдыха и всё необходимое, чтобы чувствовать себя легко и свободно.</p>
              <p>Примерно в 1 км от нас — пляж Оленевки с белым песком и чистейшей водой.</p>
              <p className="font-display text-2xl leading-snug text-foreground">И этим отдых здесь только начинается.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-3xl bg-card shadow-[0_24px_60px_-32px_oklch(0.4_0.06_220/45%)]">
                <img src={hammockAsset.url} alt="Гамак и шезлонги у деревянного домика" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </figure>
              <figure className="overflow-hidden rounded-3xl bg-card shadow-[0_24px_60px_-32px_oklch(0.4_0.06_220/45%)] sm:mt-10">
                <img src={swingAsset.url} alt="Качели, шезлонги и домик в розах на территории" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </figure>
            </div>

            <a
              href="#cottages"
              className="btn-primary-sea group inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground lg:col-start-2 lg:mx-auto lg:w-auto"
            >
              <Home size={18} strokeWidth={1.75} />
              Выбрать домик
              <ArrowUpRight size={17} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-20 sm:mt-24">
            <div className="about-copy mx-auto grid max-w-5xl gap-6 text-[1.02rem] leading-[1.85] text-muted-foreground sm:text-lg md:grid-cols-2">
              <p>Рядом находится лиман — одно из любимых мест для виндсерфинга. Можно попробовать кайтсерфинг, вингфойл или SUP, отправиться на дайвинг и увидеть Тарханкут уже с другой стороны.</p>
              <p>Для тех, кто любит путешествия и красивые маршруты, рядом — Большой и Малый Атлеш, Чаша Любви и Джангуль с их скалами, бухтами и открытыми морскими пейзажами.</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              <figure className="overflow-hidden rounded-2xl bg-card shadow-[0_16px_40px_-24px_oklch(0.4_0.06_220/40%)]">
                <img src={supAsset.url} alt="Пара на SUP-досках" className="aspect-square w-full object-cover" loading="lazy" />
              </figure>
              <figure className="overflow-hidden rounded-2xl bg-card shadow-[0_16px_40px_-24px_oklch(0.4_0.06_220/40%)]">
                <img src={windsurfAsset.url} alt="Виндсерфинг на лимане" className="aspect-square w-full object-cover" loading="lazy" />
              </figure>
              <figure className="overflow-hidden rounded-2xl bg-card shadow-[0_16px_40px_-24px_oklch(0.4_0.06_220/40%)]">
                <img src={kiteAsset.url} alt="Кайтсерфинг" className="aspect-square w-full object-cover" loading="lazy" />
              </figure>
              <figure className="overflow-hidden rounded-2xl bg-card shadow-[0_16px_40px_-24px_oklch(0.4_0.06_220/40%)]">
                <img src={atleshAsset.url} alt="Малый Атлеш" className="aspect-square w-full object-cover" loading="lazy" />
              </figure>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#places"
                className="btn-primary-sea group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground"
              >
                <MapPin size={18} strokeWidth={1.75} />
                Что посмотреть и как отдохнуть
                <ArrowUpRight size={17} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#cottages"
                className="btn-outline-sea inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-primary"
              >
                <Home size={18} strokeWidth={1.75} />
                Выбрать домик
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-12 sm:mt-24 lg:grid-cols-2 lg:items-center lg:gap-16">
            <figure className="overflow-hidden rounded-3xl bg-card shadow-[0_30px_70px_-36px_oklch(0.4_0.06_220/50%)]">
              <img src={lavenderFieldAsset.url} alt="Лавандовое поле в окрестностях Оленевки" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </figure>
            <div className="about-copy space-y-6 text-[1.02rem] leading-[1.85] text-muted-foreground sm:text-lg">
              <p>Можно съездить к лавандовым полям, заглянуть в «Солнечную Долину», провести день в дороге, а вечером вернуться в Парма Хутор и встречать закат уже без спешки.</p>
              <p className="font-display text-2xl leading-snug text-foreground">Здесь легко собрать свой собственный сценарий отдыха.</p>
              <p>Один день — море, песок и книга на пляже.</p>
              <p>Другой — ветер, доска и вода.</p>
              <p>Третий — поездка по Тарханкуту, Атлеш, Джангуль и новые места.</p>
              <p>А потом — тихий вечер на веранде или в беседке под открытым небом.</p>
              <p className="font-display text-2xl leading-snug text-foreground">Парма Хутор — это отдых в своём ритме.</p>
              <p>Для тех, кому хочется и тишины, и впечатлений.</p>
              <p>Море, простор, активный отдых, природные маршруты и те самые тарханкутские закаты, ради которых хочется остаться ещё на один день.</p>
            </div>
          </div>
        </div>
      </section>


      <CottagesSection />
      <GazebosSection />
      <GroundsKitchenSection />
      <PlacesSection />
      <ContactsSection />
    </main>
  );
}

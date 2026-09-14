import { Phone, Send, User } from "lucide-react";
import { Link } from "@tanstack/react-router";

const phones = [
  { label: "8 912 880 880 2", href: "tel:+79128808802" },
  { label: "8 978 540 95 03", href: "tel:+79785409503" },
];

export function ContactsSection() {
  return (
    <section id="contacts" className="border-t border-border/60 bg-background py-20 sm:py-28 lg:py-32" aria-labelledby="contacts-title">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <header className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="h-px w-8 bg-accent" />
            Контакты
          </p>
          <h2 id="contacts-title" className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Связаться с нами
          </h2>
          <p className="mt-6 text-[1.02rem] leading-[1.85] text-muted-foreground sm:text-lg">
            Хотите уточнить свободные даты, задать вопрос о домиках или отдыхе в Оленевке? Пишите в Telegram или звоните — мы подскажем по условиям и свободным датам.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
          <div className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-[0_20px_48px_-38px_oklch(0.4_0.06_220/42%)] sm:p-7">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <User size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Кто встретит</p>
              <p className="mt-2 font-display text-xl leading-snug text-foreground">Андрей и Лариса</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-[0_20px_48px_-38px_oklch(0.4_0.06_220/42%)] sm:p-7">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <Phone size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Телефон</p>
              <div className="mt-2 flex flex-col gap-1.5">
                {phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="font-display text-xl leading-snug text-foreground transition-colors hover:text-primary">
                    {phone.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-[0_20px_48px_-38px_oklch(0.4_0.06_220/42%)] sm:p-7">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <Send size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Telegram</p>
              <a href="https://t.me/andrey_olenevka" target="_blank" rel="noopener noreferrer" className="mt-2 block font-display text-xl leading-snug text-foreground transition-colors hover:text-primary">
                @andrey_olenevka
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-14 border-t border-border/60 pt-8 sm:mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Парма Хутор · Оленевка, Тарханкут, Крым</p>
            <nav aria-label="Правовая информация">
              <Link to="/privacy" className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline">
                Политика в отношении обработки персональных данных
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </section>
  );
}

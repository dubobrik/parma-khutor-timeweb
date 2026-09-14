import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/consent")({
  head: () => ({
    meta: [
      { title: "Согласие на обработку персональных данных — Парма Хутор" },
      {
        name: "description",
        content: "Условия согласия на обработку персональных данных при обращении в Парма Хутор.",
      },
      { property: "og:title", content: "Согласие на обработку персональных данных — Парма Хутор" },
      {
        property: "og:description",
        content: "Согласие на обработку данных, переданных при обращении в Парма Хутор.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ConsentPage,
});

function ConsentPage() {
  return (
    <main className="min-h-screen bg-background py-16 text-foreground sm:py-20">
      <article className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link to="/" className="btn-outline-sea inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary">
          <ArrowLeft size={17} strokeWidth={1.75} />
          Вернуться на сайт
        </Link>

        <h1 className="mt-10 font-display text-3xl leading-tight text-foreground sm:text-5xl">
          Согласие на обработку персональных данных
        </h1>

        <div className="mt-8 space-y-8 text-[1rem] leading-[1.85] text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl leading-snug text-foreground">1. Оператор</h2>
            <p className="mt-3">
              Чумаков Андрей Юрьевич, ИНН 590303217155, e-mail{" "}
              <a href="mailto:a.chumakov.21@yandex.ru" className="text-primary underline-offset-4 hover:underline">a.chumakov.21@yandex.ru</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl leading-snug text-foreground">2. Суть согласия</h2>
            <p className="mt-3">
              Пользователь, добровольно обращаясь к оператору через указанные на сайте контакты (телефон, e-mail),
              а в будущем — отправляя форму на сайте, соглашается на обработку переданных им персональных данных.
            </p>
            <p className="mt-3">
              К таким данным относятся сведения, которые пользователь сообщает сам: имя, номер телефона,
              адрес электронной почты и содержание обращения.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl leading-snug text-foreground">3. Цели обработки</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>ответ на запрос пользователя;</li>
              <li>уточнение свободных дат;</li>
              <li>обсуждение условий проживания;</li>
              <li>связь с пользователем по его обращению.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl leading-snug text-foreground">4. Действия с данными</h2>
            <p className="mt-3">
              Сбор, запись, хранение, уточнение, использование и удаление данных — в объёме, необходимом для указанных целей.
              Данные не используются для рассылок без отдельного согласия пользователя.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl leading-snug text-foreground">5. Срок и отзыв согласия</h2>
            <p className="mt-3">
              Согласие действует до достижения целей обработки или до его отзыва.
              Отозвать согласие можно в любой момент, направив обращение на e-mail оператора{" "}
              <a href="mailto:a.chumakov.21@yandex.ru" className="text-primary underline-offset-4 hover:underline">a.chumakov.21@yandex.ru</a>.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="btn-primary-sea inline-flex min-h-13 items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground">
            <ArrowLeft size={18} strokeWidth={1.75} />
            Вернуться на сайт
          </Link>
        </div>
      </article>
    </main>
  );
}

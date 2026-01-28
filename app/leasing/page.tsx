"use client";

import Link from "next/link";

const leasingTypes = [
  {
    title: "Стандартен финансов лизинг",
    subtitle: "До 60 месеца • първоначална вноска по желание",
    bullets: [
      "Срок до 60 месеца.",
      "Първоначална вноска според желанието на клиента.",
      "Подходящ и за друга техника, не само автомобили.",
      "Ясен, предвидим погасителен план.",
    ],
    badge: "Най-популярен",
  },
  {
    title: "Оперативен лизинг",
    subtitle: "До 60 месеца • с възможност за данъчен кредит (ДДС)",
    bullets: [
      "Срок до 60 месеца.",
      "Първоначална вноска според желанието на клиента.",
      "Възможност за ползване на данъчен кредит (ДДС).",
      "Подходящ за леки автомобили и товарни автомобили с N1 сертификат.",
    ],
    badge: "За фирми",
  },
  {
    title: "Индивидуален план",
    subtitle: "Без първоначална вноска • без одобрение",
    bullets: [
      "Изготвяме план според вашите възможности и предпочитания.",
      "Възможност за лизинг БЕЗ първоначална вноска.",
      "Възможност БЕЗ одобрение.",
      "Бързо и лесно – обсъждаме опциите заедно.",
    ],
    badge: "Гъвкав",
  },
];

export default function LeasingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Лизинг
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
                <span className="font-semibold text-gray-900">
                  Специални условия за лизинг и индивидуален погасителен план
                </span>
                , както и{" "}
                <span className="font-semibold text-gray-900">
                  собствен лизинг без доказване на доходи
                </span>{" "}
                с преференциални условия. С радост ще ви помогнем да намерим
                подходящия за вас автомобил и да го лизинговаме.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Запитване за лизинг
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Разгледай автомобили
                </Link>
              </div>
            </div>

            {/* Quick highlights */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-700">
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-gray-900">Срок:</span> до 60
                  месеца
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Първоначална вноска:
                  </span>{" "}
                  по желание
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Вариант без доходи:
                  </span>{" "}
                  наличен
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {leasingTypes.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {t.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">{t.subtitle}</p>
                  </div>

                  <span className="shrink-0 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    {t.badge}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Попитай за оферта
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Process / Steps */}
          {/* <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Как протича процесът
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Накратко, за да стане ясно и лесно.
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-4">
              {[
                {
                  n: "1",
                  title: "Избор на автомобил",
                  desc: "Избирате автомобил от наличните или казвате какво търсите.",
                },
                {
                  n: "2",
                  title: "Параметри",
                  desc: "Уточняваме срок (до 60 месеца) и първоначална вноска.",
                },
                {
                  n: "3",
                  title: "План",
                  desc: "Изготвяме погасителен план (вкл. индивидуален вариант).",
                },
                {
                  n: "4",
                  title: "Лизинг",
                  desc: "Финализираме условията и стартираме лизинга.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                      {s.n}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-900 p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Искате индивидуална оферта?
                </h2>
                <p className="mt-2 text-sm text-white/80">
                  Изпратете запитване и ще ви предложим най-подходящия вариант
                  според желания срок и бюджет.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Свържи се с нас
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  Виж автомобили
                </Link>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="mt-6 text-xs text-gray-500">
            * Условията са примерни и зависят от автомобила, срока и избраната първоначална
            вноска. Свържете се с нас за конкретна оферта.
          </p>
        </div>
      </section>
    </main>
  );
}

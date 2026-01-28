"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Какви автомобили предлагате?",
    a: "Предлагаме както нови, така и употребявани автомобили, които са преминали техническа проверка.",
    tag: "Автомобили",
  },
  {
    q: "Мога ли да поръчам конкретен модел?",
    a: "Да, можем да ви съдействаме за внос на автомобил по ваш избор.",
    tag: "Внос",
  },
  {
    q: "Помагате ли с финансиране?",
    a: "Разбира се! Работим с различни финансови институции, за да ви предложим удобен лизинг или кредит. Също така предлагаме и собствен лизинг без одобрение!",
    tag: "Финансиране",
  },
  {
    q: "Как мога да проверя историята на автомобила?",
    a: "Ние предоставяме подробна информация за историята на всеки автомобил, включително сервизна документация, километрите и евентуални щети от предишни собственици. Предоставяме и VIN номер за проверка.",
    tag: "Проверка",
  },
  {
    q: "Предлагате ли тест драйв?",
    a: "Да, предлагаме тест драйв за всички автомобили на склад. Свържете се с нас, за да насрочите удобен за вас ден и час.",
    tag: "Покупка",
  },
  {
    q: "Колко време отнема доставката на автомобил при внос?",
    a: "Обикновено доставката отнема между 4 до 7 дни, в зависимост от местоположението на автомобила.",
    tag: "Внос",
  },
  {
    q: "Как се извършва плащането?",
    a: "Приемаме плащания по банков път, както и чрез лизинг или кредит. Предлагаме прозрачни условия и ще ви помогнем да изберете най-удобния вариант.",
    tag: "Плащане",
  },
  {
    q: "Как мога да бъда сигурен в техническото състояние на автомобила?",
    a: "Всеки автомобил преминава през детайлна проверка в сертифициран сервиз. Можем да предоставим и независима инспекция по ваше желание във ваш сервиз.",
    tag: "Проверка",
  },
  {
    q: "Има ли скрити такси при покупка?",
    a: "Не, при нас всички такси са прозрачни. Ще получите пълен списък на разходите преди финализиране на сделката.",
    tag: "Покупка",
  },
  {
    q: "Предлагате ли съдействие при регистрация на автомобил?",
    a: "Да, можем да ви съдействаме с всички необходими документи и процедури за регистрация в КАТ.",
    tag: "Регистрация",
  },
  {
    q: "Работите ли с клиенти извън България?",
    a: "Да, предлагаме услуги за клиенти както в страната, така и в чужбина, включително доставка на автомобили.",
    tag: "Доставка",
  },
  {
    q: "Мога ли да резервирам автомобил?",
    a: "Да, можете да резервирате избрания автомобил срещу минимален депозит, докато уредите останалите подробности по покупката.",
    tag: "Покупка",
  },
];

const tags = [
  "Всички",
  "Автомобили",
  "Внос",
  "Финансиране",
  "Проверка",
  "Покупка",
  "Плащане",
  "Регистрация",
  "Доставка",
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<(typeof tags)[number]>("Всички");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .filter((f) => (activeTag === "Всички" ? true : f.tag === activeTag))
      .filter((f) => {
        if (!q) return true;
        return (
          f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
        );
      });
  }, [query, activeTag]);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Често задавани въпроси
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
                Тук ще намерите отговори на най-честите въпроси относно
                автомобили, внос, финансиране и процеса по покупка.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Свържете се с нас
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Разгледай автомобили
                </Link>
              </div>
            </div>

            {/* Quick pill */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-700">
              <div className="text-xs text-gray-500">Бърз филтър</div>
              <div className="mt-1 font-medium text-gray-900">
                Търсене + категории
              </div>
            </div>
          </div>

          {/* Search + filters */}
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenIndex(null);
                }}
                placeholder="Търсене по ключова дума (напр. лизинг, внос, VIN)..."
                className="h-11 w-full rounded-md border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => {
                const active = activeTag === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setActiveTag(t);
                      setOpenIndex(null);
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                      active
                        ? "bg-gray-900 text-white"
                        : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 text-sm text-gray-600">
              Показани въпроси:{" "}
              <span className="font-semibold text-gray-900">
                {filtered.length}
              </span>
            </div>

            <div className="space-y-3">
              {filtered.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={item.q}
                    className={`overflow-hidden rounded-xl border shadow-sm transition ${
                      isOpen
                        ? "border-gray-300 bg-white"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {/* Header button */}
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition ${
                        isOpen ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                      }`}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                            isOpen
                              ? "border-gray-300 bg-white text-gray-800"
                              : "border-gray-200 bg-gray-50 text-gray-700"
                          }`}
                        >
                          {item.tag}
                        </span>

                        <span
                          className={`font-semibold ${
                            isOpen ? "text-gray-950" : "text-gray-900"
                          } text-[15px] sm:text-sm`}
                        >
                          {item.q}
                        </span>
                      </div>

                      <span
                        className={`transition ${
                          isOpen ? "text-gray-700" : "text-gray-500"
                        }`}
                      >
                        <Chevron open={isOpen} />
                      </span>
                    </button>

                    {/* Answer */}
                    {isOpen && (
                      <div className="border-t border-gray-200 px-6 pb-5 pt-4">
                        <div className="border-l-2 border-gray-900/60 pl-4">
                          <p className="text-sm leading-relaxed text-gray-800 font-medium">
                            {item.a}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                          >
                            Попитай ни
                          </Link>
                          {item.tag === "Финансиране" ? (
                            <Link
                              href="/leasing"
                              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                            >
                              Лизинг условия
                            </Link>
                          ) : null}
                          {item.tag === "Внос" ? (
                            <Link
                              href="/services"
                              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                            >
                              Услуги за внос
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {filtered.length === 0 && (
                <div className="rounded-xl border border-gray-200 bg-white p-8 text-sm text-gray-600">
                  Няма намерени резултати. Опитайте с друга ключова дума или
                  сменете категорията.
                </div>
              )}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-900 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-white">
                Не намерихте отговор?
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Изпратете ни въпрос и ще ви отговорим възможно най-бързо.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Контакти
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  Налични автомобили
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-gray-500">
              Ако искате най-бърз отговор, оставете телефон/имейл в страницата
              „Контакти“.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

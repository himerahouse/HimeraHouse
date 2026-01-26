"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Какви автомобили предлагате?",
    a: "Предлагаме както нови, така и употребявани автомобили, които са преминали техническа проверка.",
  },
  {
    q: "Мога ли да поръчам конкретен модел?",
    a: "Да, можем да ви съдействаме за внос на автомобил по ваш избор.",
  },
  {
    q: "Помагате ли с финансиране?",
    a: "Разбира се! Работим с различни финансови институции, за да ви предложим удобен лизинг или кредит. Също така предлагаме и собствен лизинг без одобрение!",
  },
  {
    q: "Как мога да проверя историята на автомобила?",
    a: "Ние предоставяме подробна информация за историята на всеки автомобил, включително сервизна документация, километрите и евентуални щети от предишни собственици. Предоставяме и VIN номер за проверка.",
  },
  {
    q: "Предлагате ли тест драйв?",
    a: "Да, предлагаме тест драйв за всички автомобили на склад. Свържете се с нас, за да насрочите удобен за вас ден и час.",
  },
  {
    q: "Колко време отнема доставката на автомобил при внос?",
    a: "Обикновено доставката отнема между 4 до 7 дни, в зависимост от местоположението на автомобила.",
  },
  {
    q: "Как се извършва плащането?",
    a: "Приемаме плащания по банков път, както и чрез лизинг или кредит. Предлагаме прозрачни условия и ще ви помогнем да изберете най-удобния вариант.",
  },
  {
    q: "Как мога да бъда сигурен в техническото състояние на автомобила?",
    a: "Всеки автомобил преминава през детайлна проверка в сертифициран сервиз. Можем да предоставим и независима инспекция по ваше желание във ваш сервиз.",
  },
  {
    q: "Има ли скрити такси при покупка?",
    a: "Не, при нас всички такси са прозрачни. Ще получите пълен списък на разходите преди финализиране на сделката.",
  },
  {
    q: "Предлагате ли съдействие при регистрация на автомобил?",
    a: "Да, можем да ви съдействаме с всички необходими документи и процедури за регистрация в КАТ.",
  },
  {
    q: "Работите ли с клиенти извън България?",
    a: "Да, предлагаме услуги за клиенти както в страната, така и в чужбина, включително доставка на автомобили.",
  },
  {
    q: "Мога ли да резервирам автомобил?",
    a: "Да, можете да резервирате избрания автомобил срещу минимален депозит, докато уредите останалите подробности по покупката.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
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

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">
            Често задавани въпроси
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            Тук ще намерите отговори на най-честите въпроси относно автомобили,
            внос, финансиране и процеса по покупка.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Свържете се с нас
            </Link>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span className="text-sm font-semibold text-gray-900">
                      {item.q}
                    </span>
                    <span className="text-gray-500">
                      <Chevron open={isOpen} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Не намерихте отговор?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Изпратете ни въпрос и ще ви отговорим възможно най-бързо.
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Контакти
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

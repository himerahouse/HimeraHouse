"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // UI only for now (no backend)
    setStatus("sent");
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">Контакти</h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            Свържете се с нас или ни пишете директно чрез онлайн формата за
            контакт.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://himera.mobile.bg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Виж обяви в mobile.bg
            </a>
            <Link
              href="/cars"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Разгледай автомобили
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Информация за контакт
                </h2>

                <div className="mt-5 space-y-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">Линк към mobile.bg</p>
                    <a
                      href="https://himera.mobile.bg"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-gray-700 underline underline-offset-4 hover:text-gray-900"
                    >
                      himera.mobile.bg
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="mt-1 text-gray-600">
                      гр. София п.к. 1734, бул. „Симеооновско шосе“ №95
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <a
                      href="tel:+359890998837"
                      className="mt-1 inline-block text-gray-700 underline underline-offset-4 hover:text-gray-900"
                    >
                      0890 99 88 37
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Имейл</p>
                    <a
                      href="mailto:office@himerahouse.com"
                      className="mt-1 inline-block text-gray-700 underline underline-offset-4 hover:text-gray-900"
                    >
                      office@himerahouse.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  Работно време
                </h2>
                <div className="mt-5 space-y-3 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-900">Понеделник - Петък:</span>{" "}
                    09:00 - 18:00ч.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Събота:</span>{" "}
                    Почивен ден (работим с предварителна уговорка)
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Неделя:</span>{" "}
                    Почивен ден (работим с предварителна уговорка)
                  </p>
                </div>
              </div>

              
            </div>

            {/* Form */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h2 className="text-xl font-semibold text-gray-900">
                Форма за контакт
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Изпратете запитване и ще се свържем с вас възможно най-бързо.
              </p>

              {status === "sent" && (
                <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
                  Благодарим! Съобщението е изпратено (демо). Ще свържем формата
                  към имейл в следващ етап.
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Име
                  </label>
                  <input
                    required
                    className="mt-2 h-11 w-full rounded-md border border-gray-200 px-4 text-sm outline-none focus:border-gray-400"
                    placeholder="Вашето име"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Телефон / Имейл
                  </label>
                  <input
                    required
                    className="mt-2 h-11 w-full rounded-md border border-gray-200 px-4 text-sm outline-none focus:border-gray-400"
                    placeholder="0890... или email"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Съобщение
                  </label>
                  <textarea
                    required
                    className="mt-2 min-h-[120px] w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                    placeholder="Напишете вашето запитване..."
                  />
                </div>

                <button
                  type="submit"
                  className="h-11 w-full rounded-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Изпрати
                </button>

                <p className="text-xs text-gray-500">
                  Или се свържете директно на{" "}
                  <a
                    href="mailto:office@himerahouse.com"
                    className="underline underline-offset-4"
                  >
                    office@himerahouse.com
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

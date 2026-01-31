"use client";

import Link from "next/link";
import { useState } from "react";

function Icon({ name }: { name: "pin" | "phone" | "mail" | "clock" | "link" }) {
  const common = "h-4 w-4";
  switch (name) {
    case "link":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M10 13a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17 13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M14 11a5 5 0 0 1 0 7L12.5 19.5a5 5 0 1 1-7-7L7 11"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "phone":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M6.5 3.5 9 6c.5.5.6 1.3.2 1.9l-1 1.5c1.1 2 2.6 3.6 4.6 4.7l1.6-1c.6-.4 1.4-.3 1.9.2l2.5 2.5c.6.6.6 1.6 0 2.2l-1.2 1.2c-1.1 1.1-2.7 1.5-4.2 1-7.2-2.5-10.5-5.9-13-13-.5-1.5-.1-3.1 1-4.2l1.2-1.2c.6-.6 1.6-.6 2.2 0Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m6 8 6 5 6-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 7v6l4 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default function ContactPage() {
  const FORM_ENDPOINT = "https://formspree.io/f/mojwzlr1";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot anti-spam (bots often fill hidden fields)
    if (formData.get("company")) {
      setStatus("error");
      setErrorMsg("Грешка при изпращане. Опитайте отново.");
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(data?.error || "Неуспешно изпращане. Опитайте отново.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Грешка при връзката. Опитайте отново.");
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: title */}
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Контакти
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
                Свържете се с нас или ни пишете директно чрез онлайн формата за
                контакт.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://himera.mobile.bg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Виж обяви в mobile.bg
                </a>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Разгледай автомобили
                </Link>
              </div>
            </div>

            {/* Right: quick info pill */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-gray-900">
                  <Icon name="clock" />
                </span>
                <span>
                  <span className="font-semibold text-gray-900">Днес:</span>{" "}
                  09:00 – 18:00ч.
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Работим и в събота/неделя само с предварителна уговорка.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact info */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Информация за контакт
              </h2>

              <div className="mt-6 divide-y divide-gray-100 text-sm">
                <div className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 text-gray-700">
                    <Icon name="link" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Линк към mobile.bg
                    </p>
                    <a
                      href="https://himera.mobile.bg"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-gray-700 underline underline-offset-4 hover:text-gray-900"
                    >
                      himera.mobile.bg
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 text-gray-700">
                    <Icon name="pin" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="mt-1 text-gray-600">
                      гр. София п.к. 1734, бул. „Симеооновско шосе“ №95
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 text-gray-700">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <a
                      href="tel:+359890998837"
                      className="mt-1 inline-block text-gray-700 underline underline-offset-4 hover:text-gray-900"
                    >
                      0890 99 88 37
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 text-gray-700">
                    <Icon name="mail" />
                  </span>
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
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Форма за контакт
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Изпратете запитване и ще се свържем с вас възможно най-бързо.
              </p>

              {status === "sent" && (
                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                  <span className="font-semibold">Благодарим!</span> Съобщението е
                  изпратено.
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
                  <span className="font-semibold">Упс!</span> {errorMsg}
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                {/* Optional email subject */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Ново запитване от сайта"
                />

                <div>
                  <label className="text-sm font-medium text-gray-900">Име</label>
                  <input
                    name="name"
                    required
                    disabled={status === "sending"}
                    className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-50"
                    placeholder="Вашето име"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Телефон / Имейл
                  </label>
                  <input
                    name="contact"
                    required
                    disabled={status === "sending"}
                    className="mt-2 h-11 w-full rounded-md border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-50"
                    placeholder="0890... или email"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Съобщение
                  </label>
                  <textarea
                    name="message"
                    required
                    disabled={status === "sending"}
                    className="mt-2 min-h-[140px] w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-50"
                    placeholder="Напишете вашето запитване..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-11 w-full rounded-md bg-gray-900 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {status === "sending" ? "Изпращане..." : "Изпрати"}
                </button>

                <p className="text-xs text-gray-500">
                  Или се свържете директно на{" "}
                  <a
                    href="mailto:office@himerahouse.com"
                    className="underline underline-offset-4 hover:text-gray-800"
                  >
                    office@himerahouse.com
                  </a>
                  .
                </p>
              </form>
            </div>

            {/* Working hours (left) */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Работно време</h2>
              <div className="mt-5 space-y-3 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">
                    Понеделник - Петък:
                  </span>{" "}
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

            {/* Spacer card on the right */}
            <div className="hidden lg:block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Бързи връзки</h2>
              <p className="mt-2 text-sm text-gray-600">
                Ако предпочитате, разгледайте наличните автомобили или пишете
                директно.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="https://himera.mobile.bg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
                >
                  Mobile.bg профил
                </a>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Всички автомобили
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="px-8 pt-8">
                <h2 className="text-xl font-semibold text-gray-900">Локация</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Отворете картата за навигация.
                </p>
              </div>
              <div className="mt-6 h-[380px] w-full">
                <iframe
                  title="Himera House Map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Симеоновско%20шосе%2095%20София&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

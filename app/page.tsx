import Link from "next/link";

function Icon({
  name,
}: {
  name: "car" | "handshake" | "shield" | "leasing" | "truck" | "kat";
}) {
  const common = "h-5 w-5";
  switch (name) {
    case "car":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 14v-2a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 9l1.3-3.2A3 3 0 0 1 10.1 4h3.8a3 3 0 0 1 2.8 1.8L18 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 14v3a2 2 0 0 0 2 2h1m10-5v3a2 2 0 0 1-2 2h-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "handshake":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 13l3 3a2 2 0 0 0 3 0l4-4a2 2 0 0 0 0-3l-1-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 9.5 7 13l2-2-3.5-3.5a2 2 0 0 0-2.8 0l-.2.2a2 2 0 0 0 0 2.8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 9.5 17 6l-2 2 3.5 3.5a2 2 0 0 0 2.8 0l.2-.2a2 2 0 0 0 0-2.8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2 20 6v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5 11 14l3.5-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "leasing":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 3h12a2 2 0 0 1 2 2v16H4V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 8h8M8 12h8M8 16h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "truck":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 16V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17 9h2.5L22 12v4h-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "kat":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20v-9.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
  }
}

const highlights = [
  {
    title: "Качествени автомобили",
    desc: "Внасяме само проверени и надеждни автомобили.",
    icon: "car" as const,
  },
  {
    title: "Индивидуален подход",
    desc: "Разбираме нуждите на всеки клиент и предлагаме персонализирани решения. ",
    icon: "handshake" as const,
  },
  {
    title: "Прозрачност и доверие",
    desc: "Гаранция за качество и ясни условия на покупка.",
    icon: "shield" as const,
  },
  {
    title: "Индивидуален лизинг с одобрение в рамките на деня",
    desc: "",
    icon: "leasing" as const,
  },
];

const services = [
  {
    title: "Внос по заявка",
    desc: "Намираме автомобил/техника според изискванията и организираме доставка.",
    icon: "truck" as const,
    href: "/services",
    linkLabel: "Виж услуги",
  },
  {
    title: "Регистрация в КАТ",
    desc: "Ние организираме всички документи и наш представител регистрира автомобила без да чакате на опашки и да губите време. ",
    icon: "kat" as const,
    href: "/services",
    linkLabel: "Как работи",
  },
  {
    title: "Лизинг",
    desc: "Индивидуален лизинг спрямо месечния Ви бюджет и Вашите изисквания за първоначална вноска.",
    icon: "leasing" as const,
    href: "/leasing",
    linkLabel: "Лизинг условия",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Left */}
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-gray-500">HIMERA HOUSE</p>

              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Вашият доверен партньор за внос и продажба на автомобили
              </h1>

              <p className="mt-5 text-base leading-relaxed text-gray-600">
                Ние от „Химера Хаус“ ЕООД се стремим да предоставим отлично обслужване
                в сферата на автомобилната търговия. Предлагаме внимателно подбрани
                автомобили на конкурентни цени, съобразени с вашите изисквания и бюджет.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Виж автомобили
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Запитване
                </Link>
              </div>

              
            </div>

            {/* Right: Quick card */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Бързи действия
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Кажете ни какво търсите и ще предложим вариант според бюджета ви.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/cars"
                  className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
                >
                  Налични автомобили
                </Link>
                <Link
                  href="/leasing"
                  className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Лизинг оферта
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Свържи се с нас
                </Link>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Защо да изберете нас
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-600">
                Комбинация от проверени автомобили, прозрачност и съдействие по целия процес.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-900 underline underline-offset-4"
            >
              Виж всички услуги
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gray-900">
                    <Icon name={h.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {h.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-semibold text-gray-900">
            С какво можем да помогнем
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-gray-600">
            Внос по заявка, регистрация, транспорт, застраховки и лизинг – всичко на едно място.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gray-900">
                    <Icon name={s.icon} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {s.desc}
                    </p>
                    <div className="mt-4">
                      <Link
                        href={s.href}
                        className="text-sm font-medium text-gray-900 underline underline-offset-4"
                      >
                        {s.linkLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-14">
          <div className="rounded-2xl border border-gray-200 bg-gray-900 p-10 text-white shadow-sm">
            <h3 className="text-2xl font-semibold">Готови ли сте да започнем?</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
              Изпратете запитване и ще ви помогнем да намерите автомобил според вашия бюджет и изисквания.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                Разгледай автомобили
              </Link>
              <Link
                href="/leasing"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Лизинг
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

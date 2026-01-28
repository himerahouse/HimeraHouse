import Link from "next/link";

const services = [
  {
    title: "Внос на автомобили и техника по заявка",
    subtitle: "Намираме подходящия автомобил според вашите изисквания и бюджет",
    bullets: [
      "Съдействие при избор на автомобил според желанията и бюджета ви.",
      "Проверка на историята и наличната информация за автомобила.",
      "Организиране на лицензиран и бърз транспорт до адреса ви в срок до 5 календарни дни.",
      "Доставка на машини и техника по задание с минимален депозит.",
    ],
  },
  {
    title: "Регистрация в КАТ",
    subtitle: "Пълно съдействие без опашки и загуба на време",
    bullets: [
      "Подготовка и организация на всички необходими документи.",
      "Регистрация на автомобила от наш представител.",
      "Спестяване на време и административни ангажименти.",
    ],
  },
  {
    title: "Застраховки",
    subtitle: "Преференциални условия чрез наш застрахователен брокер",
    bullets: [
      "Гражданска отговорност.",
      "Авто КАСКО.",
      "Съдействие при избор на най-подходящата застраховка.",
    ],
  },
  {
    title: "Транспорт",
    subtitle: "Бърз и лицензиран транспорт в България и Европа",
    bullets: [
      "Транспорт до всяка точка на България.",
      "Международен транспорт в рамките на Европа.",
      "Лицензиран и организиран превоз.",
    ],
  },
  {
    title: "Лизинг",
    subtitle: "Индивидуален план според вашия месечен бюджет",
    bullets: [
      "Изготвяне на лизингово решение според бюджета ви.",
      "Условия съобразени с желаната първоначална вноска.",
      "Подходящо за леки и товарни автомобили.",
    ],
    cta: { href: "/leasing", label: "Виж повече за лизинг" },
    badge: "Преференциални условия",
  },
  {
    title: "Продажба на автомобил на консигнация",
    subtitle: "Продажба от ваше име чрез нашия шоурум",
    bullets: [
      "Приемане на автомобила за продажба в нашия шоурум.",
      "Стремеж към най-изгодна продажна цена в кратки срокове.",
      "Спазване на вашите изисквания относно начина на продажба.",
      "Оценка и цена на пазарен принцип с цел успешна реализация.",
    ],
  },
];

function Icon({
  name,
}: {
  name: "import" | "kat" | "insurance" | "transport" | "leasing" | "consign";
}) {
  const common = "h-5 w-5";
  switch (name) {
    case "import":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M3 7h18M6 7l1 14h10l1-14" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "kat":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20v-9.5Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "insurance":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 20 6v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9.5 12.5 11 14l3.5-4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "transport":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M3 16V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="1.8" />
          <path d="M17 9h2.5L22 12v4h-5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "leasing":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M6 7v14h12V7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 11h8M8 15h6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "consign":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M7 7h10l2 3v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9l2-3Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}

const iconByTitle: Record<string, Parameters<typeof Icon>[0]["name"]> = {
  "Внос на автомобили и техника по заявка": "import",
  "Регистрация в КАТ": "kat",
  "Застраховки": "insurance",
  "Транспорт": "transport",
  "Лизинг": "leasing",
  "Продажба на автомобил на консигнация": "consign",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Услуги
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            Предлагаме цялостно съдействие при внос, покупка, регистрация,
            застраховане, транспорт и финансиране на автомобили и техника.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <Icon name={iconByTitle[s.title]} />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">{s.subtitle}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {s.cta && (
                  <div className="mt-6">
                    <Link
                      href={s.cta.href}
                      className="text-sm font-medium text-gray-900 underline underline-offset-4"
                    >
                      {s.cta.label}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

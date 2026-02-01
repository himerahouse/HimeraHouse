import Link from "next/link";

const services = [
  {
    title: "Import of cars and equipment on request",
    subtitle:
      "We’ll be happy to assist you in finding the right car for you, which will match your expectations and budget.",
    bullets: [
      "We’ll be happy to assist you in finding the right car for you, which will match your expectations and budget.",
      "We’ll check the vehicle’s background.",
      "Within 5 calendar days, we’ll arrange licensed and fast transport to your address.",
      "At your request we can deliver any kind of machines and equipment against the payment of a minimum deposit!",
    ],
  },
  {
    title: "Registration in Traffic Police",
    subtitle:
      "We shall prepare all necessary documents, and a representative of ours shall register the motor vehicle without you waiting in line and wasting your time.",
    bullets: [
      "We shall prepare all necessary documents.",
      "A representative of ours shall register the motor vehicle without you waiting in line and wasting your time.",
    ],
  },
  {
    title: "Insurance policies",
    subtitle:
      "We offer Civil Liability and Auto Casco insurance policies concluded at preferential prices through our broker.",
    bullets: [
      "Civil Liability insurance.",
      "Auto Casco insurance.",
      "Preferential prices through our broker.",
    ],
  },
  {
    title: "Transport",
    subtitle:
      "Delivery to any location on the territory of Bulgaria and Europe by fast and licensed means of transport.",
    bullets: [
      "Delivery to any location on the territory of Bulgaria.",
      "International delivery within Europe.",
      "Fast and licensed means of transport.",
    ],
  },
  {
    title: "Leasing",
    subtitle:
      "Individual leasing in accordance with your monthly budget and requirements for initial payment.",
    bullets: [
      "Individual leasing in accordance with your monthly budget.",
      "Terms in line with your requirements for initial payment.",
      "Suitable for passenger cars and commercial vehicles.",
    ],
    cta: { href: "/leasing", label: "Learn more about leasing" },
    badge: "Preferential terms",
  },
  {
    title: "Selling your car on consignment",
    subtitle:
      "We may agree to sell your car in our showroom and will try to achieve the best price in the shortest possible time.",
    bullets: [
      "We may agree to sell your car in our showroom.",
      "We will try to achieve the best price in the shortest possible time.",
      "If you leave your car for sale, we shall comply with the way you want it to be sold.",
      "We assess its value and come up with a market price that shall guarantee the successful sale of the vehicle.",
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
          <path
            d="M3 7h18M6 7l1 14h10l1-14"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "kat":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20v-9.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "insurance":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 20 6v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9.5 12.5 11 14l3.5-4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "transport":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 16V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M17 9h2.5L22 12v4h-5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "leasing":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7h16M6 7v14h12V7"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M8 11h8M8 15h6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "consign":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 7h10l2 3v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9l2-3Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}

const iconByTitle: Record<string, Parameters<typeof Icon>[0]["name"]> = {
  "Import of cars and equipment on request": "import",
  "Registration in Traffic Police": "kat",
  "Insurance policies": "insurance",
  Transport: "transport",
  Leasing: "leasing",
  "Selling your car on consignment": "consign",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="border-b border-gray-300 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Services
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700">
            We offer full assistance with import, purchase, registration,
            insurance, transport, and financing of cars and equipment.
          </p>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-300 bg-gray-50 p-8 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-gray-900">
                      <Icon name={iconByTitle[s.title]} />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {s.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-700">{s.subtitle}</p>
                    </div>
                  </div>

                  {"badge" in s && (s as any).badge ? (
                    <span className="shrink-0 rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                      {(s as any).badge}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-800">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {s.cta && (
                  <div className="mt-6">
                    <Link
                      href={s.cta.href}
                      className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-black"
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

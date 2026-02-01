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
    title: "Quality cars",
    desc: "We import only tested and reliable vehicles.",
    icon: "car" as const,
  },
  {
    title: "Individual approach",
    desc: "We understand the needs of each client and provide personalized solutions.",
    icon: "handshake" as const,
  },
  {
    title: "Transparency and trust",
    desc: "Quality guarantee and clear purchase terms.",
    icon: "shield" as const,
  },
  {
    title: "Individual leasing approved within one day",
    desc: "",
    icon: "leasing" as const,
  },
];

const services = [
  {
    title: "Import on request",
    desc: "We find a car/vehicle according to your requirements and organize delivery.",
    icon: "truck" as const,
    href: "/services",
    linkLabel: "View services",
  },
  {
    title: "Registration at KAT",
    desc: "We organize all documents and our representative registers the vehicle for you, without waiting in lines and wasting time.",
    icon: "kat" as const,
    href: "/services",
    linkLabel: "How it works",
  },
  {
    title: "Leasing",
    desc: "Personalized leasing tailored to your monthly budget and your requirements for the initial down payment.",
    icon: "leasing" as const,
    href: "/leasing",
    linkLabel: "Leasing terms",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Left */}
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-gray-600">HIMERA HOUSE</p>

              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Welcome to HIMERA HOUSE – Your trusted partner in the import and sale of cars
              </h1>

              <p className="mt-5 text-base leading-relaxed text-gray-700">
                At Himera House Ltd. we strive to provide excellent service in the field of automotive trade.
                We offer a carefully selected range of high-quality cars at competitive prices, tailored to
                your requirements and budget.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  View cars
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Inquiry
                </Link>
              </div>
            </div>

            {/* Right: Quick card */}
            <div className="rounded-2xl border border-gray-300 bg-gray-100 p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Quick actions</h2>
              <p className="mt-2 text-sm text-gray-700">
                Tell us what you are looking for and we will offer a solution tailored to your budget.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/cars"
                  className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-black"
                >
                  Available cars
                </Link>
                <Link
                  href="/leasing"
                  className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Leasing offer
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Why choose us</h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-700">
                A combination of tested vehicles, transparency, and full support throughout the entire process.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-black"
            >
              View all services
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-gray-300 bg-gray-50 p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gray-900">
                    <Icon name={h.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{h.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-semibold text-gray-900">How we can help</h2>
          <p className="mt-2 max-w-3xl text-sm text-gray-700">
            Import on request, registration, transport, insurance, and leasing – everything in one place.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-300 bg-gray-50 p-8 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gray-900">
                    <Icon name={s.icon} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.desc}</p>
                    <div className="mt-4">
                      <Link
                        href={s.href}
                        className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-black"
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
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 pb-14">
          <div className="rounded-2xl border border-gray-200 bg-gray-900 p-10 text-white shadow-sm">
            <h3 className="text-2xl font-semibold">Ready to get started?</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
              Send us an inquiry and we will help you find a car that fits your budget and requirements.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
              >
                Contact
              </Link>
              <Link
                href="/cars"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Browse cars
              </Link>
              <Link
                href="/leasing"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Leasing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

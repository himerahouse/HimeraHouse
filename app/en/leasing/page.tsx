"use client";

import Link from "next/link";

const leasingTypes = [
  {
    title: "Standard financial leasing",
    subtitle: "Up to 60 months • down payment set by the customer",
    bullets: [
      "Standard car leasing for a period of up to 60 months.",
      "Initial payment determined by the customer.",
      "In addition to cars, this type of leasing is also suitable for other types of equipment.",
    ],
    badge: "Most popular",
  },
  {
    title: "Operational leasing",
    subtitle: "Up to 60 months • VAT tax credit option",
    bullets: [
      "A special form of leasing with a period of up to 60 months.",
      "Initial payment determined by the customer.",
      "Allows the customer to use a tax credit (VAT).",
      "Applicable for passenger cars or a truck with an N1 certificate.",
    ],
    badge: "For businesses",
  },
  {
    title: "INDIVIDUAL PLAN",
    subtitle: "No down payment • no approval",
    bullets: [
      "We shall draft an individual leasing plan tailored to the customer.",
      "Option for leasing WITHOUT an initial payment, if the customer desires so.",
      "Option WITHOUT an approval.",
      "We discuss the details together to match the most suitable plan.",
    ],
    badge: "Flexible",
  },
];

export default function LeasingPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="border-b border-gray-300 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Leasing
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700">
                <span className="font-semibold text-gray-900">
                  SPECIAL LEASING CONDITIONS AND INDIVIDUAL REPAYMENT PLAN
                </span>
                , as well as{" "}
                <span className="font-semibold text-gray-900">
                  OUR OWN LEASING AT PREFERENTIAL TERMS, WITH NO PROOF OF INCOME
                </span>
                . We’ll be glad to assist you in finding and leasing the right
                car for you.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Leasing inquiry
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Browse cars
                </Link>
              </div>
            </div>

            {/* Quick highlights */}
            <div className="rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 text-sm text-gray-700 shadow-sm">
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-gray-900">Term:</span> up
                  to 60 months
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Down payment:
                  </span>{" "}
                  set by the customer
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    No proof of income:
                  </span>{" "}
                  available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {leasingTypes.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-gray-300 bg-gray-50 p-8 shadow-sm flex h-full flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {t.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">{t.subtitle}</p>
                  </div>

                  <span className="shrink-0 rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                    {t.badge}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-800">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Push button to the bottom so all cards look even */}
                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Request an offer
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-900 p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Want an individual offer?
                </h2>
                <p className="mt-2 text-sm text-white/80">
                  Send an inquiry and we will propose the most suitable option
                  based on your desired term and budget.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
                >
                  Contact us
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  View cars
                </Link>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="mt-6 text-xs text-gray-600">
            * Terms are indicative and depend on the vehicle, the term, and the
            selected down payment. Contact us for a specific offer.
          </p>
        </div>
      </section>
    </main>
  );
}

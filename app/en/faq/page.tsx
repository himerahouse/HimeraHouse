"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What cars do you offer?",
    a: "We offer both new and used cars that have been technically inspected.",
    tag: "Cars",
  },
  {
    q: "Can I order a specific model?",
    a: "Yes, we can help you with the import of a car of your choice.",
    tag: "Import",
  },
  {
    q: "Do you provide financial assistance?",
    a: "Of course! We work with various financial institutions so as to offer you a suitable leasing or credit. We also have our own leasing which does not require any approval!",
    tag: "Financing",
  },
  {
    q: "How can I check the car’s background?",
    a: "We provide detailed information about the car’s history, including service records, mileage, and eventual damages caused by previous owners. The VIN number is also provided for verification purposes.",
    tag: "Verification",
  },
  {
    q: "Do you offer test drive?",
    a: "Yes, we offer test drive for all cars available in our garage. Get in touch with us to schedule a day and time suitable for you.",
    tag: "Purchase",
  },
  {
    q: "How long does it take for a car to be imported?",
    a: "Depending on the vehicle’s location, the delivery normally takes between 4 and 7 days.",
    tag: "Import",
  },
  {
    q: "How is payment made?",
    a: "We accept payments by bank transfer and through leasing or credit. We offer transparent terms and conditions and will help you choose the most convenient option.",
    tag: "Payment",
  },
  {
    q: "How can I be sure of the car’s technical condition?",
    a: "Each vehicle is subjected to a detailed inspection carried out in a certified service station. We may also provide an independent inspection in a service station of your choice.",
    tag: "Verification",
  },
  {
    q: "Are there any hidden fees related to the purchase?",
    a: "No, all our fees are transparent. You will receive a full list of costs before the transaction is finalized.",
    tag: "Purchase",
  },
  {
    q: "Do you offer support during the car’s registration?",
    a: "Yes, we may assist you with all necessary documents and Traffic Police registration procedures.",
    tag: "Registration",
  },
  {
    q: "Do you work with customers outside Bulgaria?",
    a: "Yes, our services, including car deliveries, are offered to customers located both in the country and abroad.",
    tag: "Delivery",
  },
  {
    q: "Can I reserve a car?",
    a: "Yes, while arranging the remaining purchase details, you may reserve the car selected by you against the payment of a minimum deposit.",
    tag: "Purchase",
  },
];

const tags = [
  "All",
  "Cars",
  "Import",
  "Financing",
  "Verification",
  "Purchase",
  "Payment",
  "Registration",
  "Delivery",
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
  const [activeTag, setActiveTag] = useState<(typeof tags)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .filter((f) => (activeTag === "All" ? true : f.tag === activeTag))
      .filter((f) => {
        if (!q) return true;
        return f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      });
  }, [query, activeTag]);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <section className="border-b border-gray-300 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700">
                Here you will find answers to the most frequently asked
                questions regarding cars, import, financing, and the purchasing
                process.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Contact us
                </Link>
                <Link
                  href="/cars"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  Browse cars
                </Link>
              </div>
            </div>

            {/* Quick pill */}
            <div className="rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 text-sm text-gray-700 shadow-sm">
              <div className="text-xs text-gray-500">Quick filter</div>
              <div className="mt-1 font-medium text-gray-900">
                Search + categories
              </div>
            </div>
          </div>

          {/* Search + filters */}
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <SearchIcon />
              </span>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenIndex(null);
                }}
                placeholder='Search by keyword (e.g. leasing, import, VIN)...'
                className="h-11 w-full rounded-md border border-gray-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
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
                        : "border border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100"
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
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 text-sm text-gray-700">
              Questions shown:{" "}
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
                    className="overflow-hidden rounded-xl border border-gray-300 bg-gray-50 shadow-sm transition"
                  >
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition ${
                        isOpen ? "bg-gray-100" : "bg-gray-50 hover:bg-gray-100"
                      }`}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                            isOpen
                              ? "border-gray-300 bg-white text-gray-800"
                              : "border-gray-300 bg-gray-100 text-gray-800"
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
                          isOpen ? "text-gray-700" : "text-gray-600"
                        }`}
                      >
                        <Chevron open={isOpen} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-gray-300 px-6 pb-5 pt-4">
                        <div className="border-l-2 border-gray-900/60 pl-4">
                          <p className="text-sm font-medium leading-relaxed text-gray-800">
                            {item.a}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
                          >
                            Ask us
                          </Link>

                          {item.tag === "Financing" ? (
                            <Link
                              href="/leasing"
                              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                            >
                              Leasing terms
                            </Link>
                          ) : null}

                          {item.tag === "Import" ? (
                            <Link
                              href="/services"
                              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                            >
                              Import services
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {filtered.length === 0 && (
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-8 text-sm text-gray-700">
                  No results found. Try a different keyword or switch the
                  category.
                </div>
              )}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-900 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-white">
                Didn’t find an answer?
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Send us your question and we will reply as soon as possible.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
                  Available cars
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-gray-600">
              For the fastest response, leave your phone/email on the “Contact”
              page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

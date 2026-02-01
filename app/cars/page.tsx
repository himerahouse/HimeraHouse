"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { SheetCar } from "../../lib/carsFromSheet";

const MOBILE_BG = "https://himera.mobile.bg";

const FUEL_OPTIONS = ["Бензин", "Дизел", "Хибрид", "Електрически"] as const;
const TRANS_OPTIONS = ["Автоматик", "Ръчни"] as const;

function statusLabel(status?: SheetCar["status"]) {
  switch (status) {
    case "available":
      return "Налична";
    case "reserved":
      return "Капарирана";
    case "sold":
      return "Продадена";
    case "germany":
      return "Налична в Германия";
    default:
      return null;
  }
}

function statusClass(status?: SheetCar["status"]) {
  switch (status) {
    case "available":
      return "bg-emerald-50 text-emerald-900 border-emerald-200";
    case "reserved":
      return "bg-amber-50 text-amber-900 border-amber-200";
    case "sold":
      return "bg-gray-200 text-gray-800 border-gray-300";
    case "germany":
      return "bg-blue-50 text-blue-900 border-blue-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
}

function extractFuelFromSubtitle(subtitle?: string) {
  const s = (subtitle ?? "").toLowerCase();
  if (s.includes("диз")) return "Дизел";
  if (s.includes("бенз")) return "Бензин";
  if (s.includes("хиб")) return "Хибрид";
  if (s.includes("елект")) return "Електрически";
  return "";
}

function extractTransFromSubtitle(subtitle?: string) {
  const s = (subtitle ?? "").toLowerCase();
  if (s.includes("авто")) return "Автоматик";
  if (s.includes("ръч")) return "Ръчни";
  return "";
}

function CarCard({ car }: { car: SheetCar }) {
  const badge = statusLabel(car.status);

  const images = useMemo(() => {
    const arr = Array.isArray(car.images) ? car.images : [];
    return Array.from(
      new Set(
        arr
          .map((x) => (typeof x === "string" ? x.trim() : ""))
          .filter(Boolean)
      )
    );
  }, [car.images]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (active > images.length - 1) setActive(0);
  }, [images.length, active]);

  const raw = images.length ? images[active] : "";
  const img =
    !raw || raw.includes("example.com") || raw.includes("drive.google.com")
      ? "/cars/placeholder.png"
      : raw;

  const canNav = images.length > 1;

  function prev() {
    if (!canNav) return;
    setActive((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    if (!canNav) return;
    setActive((i) => (i + 1) % images.length);
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-gray-50 shadow-sm">
      <div className="relative h-56 w-full bg-gray-200">
        <Image
          src={img}
          alt={car.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />

        {badge && (
          <div className="absolute left-4 top-4">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${statusClass(
                car.status
              )}`}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Arrows */}
        {canNav && (
          <>
            <button
              type="button"
              aria-label="Предишна снимка"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur hover:bg-black/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Следваща снимка"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur hover:bg-black/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {canNav && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className="flex gap-1.5 rounded-full bg-black/35 px-3 py-1.5 backdrop-blur">
              {images.slice(0, 8).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Отиди на снимка ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === active ? "bg-white" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-base font-semibold text-gray-900">{car.title}</h3>
        <p className="mt-1 text-sm text-gray-700">{car.subtitle}</p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500">
              Цена
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {car.price || "По запитване"}
            </div>
          </div>

          <a
            href={car.mobileUrl || MOBILE_BG}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-black"
          >
            Виж в mobile.bg
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CarsPage() {
  const [cars, setCars] = useState<SheetCar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [fuel, setFuel] = useState("all");
  const [trans, setTrans] = useState("all");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/cars", { cache: "no-store" });
        const data = await res.json();
        setCars(data.cars || []);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return cars.filter((c) => {
      const fuelOk =
        fuel === "all" || extractFuelFromSubtitle(c.subtitle) === fuel;
      const transOk =
        trans === "all" || extractTransFromSubtitle(c.subtitle) === trans;
      const textOk =
        !q ||
        c.title.toLowerCase().includes(q) ||
        (c.subtitle ?? "").toLowerCase().includes(q);
      return fuelOk && transOk && textOk;
    });
  }, [cars, query, fuel, trans]);

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="border-b border-gray-300 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">Автомобили</h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-700">
            Разгледайте актуалните предложения или посетете mobile.bg.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Търсене..."
              className="h-11 rounded-md border border-gray-300 bg-white px-4 text-sm focus:ring-2 focus:ring-gray-200"
            />

            <select
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              className="h-11 rounded-md border border-gray-300 bg-white px-4 text-sm"
            >
              <option value="all">Гориво (всички)</option>
              {FUEL_OPTIONS.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>

            <select
              value={trans}
              onChange={(e) => setTrans(e.target.value)}
              className="h-11 rounded-md border border-gray-300 bg-white px-4 text-sm"
            >
              <option value="all">Скоростна кутия</option>
              {TRANS_OPTIONS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <a
              href={MOBILE_BG}
              target="_blank"
              rel="noreferrer"
              className="h-11 rounded-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-black inline-flex items-center justify-center"
            >
              Mobile.bg
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          {loading ? (
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-6">
              Зареждане...
            </div>
          ) : error ? (
            <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-red-900">
              Грешка: {error}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

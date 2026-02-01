"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { SheetCar } from "../../lib/carsFromSheet";

const MOBILE_BG = "https://himera.mobile.bg";

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

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="border-b border-gray-300 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">Автомобили</h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-700">
            Разгледайте актуалните предложения или посетете mobile.bg.
          </p>

          <div className="mt-6">
            <a
              href={MOBILE_BG}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-white hover:bg-black"
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
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

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

  // Process images to ensure we get all of them properly
  const images = useMemo(() => {
    const arr = Array.isArray(car.images) ? car.images : [];
    // Filter out empty strings and invalid URLs
    return arr
      .map((x) => (typeof x === "string" ? x.trim() : ""))
      .filter((url) => 
        url && 
        !url.includes("example.com") && 
        !url.includes("drive.google.com")
      );
  }, [car.images]);

  const [activeIndex, setActiveIndex] = useState(0);

  // Reset active index if it becomes invalid
  useEffect(() => {
    if (images.length === 0) return;
    if (activeIndex >= images.length) {
      setActiveIndex(0);
    }
  }, [images.length, activeIndex]);

  // Get current image URL or placeholder
  const currentImage = images.length > 0 && activeIndex < images.length
    ? images[activeIndex]
    : "/cars/placeholder.png";

  const canNav = images.length > 1;

  function prev() {
    if (!canNav) return;
    setActiveIndex((current) => 
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function next() {
    if (!canNav) return;
    setActiveIndex((current) => 
      current === images.length - 1 ? 0 : current + 1
    );
  }

  function goToImage(index: number) {
    if (index >= 0 && index < images.length) {
      setActiveIndex(index);
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-gray-50 shadow-sm">
      <div className="relative h-56 w-full bg-gray-200">
        <Image
          key={currentImage} // Force re-render when image changes
          src={currentImage}
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

        {canNav && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur hover:bg-black/60 transition-colors z-10"
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
              aria-label="Next image"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur hover:bg-black/60 transition-colors z-10"
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

        {canNav && images.length > 0 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
            <div className="flex gap-1.5 rounded-full bg-black/35 px-3 py-1.5 backdrop-blur">
              {images.slice(0, 8).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Отиди на изображение ${index + 1}`}
                  onClick={() => goToImage(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? "bg-white scale-125" 
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
              {images.length > 8 && (
                <span className="text-xs text-white/70 ml-1">
                  +{images.length - 8}
                </span>
              )}
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
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-black transition-colors"
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
              className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-white hover:bg-black transition-colors"
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
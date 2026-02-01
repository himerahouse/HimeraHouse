// src/lib/carsFromSheet.ts
import { parseCsv } from "./csv";

export type SheetCar = {
  id: string;
  title: string;
  subtitle: string;
  engSubtitle?: string; // ✅ NEW
  price: string;
  images: string[];
  mobileUrl: string;

  status?: "available" | "reserved" | "sold" | "germany";
  fuel?: string;
  transmission?: string;
  year?: number;
  mileageKm?: number;
};

function num(val: string) {
  const n = Number(String(val || "").replace(/[^\d]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

export async function fetchCarsFromSheet(): Promise<SheetCar[]> {
  const url =
    process.env.CARS_SHEET_CSV_URL ||
    process.env.NEXT_PUBLIC_CARS_SHEET_CSV_URL;

  if (!url) return [];

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  const csv = await res.text();
  const rows = parseCsv(csv);
  if (rows.length < 2) return [];

  const header = rows[0].map((h) => h.trim());

  const idx = (name: string) => header.indexOf(name);
  const get = (r: string[], name: string) => (r[idx(name)] ?? "").trim();

  const cars: SheetCar[] = [];

  for (const r of rows.slice(1)) {
    const id = get(r, "id");
    const title = get(r, "title");
    if (!id || !title) continue;

    const images = [get(r, "image1"), get(r, "image2"), get(r, "image3")].filter(
      Boolean
    );

    const year = num(get(r, "year"));
    const mileageKm = num(get(r, "mileageKm"));

    const statusRaw = get(r, "status");
    const status =
      statusRaw === "available" ||
      statusRaw === "reserved" ||
      statusRaw === "sold" ||
      statusRaw === "germany"
        ? (statusRaw as SheetCar["status"])
        : undefined;

    const subtitle = get(r, "subtitle");
    const engSubtitle = get(r, "engSubtitle"); // ✅ NEW (must match sheet header exactly)

    cars.push({
      id,
      title,
      subtitle,
      engSubtitle: engSubtitle || undefined, // ✅ NEW
      price: get(r, "price") || "По запитване",
      images,
      mobileUrl: get(r, "mobileUrl") || "https://himera.mobile.bg",
      status,
      fuel: get(r, "fuel") || undefined,
      transmission: get(r, "transmission") || undefined,
      year,
      mileageKm,
    });
  }

  return cars;
}

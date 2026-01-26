import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    id: "car-1",
    title: "Volvo S90",
    subtitle: "Автоматик • Дизел • 2018",
    price: "По запитване",
    image: "/cars/car-1.png",
  },
  {
    id: "car-2",
    title: "Skoda Octavia Combi",
    subtitle: "Автоматик • Дизел • 2019",
    price: "По запитване",
    image: "/cars/car-2.png",
  },
  {
    id: "car-3",
    title: "Mercedes S-Class",
    subtitle: "Автоматик • Бензин • 2017",
    price: "По запитване",
    image: "/cars/car-2.png", // временно повтаряме, докато имаш още снимки
  },
  {
    id: "car-4",
    title: "BMW X5",
    subtitle: "Автоматик • Дизел • 2020",
    price: "По запитване",
    image: "/cars/car-1.png", // временно
  },
];

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">Автомобили</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
            Разгледайте актуалните предложения на HIMERA HOUSE. При интерес —
            свържете се с нас за детайли, цена и условия за лизинг.
          </p>

          {/* Filters (UI only for now) */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <input
              placeholder="Търсене (марка, модел...)"
              className="h-11 w-full rounded-md border border-gray-200 px-4 text-sm outline-none focus:border-gray-400"
            />
            <select className="h-11 w-full rounded-md border border-gray-200 px-4 text-sm outline-none focus:border-gray-400">
              <option>Гориво</option>
              <option>Бензин</option>
              <option>Дизел</option>
              <option>Хибрид</option>
              <option>Електрически</option>
            </select>
            <select className="h-11 w-full rounded-md border border-gray-200 px-4 text-sm outline-none focus:border-gray-400">
              <option>Скоростна кутия</option>
              <option>Автоматик</option>
              <option>Ръчни</option>
            </select>
            <button className="h-11 rounded-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800">
              Филтрирай
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <article
                key={car.id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={car.id === "car-1"}
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-900">
                    {car.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{car.subtitle}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {car.price}
                    </span>

                    {/* засега водим към контакти */}
                    <Link
                      href="/contact"
                      className="rounded-md bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800"
                    >
                      Запитване
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Не намирате търсения автомобил?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Изпратете запитване и ще ви предложим варианти според бюджет и
              изисквания.
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Свържете се с нас
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

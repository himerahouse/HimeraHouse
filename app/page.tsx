export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gray-500">HIMERA HOUSE</p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Добре дошли в HIMERA HOUSE – Вашият доверен партньор за внос и
              продажба на автомобили!
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Ние от „Химера Хаус“ ЕООД се стремим да предоставим най-доброто
              обслужване в сферата на автомобилната търговия. Предлагаме богат
              избор от висококачествени автомобили на конкурентни цени,
              съобразени с вашите изисквания и бюджет.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/cars"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Виж автомобили
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Запитване
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bullets */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-semibold text-gray-900">
            Защо да изберете нас
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-sm font-semibold text-gray-900">
                Качествени автомобили
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Внасяме само проверени и надеждни автомобили.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-sm font-semibold text-gray-900">
                Индивидуален подход
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Разбираме нуждите на всеки клиент и предлагаме персонализирани
                решения.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-sm font-semibold text-gray-900">
                Прозрачност и доверие
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Гаранция за качество и ясни условия на покупка.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-sm font-semibold text-gray-900">Лизинг</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Индивидуален лизинг с одобрение в рамките на деня.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-xl border border-gray-200 bg-gray-900 p-10 text-white">
            <h3 className="text-2xl font-semibold">Готови ли сте да започнем?</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
              Изпратете запитване и ще ви помогнем да намерите автомобил според
              вашия бюджет и изисквания.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
              >
                Контакти
              </a>
              <a
                href="/cars"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Разгледай автомобили
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

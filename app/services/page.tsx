import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">Услуги</h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            HIMERA HOUSE предлага цялостно съдействие при внос, покупка,
            регистрация и финансиране на автомобили и техника.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12 space-y-10">
          {/* Service */}
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Внос на автомобили и техника по заявка
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              С радост ще ви помогнем да намерите подходящ за вас автомобил,
              който да отговаря на вашите желания и бюджет. Ще проверим
              историята на автомобила и ще организираме лицензиран и бърз
              транспорт до адреса Ви в рамките на до 5 календарни дни.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Също така можем да доставим всякакъв вид машини и техника по
              Ваше задание с минимален депозит.
            </p>
          </div>

          {/* Service */}
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Регистрация в КАТ
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Ние организираме всички документи и наш представител регистрира
              автомобила без да чакате на опашки и да губите време.
            </p>
          </div>

          {/* Service */}
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Застраховки
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Предлагаме застраховки „Гражданска отговорност“ и „Авто КАСКО“
              на преференциални цени чрез наш застрахователен брокер.
            </p>
          </div>

          {/* Service */}
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Транспорт
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Транспорт до всяка точка на България и Европа с бърз и
              лицензиран превоз.
            </p>
          </div>

          {/* Service */}
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Лизинг
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Индивидуален лизинг спрямо месечния Ви бюджет и Вашите
              изисквания за първоначална вноска.
            </p>
            <div className="mt-4">
              <Link
                href="/leasing"
                className="text-sm font-medium text-gray-900 underline underline-offset-4"
              >
                Виж повече за лизинг
              </Link>
            </div>
          </div>

          {/* Service */}
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Продажба на автомобил на консигнация
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Можем да приемем Вашия автомобил за продажба в нашия шоурум,
              като се стремим към най-изгодната продажна цена в максимално
              кратки срокове.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Приемаме автомобили за продажба според вашите изисквания —
              оценка и цена, направени на пазарен принцип, които гарантират
              успешна реализация.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 text-white">
          <h3 className="text-2xl font-semibold">
            Имате въпрос или конкретно запитване?
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Свържете се с нас и ще ви съдействаме възможно най-бързо.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              Контакти
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

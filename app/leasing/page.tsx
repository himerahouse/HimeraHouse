import Link from "next/link";

export default function LeasingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">Лизинг</h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            СПЕЦИАЛНИ УСЛОВИЯ ЗА ЛИЗИНГ И ИНДИВИДУАЛЕН ПОГАСИТЕЛЕН ПЛАН, както и
            СОБСТВЕН ЛИЗИНГ БЕЗ ДОКАЗВАНЕ НА ДОХОДИ с ПРЕФЕРЕНЦИАЛНИ УСЛОВИЯ.
            С радост ще ви помогнем заедно да намерим подходящия за вас автомобил
            и да го лизинговаме.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Запитване за лизинг
            </Link>
            <Link
              href="/cars"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Разгледай автомобили
            </Link>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12 space-y-10">
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Стандартен финансов лизинг
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Стандартен лизинг за автомобили до 60 месеца и първоначална вноска
              според желанието на клиента. Този вид лизинг е подходящ и за друг
              вид техника освен автомобили.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Оперативен лизинг
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Оперативният лизинг е специална форма на лизинг. До 60 месеца и
              първоначална вноска според желанието на клиента. Този вид дава
              възможност на клиента да ползва данъчен кредит (ДДС) независимо
              дали автомобилът е лек автомобил или товарен автомобил с N1
              сертификат.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Индивидуален план
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Изготвяне на индивидуален лизингов план БЕЗ първоначална вноска
              спрямо желанието на клиента и БЕЗ одобрение.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 text-white">
          <h3 className="text-2xl font-semibold">
            Искате оферта или консултация?
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Изпратете запитване и ще ви предложим най-подходящия вариант според
            бюджета и желанията ви.
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

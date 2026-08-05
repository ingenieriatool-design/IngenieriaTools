import Link from "next/link";

const categories = [
  {
    id: "electricidad",
    title: "Electricidad",
    description: "Calculadoras eléctricas, potencia, Ley de Ohm y más.",
  },
];

export default function CalculadorasPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Calculadoras de Ingeniería
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/calculadoras/${category.id}`}
            className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold">
              {category.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {category.description}
            </p>

            <div className="mt-6 text-blue-600 font-semibold">
              Ver calculadoras →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
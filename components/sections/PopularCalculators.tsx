import CalculatorCard from "@/components/cards/CalculatorCard";
import { tools } from "@/data/tools";

export default function PopularCalculators() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Más utilizadas
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Calculadoras populares
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Herramientas utilizadas diariamente por estudiantes,
            técnicos e ingenieros.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.slice(0, 6).map((tool) => (
            <CalculatorCard
              key={tool.id}
              tool={tool}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
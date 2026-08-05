import StatsCard from "@/components/cards/StatsCard";
import { tools } from "@/data/tools";

export default function Statistics() {
  const calculators = tools.length;

  const categories = new Set(
    tools.map((tool) => tool.category)
  ).size;

  const variables = tools.reduce(
    (total, tool) => total + tool.inputs.length + tool.outputs.length,
    0
  );

  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            IngenieríaTools en números
          </h2>

          <p className="mt-4 text-blue-100">
            Una plataforma que crecerá continuamente con nuevas herramientas.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            value={calculators}
            label="Calculadoras"
          />

          <StatsCard
            value={categories}
            label="Categorías"
          />

          <StatsCard
            value={variables}
            label="Variables"
          />

          <StatsCard
            value="100%"
            label="Gratuito"
          />
        </div>
      </div>
    </section>
  );
}
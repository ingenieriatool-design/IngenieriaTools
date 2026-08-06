import CategoryCard from "@/components/cards/CategoryCard";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export default function CategoriesPage() {
  const availableCategories = categories.filter((category) =>
    tools.some(
  (tool) => tool.category.toLowerCase() === category.id.toLowerCase()
         )
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* Encabezado */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Categorías
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Explora todas las categorías de IngenieríaTools y encuentra
          calculadoras especializadas para cada área de la ingeniería.
        </p>
      </section>

      {/* Grid de categorías */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {availableCategories.map((category) => {
          const count = tools.filter(
            (tool) => tool.category.toLowerCase() === category.id.toLowerCase()
            ).length;

          return (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              slug={category.id}
              count={count}
              icon={category.icon}
            />
          );
        })}
      </section>

      {/* Mensaje cuando no haya categorías */}
      {availableCategories.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
          <h2 className="text-2xl font-semibold text-slate-700">
            Próximamente
          </h2>

          <p className="mt-3 text-slate-500">
            Aún no hay categorías con calculadoras disponibles.
          </p>
        </div>
      )}
    </main>
  );
}
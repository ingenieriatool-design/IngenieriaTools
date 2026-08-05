import CategoryCard from "@/components/cards/CategoryCard";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export default function Categories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Categorías
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
            Explora por categoría
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Encuentra rápidamente la calculadora que necesitas para tus
            proyectos de ingeniería.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories
            .filter((category) =>
              tools.some((tool) => tool.category === category.id)
            )
            .map((category) => {
              const count = tools.filter(
                (tool) => tool.category === category.id
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
        </div>
      </div>
    </section>
  );
}
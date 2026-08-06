import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import CategoryCard from "@/components/cards/CategoryCard";

export default function CategoriesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = tools.filter(
            (tool) =>
              tool.category.toLowerCase() === category.id.toLowerCase()
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
    </section>
  );
}
import { notFound } from "next/navigation";

import CalculatorCard from "@/components/home/CalculatorCard";
import { tools } from "@/data/tools";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const categoryTools = tools.filter(
    (tool) => tool.category.toLowerCase() === category.toLowerCase()
  );

  if (categoryTools.length === 0) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {category}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryTools.map((tool) => (
          <CalculatorCard
            key={tool.id}
            tool={tool}
          />
        ))}
      </div>
    </main>
  );
}

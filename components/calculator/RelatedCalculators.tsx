interface RelatedCalculatorsProps {
  category: string;
  currentTool: string;
}

export default function RelatedCalculators({
  category,
  currentTool,
}: RelatedCalculatorsProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">
        Calculadoras Relacionadas
      </h2>

      <p className="text-gray-600">
        Próximamente mostraremos aquí otras calculadoras de la categoría{" "}
        <strong>{category}</strong>.
      </p>
    </div>
  );
}
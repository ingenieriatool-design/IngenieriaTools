interface FormulaCardProps {
  formula: string;
}

export default function FormulaCard({
  formula,
}: FormulaCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="mb-4 text-2xl font-bold">
        Fórmula
      </h2>

      <div className="overflow-x-auto rounded-xl bg-gray-100 p-6">
        <code className="text-lg font-semibold text-blue-700">
          {formula}
        </code>
      </div>

    </div>
  );
}
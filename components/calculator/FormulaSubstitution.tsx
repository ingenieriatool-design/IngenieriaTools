"use client";

import type { CalculationResult } from "@/calculations/registry";

interface FormulaSubstitutionProps {
  calculation: CalculationResult | null;
}

export default function FormulaSubstitution({
  calculation,
}: FormulaSubstitutionProps) {
  if (!calculation) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Desarrollo del cálculo
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            Sustitución
          </h3>

          <div className="rounded-lg bg-gray-100 p-4 font-mono text-lg">
            {calculation.substitution}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            Operación
          </h3>

          <div className="rounded-lg bg-blue-50 p-4 font-mono text-lg text-blue-700">
            {calculation.operation}
          </div>
        </div>
      </div>
    </div>
  );
}
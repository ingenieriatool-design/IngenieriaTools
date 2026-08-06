"use client";

import { useState } from "react";

import CalculatorHeader from "./CalculatorHeader";
import CalculatorInputs from "./CalculatorInputs";
import CalculatorResults from "./CalculatorResults";
import FormulaCard from "./FormulaCard";
import FormulaSubstitution from "./FormulaSubstitution";
import ReferenceCard from "./ReferenceCard";
import RelatedCalculators from "./RelatedCalculators";

import type { EngineeringTool } from "@/types/engineering-tool";
import {
  calculatorRegistry,
  type CalculationResult,
} from "@/calculations/registry";

interface CalculatorRendererProps {
  tool: EngineeringTool;
}

export default function CalculatorRenderer({
  tool,
}: CalculatorRendererProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [calculation, setCalculation] =
    useState<CalculationResult | null>(null);

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCalculate = () => {
    try {
      const calculator = calculatorRegistry[tool.id];

      if (!calculator) {
        alert("Calculadora no implementada.");
        return;
      }

      const result = calculator(values);

      setCalculation(result);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const handleClear = () => {
    setValues({});
    setCalculation(null);
  };

  return (
    <div className="space-y-8">
      <CalculatorHeader
        title={tool.title}
        description={tool.description}
        difficulty={tool.difficulty}
        estimatedTime={tool.estimatedTime}
      />

      <CalculatorInputs
        tool={tool}
        values={values}
        onChange={handleChange}
      />

      <div className="flex gap-4">
        <button
          onClick={handleCalculate}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Calcular
        </button>

        <button
          onClick={handleClear}
          className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
        >
          Limpiar
        </button>
      </div>

      <CalculatorResults
        outputs={tool.outputs}
        results={calculation?.outputs ?? {}}
      />

      {tool.formula && (
        <FormulaCard formula={tool.formula} />
      )}

      <FormulaSubstitution
        calculation={calculation}
      />

      <ReferenceCard references={tool.references} />

      <RelatedCalculators
        category={tool.category}
        currentTool={tool.id}
      />
    </div>
  );
}
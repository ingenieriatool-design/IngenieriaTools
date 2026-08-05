"use client";

import { EngineeringTool } from "@/types/engineering-tool";

interface CalculatorInputsProps {
  tool: EngineeringTool;
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
}

export default function CalculatorInputs({
  tool,
  values,
  onChange,
}: CalculatorInputsProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Datos de Entrada
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {tool.inputs.map((input) => (
          <div key={input.id} className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">
              {input.label}
              {input.unit && (
                <span className="text-gray-500">
                  {" "}({input.unit})
                </span>
              )}
            </label>

            <input
              type="number"
              value={values[input.id] ?? ""}
              onChange={(e) => onChange(input.id, e.target.value)}
              placeholder={`Ingrese ${input.label.toLowerCase()}`}
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
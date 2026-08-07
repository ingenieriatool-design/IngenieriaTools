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
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
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

            {input.options ? (
              <select
                value={values[input.id] ?? input.options[0].value}
                onChange={(e) => onChange(input.id, e.target.value)}
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
              >
                {input.options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="number"
                inputMode="decimal"
                value={values[input.id] ?? ""}
                onChange={(e) => onChange(input.id, e.target.value)}
                placeholder={`Ingrese ${input.label.toLowerCase()}`}
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import { Plus, Trash2 } from "lucide-react";

interface DynamicInputsProps {
  label: string;
  symbol?: string;
  unit?: string;
  values: string[];
  onChange: (values: string[]) => void;
}

export default function DynamicInputs({
  label,
  symbol,
  unit,
  values,
  onChange,
}: DynamicInputsProps) {
  const handleValueChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    onChange(newValues);
  };

  const addInput = () => {
    onChange([...values, ""]);

    setTimeout(() => {
      const inputs = document.querySelectorAll(
        "input[data-dynamic-input]"
      ) as NodeListOf<HTMLInputElement>;

      const lastInput = inputs[inputs.length - 1];

      if (lastInput) {
        lastInput.focus();
        lastInput.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  const removeInput = (index: number) => {
    if (values.length <= 2) return;

    const newValues = values.filter((_, i) => i !== index);
    onChange(newValues);
  };

  return (
    <div className="space-y-5">
      {values.map((value, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="mb-3 flex items-center justify-between">
            <label className="font-semibold text-gray-700">
              {symbol
                ? `${symbol}${index + 1}`
                : `${label} ${index + 1}`}
            </label>

            {values.length > 2 && (
              <button
                type="button"
                onClick={() => removeInput(index)}
                className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <input
              data-dynamic-input
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              value={value}
              onChange={(e) => {
                const value = e.target.value;

                if (/^[0-9]*\.?[0-9]*$/.test(value)) {
                  handleValueChange(index, value);
                }
              }}
              placeholder={`Ingrese ${label.toLowerCase()}`}
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            {unit && (
              <div className="min-w-[55px] rounded-lg bg-gray-100 px-3 py-3 text-center font-semibold text-gray-600">
                {unit}
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addInput}
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        <Plus size={18} />
        Agregar {label.toLowerCase()}
      </button>
    </div>
  );
}
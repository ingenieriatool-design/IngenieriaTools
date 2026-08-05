"use client";

interface CalculatorResultsProps {
  outputs: {
    id: string;
    label: string;
    unit?: string;
  }[];
  results: Record<string, string | number>;
}

export default function CalculatorResults({
  outputs,
  results,
}: CalculatorResultsProps) {
  const hasResults = Object.keys(results).length > 0;

  const copyResult = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Resultados
      </h2>

      {!hasResults ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 py-12 text-center">
          <p className="text-lg font-medium text-gray-500">
            Aún no hay resultados
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Ingresa los valores y presiona <strong>Calcular</strong>.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {outputs.map((output) => {
            const value = results[output.id];

            return (
              <div
                key={output.id}
                className="rounded-xl border border-blue-100 bg-blue-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                  {output.label}
                </p>

                <p className="mt-4 text-4xl font-bold text-blue-700">
                  {value}

                  {output.unit && (
                    <span className="ml-2 text-xl text-blue-600">
                      {output.unit}
                    </span>
                  )}
                </p>

                <button
                  onClick={() =>
                    copyResult(`${value} ${output.unit ?? ""}`)
                  }
                  className="mt-6 rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow transition hover:bg-blue-100"
                >
                  📋 Copiar
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
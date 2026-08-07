import type { CalculationResult } from "../registry";

export function calculateMotorEfficiency(
  values: Record<string, string>
): CalculationResult {
  const inputPower = Number(values.inputPower);
  const outputPower = Number(values.outputPower);

  if (isNaN(inputPower) || isNaN(outputPower)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (inputPower <= 0) {
    throw new Error("La potencia de entrada debe ser mayor que cero.");
  }

  if (outputPower <= 0) {
    throw new Error("La potencia de salida debe ser mayor que cero.");
  }

  if (outputPower > inputPower) {
    throw new Error(
      "La potencia de salida no puede ser mayor que la potencia de entrada."
    );
  }

  const efficiency =
    (outputPower / inputPower) * 100;

  return {
    outputs: {
      efficiency: Number(efficiency.toFixed(2)),
    },

    formula: "η = (Psalida / Pentrada) × 100",

    substitution:
      `(${outputPower} / ${inputPower}) × 100`,

    explanation:
      "La eficiencia representa el porcentaje de la potencia eléctrica de entrada que el motor convierte en potencia mecánica útil.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Potencia de entrada = ${inputPower} kW\nPotencia de salida = ${outputPower} kW`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "η = (Psalida / Pentrada) × 100",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `(${outputPower} / ${inputPower}) × 100`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${efficiency.toFixed(2)} %`,
      },
      {
        title: "Resultado",
        content: `La eficiencia del motor es ${efficiency.toFixed(2)} %.`,
      },
    ],
  };
}
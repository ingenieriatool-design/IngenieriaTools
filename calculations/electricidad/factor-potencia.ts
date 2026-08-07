import type { CalculationResult } from "../registry";

export function calculatePowerFactor(
  values: Record<string, string>
): CalculationResult {
  const activePower = Number(values.activePower);
  const apparentPower = Number(values.apparentPower);

  if (isNaN(activePower) || isNaN(apparentPower)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (activePower <= 0) {
    throw new Error("La potencia activa debe ser mayor que cero.");
  }

  if (apparentPower <= 0) {
    throw new Error("La potencia aparente debe ser mayor que cero.");
  }

  if (activePower > apparentPower) {
    throw new Error(
      "La potencia activa no puede ser mayor que la potencia aparente."
    );
  }

  const powerFactor = activePower / apparentPower;

  return {
    outputs: {
      powerFactor: Number(powerFactor.toFixed(3)),
    },

    formula: "FP = P / S",

    substitution: `FP = ${activePower} / ${apparentPower}`,

    explanation:
      "El factor de potencia representa la relación entre la potencia activa y la potencia aparente. Su valor siempre está entre 0 y 1.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Potencia activa = ${activePower} kW\nPotencia aparente = ${apparentPower} kVA`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "FP = P / S",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `FP = ${activePower} / ${apparentPower}`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${powerFactor.toFixed(3)}`,
      },
      {
        title: "Resultado",
        content: `El factor de potencia es ${powerFactor.toFixed(3)}.`,
      },
    ],
  };
}
import type { CalculationResult } from "../registry";

export function calculateKwToHp(
  values: Record<string, string>
): CalculationResult {
  const kw = Number(values.kw);

  if (isNaN(kw)) {
    throw new Error("Ingresa un valor válido.");
  }

  if (kw <= 0) {
    throw new Error("La potencia debe ser mayor que cero.");
  }

  const hp = kw / 0.746;

  return {
    outputs: {
      hp: Number(hp.toFixed(3)),
    },

    formula: "HP = kW / 0.746",

    substitution: `${kw} / 0.746`,

    explanation:
      "La conversión de kilowatts (kW) a caballos de fuerza (HP) utiliza el factor estándar de 1 HP = 0.746 kW.",

    steps: [
      {
        title: "Paso 1: Identificar el dato",
        content: `Potencia = ${kw} kW`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "HP = kW / 0.746",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `${kw} / 0.746`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${hp.toFixed(3)} HP`,
      },
      {
        title: "Resultado",
        content: `${kw} kW equivalen a ${hp.toFixed(3)} HP.`,
      },
    ],
  };
}
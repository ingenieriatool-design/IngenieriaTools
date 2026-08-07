import type { CalculationResult } from "../registry";

export function calculateHpToKw(
  values: Record<string, string>
): CalculationResult {
  const hp = Number(values.hp);

  if (isNaN(hp)) {
    throw new Error("Ingresa un valor válido.");
  }

  if (hp <= 0) {
    throw new Error("La potencia debe ser mayor que cero.");
  }

  const kw = hp * 0.746;

  return {
    outputs: {
      kw: Number(kw.toFixed(3)),
    },

    formula: "kW = HP × 0.746",

    substitution: `${hp} × 0.746`,

    explanation:
      "La conversión de caballos de fuerza (HP) a kilowatts (kW) utiliza el factor estándar de 1 HP = 0.746 kW.",

    steps: [
      {
        title: "Paso 1: Identificar el dato",
        content: `Potencia = ${hp} HP`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "kW = HP × 0.746",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `${hp} × 0.746`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${kw.toFixed(3)} kW`,
      },
      {
        title: "Resultado",
        content: `${hp} HP equivalen a ${kw.toFixed(3)} kW.`,
      },
    ],
  };
}
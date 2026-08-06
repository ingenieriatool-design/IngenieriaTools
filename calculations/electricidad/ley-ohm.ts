import type { CalculationResult } from "../registry";

export function calculateResistance(
  values: Record<string, string>
): CalculationResult {
  const voltage = Number(values.voltage);
  const current = Number(values.current);

  if (isNaN(voltage) || isNaN(current)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (current === 0) {
    throw new Error("La corriente no puede ser cero.");
  }

  const resistance = Number((voltage / current).toFixed(2));

  return {
    outputs: {
      resistance,
    },

    formula: "R = V / I",

    substitution: `R = ${voltage} / ${current}`,

    explanation:
      "La Ley de Ohm establece que la resistencia eléctrica es igual al voltaje dividido entre la corriente que circula por un conductor.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Voltaje = ${voltage} V\nCorriente = ${current} A`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "R = V / I",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `R = ${voltage} / ${current}`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `R = ${resistance} Ω`,
      },
      {
        title: "Resultado",
        content: `La resistencia es ${resistance} Ω.`,
      },
    ],
  };
}
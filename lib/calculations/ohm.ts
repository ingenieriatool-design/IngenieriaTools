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

  const resistance = voltage / current;

  return {
    outputs: {
      resistance: Number(resistance.toFixed(2)),
    },

    formula: "R = V / I",

    substitution: `R = ${voltage} / ${current}`,

    explanation:
      "La Ley de Ohm establece que la resistencia eléctrica es igual al voltaje dividido entre la corriente.",

    steps: [
      {
        title: "Paso 1",
        content: `Voltaje = ${voltage} V`,
      },
      {
        title: "Paso 2",
        content: `Corriente = ${current} A`,
      },
      {
        title: "Paso 3",
        content: `R = ${voltage} / ${current}`,
      },
      {
        title: "Resultado",
        content: `${resistance.toFixed(2)} Ω`,
      },
    ],
  };
}
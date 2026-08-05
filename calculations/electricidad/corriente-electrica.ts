import type { CalculationResult } from "../registry";

export function calculateCurrent(
  values: Record<string, string>
): CalculationResult {
  const power = Number(values.power);
  const voltage = Number(values.voltage);

  if (power <= 0) {
    throw new Error("La potencia debe ser mayor que cero.");
  }

  if (voltage <= 0) {
    throw new Error("El voltaje debe ser mayor que cero.");
  }

  const current = power / voltage;

  return {
    outputs: {
      current: current.toFixed(2),
    },

    substitution: `I = ${power} / ${voltage}`,

    operation: `${power} ÷ ${voltage} = ${current.toFixed(2)} A`,
  };
}
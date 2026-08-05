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
    value: Number(resistance.toFixed(2)),

    unit: "Ω",

    formula: "R = V / I",

    substitution: `R = ${voltage} / ${current}`,

    explanation:
      "La Ley de Ohm establece que la resistencia eléctrica es igual al voltaje dividido entre la corriente que circula por el circuito.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Voltaje (V) = ${voltage} V\nCorriente (I) = ${current} A`,
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
        content: `R = ${resistance.toFixed(2)} Ω`,
      },
      {
        title: "Resultado",
        content: `La resistencia del circuito es ${resistance.toFixed(2)} Ω.`,
      },
    ],
  };
}
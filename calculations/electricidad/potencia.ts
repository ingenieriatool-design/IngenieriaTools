import type { CalculationResult } from "../registry";

export function calculatePower(
  values: Record<string, string>
): CalculationResult {
  const voltage = Number(values.voltage);
  const current = Number(values.current);

  if (isNaN(voltage) || isNaN(current)) {
    throw new Error("Ingresa valores válidos.");
  }

  const power = voltage * current;

  return {
    value: Number(power.toFixed(2)),

    unit: "W",

    formula: "P = V × I",

    substitution: `P = ${voltage} × ${current}`,

    explanation:
      "La potencia eléctrica representa la energía consumida o entregada por un circuito. Se calcula multiplicando el voltaje por la corriente.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Voltaje (V) = ${voltage} V\nCorriente (I) = ${current} A`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "P = V × I",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `P = ${voltage} × ${current}`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `P = ${power.toFixed(2)} W`,
      },
      {
        title: "Resultado",
        content: `La potencia eléctrica es ${power.toFixed(2)} W.`,
      },
    ],
  };
}
import type { CalculationResult } from "../registry";

export function calculateApparentPower(
  values: Record<string, string>
): CalculationResult {
  const voltage = Number(values.voltage);
  const current = Number(values.current);

  if (isNaN(voltage) || isNaN(current)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (voltage <= 0) {
    throw new Error("El voltaje debe ser mayor que cero.");
  }

  if (current <= 0) {
    throw new Error("La corriente debe ser mayor que cero.");
  }

  const apparentPower =
    (Math.sqrt(3) * voltage * current) / 1000;

  return {
    outputs: {
      power: Number(apparentPower.toFixed(2)),
    },

    formula: "S = (√3 × V × I) / 1000",

    substitution: `S = (√3 × ${voltage} × ${current}) / 1000`,

    explanation:
      "La potencia aparente representa la potencia total suministrada a una carga trifásica. Se expresa en kVA y corresponde a la combinación de la potencia activa y la potencia reactiva.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Voltaje = ${voltage} V\nCorriente = ${current} A`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "S = (√3 × V × I) / 1000",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `S = (√3 × ${voltage} × ${current}) / 1000`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${apparentPower.toFixed(2)} kVA`,
      },
      {
        title: "Resultado",
        content: `La potencia aparente es ${apparentPower.toFixed(2)} kVA.`,
      },
    ],
  };
}
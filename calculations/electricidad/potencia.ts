import type { CalculationResult } from "../registry";

export function calculatePower(
  values: Record<string, string>
): CalculationResult {
  const voltage = Number(values.voltage);
  const current = Number(values.current);

  if (isNaN(voltage) || isNaN(current)) {
    throw new Error("Ingresa valores válidos.");
  }

  const power = Number((voltage * current).toFixed(2));

  return {
    outputs: {
      power,
    },

    formula: "P = V × I",

    substitution: `P = ${voltage} × ${current}`,

    explanation:
      "La potencia eléctrica representa la cantidad de energía que un circuito consume o entrega por unidad de tiempo. Se obtiene multiplicando el voltaje por la corriente.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Voltaje = ${voltage} V\nCorriente = ${current} A`,
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
        content: `P = ${power} W`,
      },
      {
        title: "Resultado",
        content: `La potencia eléctrica es ${power} W.`,
      },
    ],
  };
}
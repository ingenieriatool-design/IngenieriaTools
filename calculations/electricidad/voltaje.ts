import type { CalculationResult } from "../registry";

export function calculateVoltage(
  values: Record<string, string>
): CalculationResult {
  const power = Number(values.power);
  const current = Number(values.current);

  if (isNaN(power) || isNaN(current)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (current === 0) {
    throw new Error("La corriente no puede ser cero.");
  }

  const voltage = Number((power / current).toFixed(2));

  return {
    outputs: {
      voltage,
    },

    formula: "V = P / I",

    substitution: `V = ${power} / ${current}`,

    explanation:
      "El voltaje es la diferencia de potencial eléctrico entre dos puntos de un circuito. Aplicando la relación entre potencia y corriente, puede calcularse dividiendo la potencia entre la corriente.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Potencia = ${power} W\nCorriente = ${current} A`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "V = P / I",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `V = ${power} / ${current}`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `V = ${voltage} V`,
      },
      {
        title: "Resultado",
        content: `El voltaje es ${voltage} V.`,
      },
    ],
  };
}
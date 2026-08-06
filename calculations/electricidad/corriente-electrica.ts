import type { CalculationResult } from "../registry";

export function calculateCurrent(
  values: Record<string, string>
): CalculationResult {
  const power = Number(values.power);
  const voltage = Number(values.voltage);

  if (isNaN(power) || isNaN(voltage)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (power <= 0) {
    throw new Error("La potencia debe ser mayor que cero.");
  }

  if (voltage <= 0) {
    throw new Error("El voltaje debe ser mayor que cero.");
  }

  const current = Number((power / voltage).toFixed(2));

  return {
    outputs: {
      current,
    },

    formula: "I = P / V",

    substitution: `I = ${power} / ${voltage}`,

    explanation:
      "La corriente eléctrica se obtiene dividiendo la potencia entre el voltaje en circuitos de corriente continua.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Potencia = ${power} W\nVoltaje = ${voltage} V`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "I = P / V",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `I = ${power} / ${voltage}`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `I = ${current} A`,
      },
      {
        title: "Resultado",
        content: `La corriente es ${current} A.`,
      },
    ],
  };
}
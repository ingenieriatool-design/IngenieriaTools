import type { CalculationResult } from "../registry";

export function calculateSynchronousSpeed(
  values: Record<string, string>
): CalculationResult {
  const frequency = Number(values.frequency);
  const poles = Number(values.poles);

  if (isNaN(frequency) || isNaN(poles)) {
    throw new Error("Selecciona una frecuencia y un número de polos.");
  }

  if (frequency <= 0) {
    throw new Error("La frecuencia debe ser mayor que cero.");
  }

  if (poles <= 0) {
    throw new Error("El número de polos debe ser mayor que cero.");
  }

  const rpm = (120 * frequency) / poles;

  return {
    outputs: {
      rpm: Number(rpm.toFixed(0)),
    },

    formula: "Ns = (120 × f) / P",

    substitution: `(120 × ${frequency}) / ${poles}`,

    explanation:
      "La velocidad sincrónica es la velocidad del campo magnético giratorio de un motor de corriente alterna. Depende únicamente de la frecuencia de alimentación y del número de polos del motor.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Frecuencia = ${frequency} Hz\nPolos = ${poles}`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "Ns = (120 × f) / P",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `(120 × ${frequency}) / ${poles}`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${rpm.toFixed(0)} RPM`,
      },
      {
        title: "Resultado",
        content: `La velocidad sincrónica es ${rpm.toFixed(0)} RPM.`,
      },
    ],
  };
}
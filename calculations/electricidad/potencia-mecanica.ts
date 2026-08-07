import type { CalculationResult } from "../registry";

export function calculateMechanicalPower(
  values: Record<string, string>
): CalculationResult {
  const torque = Number(values.torque);
  const rpm = Number(values.rpm);

  if (isNaN(torque) || isNaN(rpm)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (torque <= 0) {
    throw new Error("El torque debe ser mayor que cero.");
  }

  if (rpm <= 0) {
    throw new Error("Las RPM deben ser mayores que cero.");
  }

  const power = (torque * rpm) / 9550;

  return {
    outputs: {
      power: Number(power.toFixed(3)),
    },

    formula: "P = (T × RPM) / 9550",

    substitution: `(${torque} × ${rpm}) / 9550`,

    explanation:
      "La potencia mecánica representa la energía transmitida por el eje del motor. Se obtiene a partir del torque desarrollado y la velocidad de rotación.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Torque = ${torque} N·m\nVelocidad = ${rpm} RPM`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "P = (T × RPM) / 9550",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `(${torque} × ${rpm}) / 9550`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${power.toFixed(3)} kW`,
      },
      {
        title: "Resultado",
        content: `La potencia mecánica es ${power.toFixed(3)} kW.`,
      },
    ],
  };
}
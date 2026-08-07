import type { CalculationResult } from "../registry";

export function calculateMotorTorque(
  values: Record<string, string>
): CalculationResult {
  const power = Number(values.power);
  const unit = values.unit ?? "hp";
  const rpm = Number(values.rpm);

  if (isNaN(power) || isNaN(rpm)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (power <= 0) {
    throw new Error("La potencia debe ser mayor que cero.");
  }

  if (rpm <= 0) {
    throw new Error("Las RPM deben ser mayores que cero.");
  }

  // Convertir HP a kW si es necesario
  const powerKW =
    unit === "hp"
      ? power * 0.746
      : power;

  const torque =
    (9550 * powerKW) / rpm;

  return {
    outputs: {
      torque: Number(torque.toFixed(2)),
    },

    formula: "T = (9550 × kW) / RPM",

    substitution:
      `(9550 × ${powerKW.toFixed(3)}) / ${rpm}`,

    explanation:
      "El torque representa el momento de fuerza que desarrolla el motor en su eje. Se calcula a partir de la potencia mecánica y la velocidad de rotación.",

    steps: [
      {
        title: "Paso 1: Convertir la potencia",
        content: `${power} ${unit.toUpperCase()} = ${powerKW.toFixed(3)} kW`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "T = (9550 × kW) / RPM",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `(9550 × ${powerKW.toFixed(3)}) / ${rpm}`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${torque.toFixed(2)} N·m`,
      },
      {
        title: "Resultado",
        content: `El torque desarrollado por el motor es ${torque.toFixed(2)} N·m.`,
      },
    ],
  };
}
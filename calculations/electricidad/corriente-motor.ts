import type { CalculationResult } from "../registry";

export function calculateMotorCurrent(
  values: Record<string, string>
): CalculationResult {
  const power = Number(values.power);
  const unit = values.unit ?? "hp";
  const voltage = Number(values.voltage);

  let powerFactor = Number(values.powerFactor);
  let efficiency = Number(values.efficiency);

  if (isNaN(power) || isNaN(voltage)) {
    throw new Error("Ingresa los datos obligatorios.");
  }

  if (power <= 0) {
    throw new Error("La potencia debe ser mayor que cero.");
  }

  if (voltage <= 0) {
    throw new Error("El voltaje debe ser mayor que cero.");
  }

  let estimated = false;

  // Valores típicos si no se proporcionan
  if (!powerFactor || isNaN(powerFactor)) {
    powerFactor = 0.85;
    estimated = true;
  }

  if (!efficiency || isNaN(efficiency)) {
    efficiency = 90;
    estimated = true;
  }

  // Convertir eficiencia de % a decimal
  const efficiencyDecimal = efficiency / 100;

  // Convertir HP a kW si es necesario
  const powerKW =
    unit === "hp"
      ? power * 0.746
      : power;

  const current =
    (powerKW * 1000) /
    (Math.sqrt(3) *
      voltage *
      powerFactor *
      efficiencyDecimal);

  return {
    outputs: {
      current: Number(current.toFixed(2)),
    },

    formula:
      "I = (kW × 1000) / (√3 × V × FP × η)",

    substitution:
      `(${powerKW.toFixed(2)} × 1000) / (√3 × ${voltage} × ${powerFactor} × ${efficiencyDecimal.toFixed(2)})`,

    explanation: estimated
      ? "Se utilizaron valores típicos para el factor de potencia (0.85) y/o la eficiencia (90%). El resultado es una estimación."
      : "La corriente se calculó utilizando todos los datos proporcionados por el usuario.",

    steps: [
      {
        title: "Paso 1: Convertir la potencia",
        content: `${power} ${unit.toUpperCase()} = ${powerKW.toFixed(2)} kW`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content:
          "I = (kW × 1000) / (√3 × V × FP × η)",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content:
          `(${powerKW.toFixed(2)} × 1000) / (√3 × ${voltage} × ${powerFactor} × ${efficiencyDecimal.toFixed(2)})`,
      },
      {
        title: "Paso 4: Resultado",
        content: `${current.toFixed(2)} A`,
      },
    ],
  };
}
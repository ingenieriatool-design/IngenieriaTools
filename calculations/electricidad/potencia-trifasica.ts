import type { CalculationResult } from "../registry";

export function calculateThreePhasePower(
  values: Record<string, string>
): CalculationResult {
  const voltage = Number(values.voltage);
  const current = Number(values.current);
  const powerFactor = Number(values.powerFactor);

  if (
    isNaN(voltage) ||
    isNaN(current) ||
    isNaN(powerFactor)
  ) {
    throw new Error("Ingresa valores válidos.");
  }

  if (voltage <= 0) {
    throw new Error("El voltaje debe ser mayor que cero.");
  }

  if (current <= 0) {
    throw new Error("La corriente debe ser mayor que cero.");
  }

  if (powerFactor <= 0 || powerFactor > 1) {
    throw new Error(
      "El factor de potencia debe estar entre 0 y 1."
    );
  }

  const power = Math.sqrt(3) * voltage * current * powerFactor;

  return {
    outputs: {
      power: Number(power.toFixed(2)),
    },

    formula: "P = √3 × V × I × FP",

    substitution: `P = √3 × ${voltage} × ${current} × ${powerFactor}`,

    explanation:
      "La potencia activa trifásica se obtiene multiplicando la raíz de tres por el voltaje entre líneas, la corriente y el factor de potencia.",

    steps: [
      {
        title: "Paso 1",
        content: `Voltaje = ${voltage} V`,
      },
      {
        title: "Paso 2",
        content: `Corriente = ${current} A`,
      },
      {
        title: "Paso 3",
        content: `Factor de potencia = ${powerFactor}`,
      },
      {
        title: "Paso 4",
        content: `P = √3 × ${voltage} × ${current} × ${powerFactor}`,
      },
      {
        title: "Resultado",
        content: `${power.toFixed(2)} W`,
      },
    ],
  };
}
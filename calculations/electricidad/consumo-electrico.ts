import type { CalculationResult } from "../registry";

export function calculateEnergyConsumption(
  values: Record<string, string>
): CalculationResult {
  const power = Number(values.power);
  const hours = Number(values.hours);
  const days = Number(values.days);

  if (isNaN(power) || isNaN(hours) || isNaN(days)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (power <= 0) {
    throw new Error("La potencia debe ser mayor que cero.");
  }

  if (hours <= 0 || hours > 24) {
    throw new Error("Las horas por día deben estar entre 1 y 24.");
  }

  if (days <= 0 || days > 31) {
    throw new Error("Los días por mes deben estar entre 1 y 31.");
  }

  const dailyEnergy = power * hours;
  const monthlyEnergy = dailyEnergy * days;

  return {
    outputs: {
      dailyEnergy: Number(dailyEnergy.toFixed(2)),
      monthlyEnergy: Number(monthlyEnergy.toFixed(2)),
    },

    formula: "kWh = kW × h",

    substitution: `${power} × ${hours}`,

    explanation:
      "El consumo de energía se obtiene multiplicando la potencia del equipo por el tiempo de operación. Posteriormente, el consumo diario se multiplica por los días de operación para obtener el consumo mensual.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Potencia = ${power} kW\nHoras por día = ${hours} h\nDías por mes = ${days}`,
      },
      {
        title: "Paso 2: Calcular el consumo diario",
        content: `${power} × ${hours} = ${dailyEnergy.toFixed(2)} kWh`,
      },
      {
        title: "Paso 3: Calcular el consumo mensual",
        content: `${dailyEnergy.toFixed(2)} × ${days} = ${monthlyEnergy.toFixed(2)} kWh`,
      },
      {
        title: "Resultado",
        content: `Consumo diario: ${dailyEnergy.toFixed(2)} kWh\nConsumo mensual: ${monthlyEnergy.toFixed(2)} kWh`,
      },
    ],
  };
}
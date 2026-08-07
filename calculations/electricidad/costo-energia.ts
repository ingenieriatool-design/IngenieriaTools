import type { CalculationResult } from "../registry";

export function calculateEnergyCost(
  values: Record<string, string>
): CalculationResult {
  const energy = Number(values.energy);
  const price = Number(values.price);

  if (isNaN(energy) || isNaN(price)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (energy <= 0) {
    throw new Error("El consumo debe ser mayor que cero.");
  }

  if (price <= 0) {
    throw new Error("El precio por kWh debe ser mayor que cero.");
  }

  const cost = energy * price;

  return {
    outputs: {
      cost: Number(cost.toFixed(2)),
    },

    formula: "Costo = kWh × Precio",

    substitution: `${energy} × ${price}`,

    explanation:
      "El costo de la energía eléctrica se obtiene multiplicando el consumo mensual de energía por el precio unitario del kilowatt-hora.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Consumo = ${energy} kWh\nPrecio = $${price}/kWh`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "Costo = kWh × Precio",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `${energy} × ${price}`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `$${cost.toFixed(2)}`,
      },
      {
        title: "Resultado",
        content: `El costo mensual estimado es de $${cost.toFixed(2)}.`,
      },
    ],
  };
}
import type { EngineeringTool } from "@/types/engineering-tool";

export const costoEnergia: EngineeringTool = {
  id: "costo-energia",

  type: "calculator",

  category: "Electricidad",

  title: "Costo de Energía",

  description:
    "Calcula el costo mensual de operación de un equipo a partir del consumo de energía y el precio por kWh.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "costo",
    "energía",
    "kWh",
    "electricidad",
    "consumo",
  ],

  inputs: [
    {
      id: "energy",
      label: "Consumo Mensual",
      symbol: "E",
      unit: "kWh",
      required: true,
    },
    {
      id: "price",
      label: "Precio por kWh",
      symbol: "$",
      unit: "$/kWh",
      required: true,
    },
  ],

  outputs: [
    {
      id: "cost",
      label: "Costo Mensual",
      symbol: "C",
      unit: "$",
    },
  ],

  formula: "Costo = kWh × Precio",

  references: [
    "Comisión Federal de Electricidad (CFE)",
  ],
};
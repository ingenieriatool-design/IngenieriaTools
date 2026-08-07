import type { EngineeringTool } from "@/types/engineering-tool";

export const consumoElectrico: EngineeringTool = {
  id: "consumo-electrico",

  type: "calculator",

  category: "Electricidad",

  title: "Consumo Eléctrico",

  description:
    "Calcula el consumo diario y mensual de energía eléctrica a partir de la potencia y el tiempo de operación.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "consumo",
    "kWh",
    "energía",
    "electricidad",
    "costo",
  ],

  inputs: [
    {
      id: "power",
      label: "Potencia",
      symbol: "P",
      unit: "kW",
      required: true,
    },
    {
      id: "hours",
      label: "Horas por día",
      symbol: "h",
      unit: "h",
      required: true,
    },
    {
      id: "days",
      label: "Días por mes",
      symbol: "d",
      unit: "días",
      required: true,
    },
  ],

  outputs: [
    {
      id: "dailyEnergy",
      label: "Consumo Diario",
      symbol: "E₁",
      unit: "kWh",
    },
    {
      id: "monthlyEnergy",
      label: "Consumo Mensual",
      symbol: "E₂",
      unit: "kWh",
    },
  ],

  formula: "kWh = kW × h",

  references: [
    "IEC 60034",
    "IEEE Std 141",
  ],
};
import type { EngineeringTool } from "@/types/engineering-tool";

export const resistenciasSerie: EngineeringTool = {
  id: "resistencias-serie",

  type: "calculator",

  category: "Electricidad",

  title: "Resistencias en Serie",

  description:
    "Calcula la resistencia equivalente de varias resistencias conectadas en serie.",

  difficulty: "Básico",

  estimatedTime: "2 minutos",

  tags: [
    "resistencias",
    "serie",
    "ley de ohm",
    "electricidad",
  ],

  inputs: [],

  dynamicInputs: {
    enabled: true,
    label: "Resistencia",
    symbol: "R",
    unit: "Ω",
    minItems: 2,
  },

  outputs: [
    {
      id: "totalResistance",
      label: "Resistencia equivalente",
      symbol: "Rt",
      unit: "Ω",
    },
  ],

  formula: "Rt = R1 + R2 + ... + Rn",

  example:
    "100 Ω + 220 Ω + 330 Ω = 650 Ω",

  references: [
    "Ley de Ohm",
    "Circuitos en Serie",
  ],
};
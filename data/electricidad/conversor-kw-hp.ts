import type { EngineeringTool } from "@/types/engineering-tool";

export const conversorKwHp: EngineeringTool = {
  id: "conversor-kw-hp",

  type: "converter",

  category: "Electricidad",

  title: "Conversor kW → HP",

  description:
    "Convierte potencia de kilowatts (kW) a caballos de fuerza (HP).",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "kw",
    "hp",
    "motor",
    "potencia",
    "conversión",
  ],

  inputs: [
    {
      id: "kw",
      label: "Potencia",
      symbol: "kW",
      unit: "kW",
      required: true,
    },
  ],

  outputs: [
    {
      id: "hp",
      label: "Potencia",
      symbol: "HP",
      unit: "HP",
    },
  ],

  formula: "HP = kW / 0.746",

  references: [
    "IEC 60034",
    "IEEE Std 141",
  ],
};
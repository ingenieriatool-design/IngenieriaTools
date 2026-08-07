import type { EngineeringTool } from "@/types/engineering-tool";

export const conversorHpKw: EngineeringTool = {
  id: "conversor-hp-kw",

  type: "converter",

  category: "Electricidad",

  title: "Conversor HP ↔ kW",

  description:
    "Convierte potencia entre caballos de fuerza (HP) y kilowatts (kW).",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "hp",
    "kw",
    "motor",
    "potencia",
    "conversión",
  ],

  inputs: [
    {
      id: "hp",
      label: "Potencia",
      symbol: "HP",
      unit: "HP",
      required: true,
    },
  ],

  outputs: [
    {
      id: "kw",
      label: "Potencia",
      symbol: "kW",
      unit: "kW",
    },
  ],

  formula: "kW = HP × 0.746",

  references: [
    "IEC 60034",
    "IEEE Std 141",
  ],
};
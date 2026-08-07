import type { EngineeringTool } from "@/types/engineering-tool";

export const factorPotencia: EngineeringTool = {
  id: "factor-potencia",

  type: "calculator",

  category: "Electricidad",

  title: "Factor de Potencia",

  description:
    "Calcula el factor de potencia (FP) a partir de la potencia activa y la potencia aparente.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "factor de potencia",
    "fp",
    "kW",
    "kVA",
    "electricidad",
  ],

  inputs: [
    {
      id: "activePower",
      label: "Potencia Activa",
      symbol: "P",
      unit: "kW",
      required: true,
    },
    {
      id: "apparentPower",
      label: "Potencia Aparente",
      symbol: "S",
      unit: "kVA",
      required: true,
    },
  ],

  outputs: [
    {
      id: "powerFactor",
      label: "Factor de Potencia",
      symbol: "FP",
      unit: "",
    },
  ],

  formula: "FP = P / S",

  references: [
    "IEEE Std 141",
    "IEC 60364",
    "NFPA 70 (NEC)",
  ],
};
import type { EngineeringTool } from "@/types/engineering-tool";

export const voltaje: EngineeringTool = {
  id: "voltaje",

  type: "calculator",

  category: "Electricidad",

  title: "Calculadora de Voltaje",

  description:
    "Calcula el voltaje eléctrico a partir de la potencia y la corriente.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "voltaje",
    "ley de ohm",
    "electricidad",
    "potencia",
    "corriente",
  ],

  inputs: [
    {
      id: "power",
      label: "Potencia",
      symbol: "P",
      unit: "W",
      required: true,
    },
    {
      id: "current",
      label: "Corriente",
      symbol: "I",
      unit: "A",
      required: true,
    },
  ],

  outputs: [
    {
      id: "voltage",
      label: "Voltaje",
      symbol: "V",
      unit: "V",
    },
  ],

  formula: "V = P / I",

  example:
    "Si una carga consume 1200 W y circulan 10 A, el voltaje es 120 V.",

  references: [
    "Ley de Ohm",
    "IEC 60038",
  ],
};
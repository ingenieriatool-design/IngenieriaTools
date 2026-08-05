import type { EngineeringTool } from "@/types/engineering-tool";

export const leyOhm: EngineeringTool = {
  id: "ley-ohm",

  type: "calculator",

  category: "electricidad",

  title: "Ley de Ohm",

  description:
    "Calcula la resistencia eléctrica utilizando la Ley de Ohm.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "electricidad",
    "ley de ohm",
    "voltaje",
    "corriente",
    "resistencia",
  ],

  inputs: [
    {
      id: "voltage",
      label: "Voltaje",
      symbol: "V",
      unit: "V",
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
      id: "resistance",
      label: "Resistencia",
      symbol: "R",
      unit: "Ω",
    },
  ],

  formula: "R = V / I",

  example:
    "Si el voltaje es de 220 V y la corriente es de 2 A, la resistencia será de 110 Ω.",

  references: [
    "Ley de Ohm",
    "IEC 60038",
  ],
};
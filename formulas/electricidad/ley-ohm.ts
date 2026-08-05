import { EngineeringTool } from "@/types/engineering-tool";

export const leyOhm: EngineeringTool = {
  id: "ley-ohm",

  type: "calculator",

  category:"electricidad",

  title: "Ley de Ohm",

  description:
    "Calcula la resistencia eléctrica utilizando el voltaje y la corriente.",

  difficulty: "Básico",

  estimatedTime: "2 minutos",

  tags: [
    "Electricidad",
    "Voltaje",
    "Corriente",
    "Resistencia",
    "Ley de Ohm",
  ],

  inputs: [
    {
      id: "voltage",
      label: "Voltaje",
      symbol: "V",
      unit: "V",
    },
    {
      id: "current",
      label: "Corriente",
      symbol: "I",
      unit: "A",
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

  example: "220 V / 10 A = 22 Ω",

  references: [
    "IEEE",
    "Alexander & Sadiku - Fundamentals of Electric Circuits",
  ],
};
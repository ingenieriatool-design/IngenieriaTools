import type { EngineeringTool } from "@/types/engineering-tool";

export const potenciaTrifasica: EngineeringTool = {
  id: "potencia-trifasica",

  type: "calculator",

  category: "Electricidad",

  title: "Potencia Activa Trifásica",

  description:
    "Calcula la potencia activa en un sistema eléctrico trifásico utilizando el voltaje, la corriente y el factor de potencia.",

  difficulty: "Intermedio",

  estimatedTime: "2 minutos",

  tags: [
    "potencia",
    "trifásica",
    "electricidad",
    "motores",
    "industrial",
  ],

  inputs: [
    {
      id: "voltage",
      label: "Voltaje Línea-Línea",
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
    {
      id: "powerFactor",
      label: "Factor de Potencia",
      symbol: "FP",
      unit: "",
      required: true,
    },
  ],

  outputs: [
    {
      id: "power",
      label: "Potencia Activa",
      symbol: "P",
      unit: "W",
    },
  ],

  formula: "P = √3 × V × I × FP",

 

  references: [
    "IEC 60038",
    "IEEE Std 141",
  ],
};
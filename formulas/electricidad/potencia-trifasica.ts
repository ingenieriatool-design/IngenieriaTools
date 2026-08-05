import { EngineeringTool } from "@/types/engineering-tool";

export const potenciaTrifasica: EngineeringTool = {
  id: "potencia-trifasica",

  type: "calculator",

  category: "electricidad",

  title: "Potencia Activa Trifásica",

  description:
    "Calcula la potencia activa de un sistema trifásico utilizando el voltaje, la corriente y el factor de potencia.",

  difficulty: "Intermedio",

  estimatedTime: "3 minutos",

  tags: [
    "Electricidad",
    "Potencia",
    "Trifásica",
    "Motores",
    "Voltaje",
    "Corriente",
    "Factor de Potencia",
    "kW",
    "Industria",
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
      unit: "kW",
    },
  ],

  formula: "P = √3 × V × I × FP / 1000",

  example: "480 V × 30 A × 0.90 × √3 / 1000 = 22.45 kW",

  references: [
    "IEEE",
    "IEC 60038",
    "NFPA 70 (NEC)",
  ],
};
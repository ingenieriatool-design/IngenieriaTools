import type { EngineeringTool } from "@/types/engineering-tool";

export const potenciaElectrica: EngineeringTool = {
  id: "potencia-electrica",

  type: "calculator",

  category: "electricidad",

  title: "Potencia Eléctrica",

  description:
    "Calcula la potencia eléctrica a partir del voltaje y la corriente.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "potencia",
    "electricidad",
    "voltaje",
    "corriente",
    "watt",
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
      id: "power",
      label: "Potencia",
      symbol: "P",
      unit: "W",
    },
  ],

  formula: "P = V × I",

  example:
    "Si el voltaje es de 220 V y la corriente es de 2 A, la potencia será de 440 W.",

  references: [
    "Ley de Watt",
    "IEC 60038",
  ],
};
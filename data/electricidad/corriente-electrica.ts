import type { EngineeringTool } from "@/types/engineering-tool";

export const corrienteElectrica: EngineeringTool = {
  id: "corriente-electrica",

  type: "calculator",

  category: "electricidad",

  title: "Corriente Eléctrica",

  description:
    "Calcula la corriente eléctrica a partir de la potencia y el voltaje.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "corriente",
    "amperes",
    "intensidad",
    "electricidad",
    "ley de watt",
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
      id: "voltage",
      label: "Voltaje",
      symbol: "V",
      unit: "V",
      required: true,
    },
  ],

  outputs: [
    {
      id: "current",
      label: "Corriente",
      symbol: "I",
      unit: "A",
    },
  ],

  formula: "I = P / V",

  example:
    "Si la potencia es de 1500 W y el voltaje es de 127 V, la corriente será de 11.81 A.",

  references: [
    "Ley de Watt",
    "IEC 60038",
  ],
};
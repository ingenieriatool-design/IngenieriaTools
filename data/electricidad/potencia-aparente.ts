import type { EngineeringTool } from "@/types/engineering-tool";

export const potenciaAparente: EngineeringTool = {
  id: "potencia-aparente",

  type: "calculator",

  category: "Electricidad",

  title: "Potencia Aparente Trifásica",

  description:
    "Calcula la potencia aparente (kVA) de un sistema trifásico a partir del voltaje y la corriente.",

  difficulty: "Intermedio",

  estimatedTime: "1 minuto",

  tags: [
    "potencia",
    "potencia aparente",
    "kVA",
    "trifásica",
    "electricidad",
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
  ],

  outputs: [
    {
      id: "power",
      label: "Potencia Aparente",
      symbol: "S",
      unit: "kVA",
    },
  ],

  formula: "S = (√3 × V × I) / 1000",

  references: [
    "IEEE Std 141 (Red Book)",
    "IEC 60038",
    "NFPA 70 (NEC)",
  ],
};
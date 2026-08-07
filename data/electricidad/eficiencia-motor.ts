import type { EngineeringTool } from "@/types/engineering-tool";

export const eficienciaMotor: EngineeringTool = {
  id: "eficiencia-motor",

  type: "calculator",

  category: "Electricidad",

  title: "Eficiencia del Motor",

  description:
    "Calcula la eficiencia de un motor a partir de la potencia de entrada y la potencia de salida.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "motor",
    "eficiencia",
    "potencia",
    "rendimiento",
    "energia",
  ],

  inputs: [
    {
      id: "inputPower",
      label: "Potencia de Entrada",
      symbol: "Pin",
      unit: "kW",
      required: true,
    },
    {
      id: "outputPower",
      label: "Potencia de Salida",
      symbol: "Pout",
      unit: "kW",
      required: true,
    },
  ],

  outputs: [
    {
      id: "efficiency",
      label: "Eficiencia",
      symbol: "η",
      unit: "%",
    },
  ],

  formula: "η = (Psalida / Pentrada) × 100",

  references: [
    "IEC 60034",
    "IEEE Std 112",
    "NEMA MG 1",
  ],
};
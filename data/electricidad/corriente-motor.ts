import type { EngineeringTool } from "@/types/engineering-tool";

export const corrienteMotor: EngineeringTool = {
  id: "corriente-motor",

  type: "calculator",

  category: "Electricidad",

  title: "Corriente Nominal de Motor Trifásico",

  description:
    "Calcula la corriente nominal aproximada de un motor trifásico utilizando la potencia, el voltaje, el factor de potencia y la eficiencia.",

  difficulty: "Intermedio",

  estimatedTime: "2 minutos",

  tags: [
    "motor",
    "corriente",
    "hp",
    "kw",
    "trifásico",
    "electricidad",
  ],

  inputs: [
    {
      id: "power",
      label: "Potencia",
      symbol: "P",
      required: true,
    },

    {
      id: "unit",
      label: "Unidad",
      required: true,
      options: [
        {
          label: "HP",
          value: "hp",
        },
        {
          label: "kW",
          value: "kw",
        },
      ],
    },

    {
      id: "voltage",
      label: "Voltaje Línea-Línea",
      symbol: "V",
      unit: "V",
      required: true,
    },

    {
      id: "powerFactor",
      label: "Factor de Potencia (Opcional)",
      symbol: "FP",
    },

    {
      id: "efficiency",
      label: "Eficiencia (Opcional)",
      symbol: "η",
      unit: "%",
    },
  ],

  outputs: [
    {
      id: "current",
      label: "Corriente Nominal",
      symbol: "I",
      unit: "A",
    },
  ],

  formula:
    "I = (kW × 1000) / (√3 × V × FP × η)",

  references: [
    "IEC 60034",
    "IEEE Std 141",
    "NFPA 70 (NEC)",
  ],
};
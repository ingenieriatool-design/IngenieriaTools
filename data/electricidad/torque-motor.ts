import type { EngineeringTool } from "@/types/engineering-tool";

export const torqueMotor: EngineeringTool = {
  id: "torque-motor",

  type: "calculator",

  category: "Electricidad",

  title: "Torque del Motor",

  description:
    "Calcula el torque desarrollado por un motor a partir de la potencia y la velocidad de giro.",

  difficulty: "Intermedio",

  estimatedTime: "1 minuto",

  tags: [
    "motor",
    "torque",
    "potencia",
    "rpm",
    "mecánica",
  ],

  inputs: [
    {
      id: "power",
      label: "Potencia",
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
      id: "rpm",
      label: "Velocidad",
      symbol: "N",
      unit: "RPM",
      required: true,
    },
  ],

  outputs: [
    {
      id: "torque",
      label: "Torque",
      symbol: "T",
      unit: "N·m",
    },
  ],

  formula: "T = (9550 × kW) / RPM",

  references: [
    "IEC 60034",
    "IEEE Std 112",
    "NEMA MG 1",
  ],
};
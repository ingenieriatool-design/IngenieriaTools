import type { EngineeringTool } from "@/types/engineering-tool";

export const potenciaMecanica: EngineeringTool = {
  id: "potencia-mecanica",

  type: "calculator",

  category: "Electricidad",

  title: "Potencia Mecánica",

  description:
    "Calcula la potencia mecánica de un eje a partir del torque y la velocidad de rotación.",

  difficulty: "Intermedio",

  estimatedTime: "1 minuto",

  tags: [
    "motor",
    "potencia",
    "torque",
    "rpm",
    "mecánica",
  ],

  inputs: [
    {
      id: "torque",
      label: "Torque",
      symbol: "T",
      unit: "N·m",
      required: true,
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
      id: "power",
      label: "Potencia Mecánica",
      symbol: "P",
      unit: "kW",
    },
  ],

  formula: "P = (T × RPM) / 9550",

  references: [
    "IEC 60034",
    "IEEE Std 112",
    "NEMA MG 1",
  ],
};
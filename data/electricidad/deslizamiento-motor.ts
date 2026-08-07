import type { EngineeringTool } from "@/types/engineering-tool";

export const deslizamientoMotor: EngineeringTool = {
  id: "deslizamiento-motor",

  type: "calculator",

  category: "Electricidad",

  title: "Deslizamiento del Motor",

  description:
    "Calcula el porcentaje de deslizamiento de un motor de inducción a partir de la velocidad sincrónica y la velocidad real.",

  difficulty: "Intermedio",

  estimatedTime: "1 minuto",

  tags: [
    "motor",
    "deslizamiento",
    "rpm",
    "velocidad",
    "inducción",
  ],

  inputs: [
    {
      id: "syncSpeed",
      label: "Velocidad Sincrónica",
      symbol: "Ns",
      unit: "RPM",
      required: true,
    },
    {
      id: "realSpeed",
      label: "Velocidad Real",
      symbol: "Nr",
      unit: "RPM",
      required: true,
    },
  ],

  outputs: [
    {
      id: "slip",
      label: "Deslizamiento",
      symbol: "S",
      unit: "%",
    },
  ],

  formula: "S = ((Ns - Nr) / Ns) × 100",

  references: [
    "IEC 60034",
    "IEEE Std 112",
    "NEMA MG 1",
  ],
};
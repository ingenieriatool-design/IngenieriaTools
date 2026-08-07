import type { EngineeringTool } from "@/types/engineering-tool";

export const velocidadSincronica: EngineeringTool = {
  id: "velocidad-sincronica",

  type: "calculator",

  category: "Electricidad",

  title: "Velocidad Sincrónica",

  description:
    "Calcula la velocidad sincrónica de un motor de corriente alterna según la frecuencia y el número de polos.",

  difficulty: "Básico",

  estimatedTime: "1 minuto",

  tags: [
    "motor",
    "rpm",
    "velocidad",
    "polos",
    "frecuencia",
  ],

  inputs: [
    {
      id: "frequency",
      label: "Frecuencia",
      required: true,
      options: [
        { label: "50 Hz", value: "50" },
        { label: "60 Hz", value: "60" },
      ],
    },
    {
      id: "poles",
      label: "Número de Polos",
      required: true,
      options: [
        { label: "2", value: "2" },
        { label: "4", value: "4" },
        { label: "6", value: "6" },
        { label: "8", value: "8" },
        { label: "10", value: "10" },
        { label: "12", value: "12" },
      ],
    },
  ],

  outputs: [
    {
      id: "rpm",
      label: "Velocidad Sincrónica",
      symbol: "Ns",
      unit: "RPM",
    },
  ],

  formula: "Ns = (120 × f) / P",

  references: [
    "IEC 60034",
    "IEEE Std 112",
    "NEMA MG 1",
  ],
};
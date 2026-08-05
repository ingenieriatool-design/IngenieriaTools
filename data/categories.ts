import {
  Zap,
  Snowflake,
  Cpu,
  Sun,
  Cog,
  Activity,
  Droplets,
  LucideIcon,
} from "lucide-react";

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  {
    id: "electricidad",
    title: "Electricidad",
    description: "Cálculos eléctricos",
    icon: Zap,
  },
  {
    id: "hvac",
    title: "HVAC",
    description: "Climatización",
    icon: Snowflake,
  },
  {
    id: "automatizacion",
    title: "Automatización",
    description: "PLC, sensores y control",
    icon: Cpu,
  },
  {
    id: "energia-solar",
    title: "Energía Solar",
    description: "Fotovoltaica",
    icon: Sun,
  },
  {
    id: "mecanica",
    title: "Mecánica",
    description: "Transmisiones, torque y potencia",
    icon: Cog,
  },
  {
    id: "instrumentacion",
    title: "Instrumentación",
    description: "Sensores y medición",
    icon: Activity,
  },
  {
    id: "hidraulica",
    title: "Hidráulica",
    description: "Bombas y tuberías",
    icon: Droplets,
  },
];
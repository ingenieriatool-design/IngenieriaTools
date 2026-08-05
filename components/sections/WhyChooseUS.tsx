import FeatureCard from "@/components/cards/FeatureCard";

import {
  Calculator,
  ShieldCheck,
  Zap,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Calculadoras Profesionales",
    description:
      "Herramientas desarrolladas para estudiantes, técnicos e ingenieros.",
  },
  {
    icon: ShieldCheck,
    title: "Fórmulas Verificadas",
    description:
      "Basadas en normas técnicas y bibliografía reconocida.",
  },
  {
    icon: Zap,
    title: "Resultados Instantáneos",
    description:
      "Obtén cálculos precisos en segundos sin instalar software.",
  },
  {
    icon: Smartphone,
    title: "Funciona en cualquier dispositivo",
    description:
      "Compatible con computadoras, tablets y teléfonos móviles.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            IngenieríaTools
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            ¿Por qué elegir IngenieríaTools?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Una plataforma diseñada para facilitar cálculos de ingeniería
            con rapidez, precisión y una excelente experiencia de uso.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
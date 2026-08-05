import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 p-16 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold md:text-5xl">
            Empieza a calcular hoy mismo
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            IngenieríaTools reúne calculadoras profesionales para estudiantes,
            técnicos e ingenieros en un solo lugar.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/calculadoras"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Explorar Calculadoras
            </Link>

            <Link
              href="/categorias"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Ver Categorías
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
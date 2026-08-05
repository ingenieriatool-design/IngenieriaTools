"use client";

import { Search, Calculator, Zap, BookOpen } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-100 opacity-30 blur-3xl" />

      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center py-12 text-center">

            <div className="mb-2">
            <Image
            src="/logo.png"
            alt="IngenieríaTools"
            width={500}
            height={500}
            priority
            className="mx-auto h-auto w-72 md:w-80 lg:w-96 drop-shadow-lg"
            />
            </div>

          <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
            Calculadoras profesionales para Ingeniería
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-[1.1] text-slate-600">
            Resuelve cálculos de electricidad, automatización, HVAC,
            instrumentación, hidráulica y mucho más en segundos.
          </p>

          {/* Buscador */}
          <div className="mt-10 flex w-full max-w-2xl items-center rounded-3xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">

            <Search
              className="ml-3 text-slate-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Buscar una calculadora..."
              className="flex-1 border-none bg-transparent px-4 py-4 outline-none"
            />

            <Button className="flex items-center gap-2">
              <Search size={16} />
              Buscar
            </Button>

          </div>

          {/* Estadísticas */}
          <div className="mt-14 w-full max-w-3xl rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

              <div>
                <Calculator className="mx-auto text-blue-600" size={20} />
                <p className="mt-2 text-3xl font-bold">100+</p>
                <span className="text-sm text-slate-500">
                  Calculadoras
                </span>
              </div>

              <div>
                <Zap className="mx-auto text-orange-500" size={20} />
                <p className="mt-2 text-3xl font-bold">10+</p>
                <span className="text-sm text-slate-500">
                  Categorías
                </span>
              </div>

              <div>
                <BookOpen className="mx-auto text-green-600" size={20} />
                <p className="mt-2 text-3xl font-bold">Paso</p>
                <span className="text-sm text-slate-500">
                  a paso
                </span>
              </div>

              <div>
                <Calculator className="mx-auto text-purple-600" size={20} />
                <p className="mt-2 text-3xl font-bold">100%</p>
                <span className="text-sm text-slate-500">
                  Gratis
                </span>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
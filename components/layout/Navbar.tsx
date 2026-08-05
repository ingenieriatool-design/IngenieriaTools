import Link from "next/link";
import { Calculator, Menu } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Calculator size={15} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                IngenieríaTools
              </h1>

              <p className="text-xs text-slate-500">
                Calculadoras de Ingeniería
              </p>
            </div>
          </Link>

          {/* Menú escritorio */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Inicio
            </Link>

            <Link
              href="/calculadoras"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Calculadoras
            </Link>

            <Link
              href="/categorias"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Categorías
            </Link>
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-3">
            <Button variant="secondary">
              Buscar
            </Button>

            <button className="rounded-xl p-2 transition hover:bg-slate-100 md:hidden">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
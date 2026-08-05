import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold text-blue-600">
              IngenieríaTools
            </h3>

            <p className="mt-4 text-gray-600">
              Calculadoras profesionales para ingeniería,
              automatización, electricidad, HVAC y mucho más.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Plataforma</h4>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/calculadoras">Calculadoras</Link></li>
              <li><Link href="/categorias">Categorías</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Recursos</h4>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li><Link href="/">Guías</Link></li>
              <li><Link href="/">Normas</Link></li>
              <li><Link href="/">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contacto</h4>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>GitHub</li>
              <li>Correo</li>
              <li>LinkedIn</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t pt-8 text-center text-sm text-gray-500">
          © 2026 IngenieríaTools. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
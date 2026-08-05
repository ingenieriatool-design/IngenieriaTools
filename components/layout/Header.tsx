export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <h1 className="text-xl font-bold text-slate-900">
          IngenieríaTools
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-slate-600 hover:text-blue-600">
            Inicio
          </a>

          <a href="#" className="text-slate-600 hover:text-blue-600">
            Calculadoras
          </a>

          <a href="#" className="text-slate-600 hover:text-blue-600">
            Categorías
          </a>

          <a href="#" className="text-slate-600 hover:text-blue-600">
            Acerca de
          </a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
          Iniciar sesión
        </button>

      </div>
    </header>
  );
}
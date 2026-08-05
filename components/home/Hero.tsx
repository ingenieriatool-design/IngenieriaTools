export default function Hero() {
  return (
    <section className="py-20 text-center">

      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">
        IngenieríaTools
      </h1>

      <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
        La plataforma de cálculos de ingeniería diseñada para estudiantes,
        técnicos e ingenieros.
      </p>

      <p className="mt-2 text-lg text-slate-500">
        Resultados rápidos con procedimientos paso a paso cuando los necesites.
      </p>

      <div className="mt-10 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Buscar una calculadora..."
          className="w-full max-w-2xl rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    </section>
  );
}
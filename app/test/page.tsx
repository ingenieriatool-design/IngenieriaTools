"use client";

import { useState } from "react";

import DynamicInputs from "@/components/calculator/DynamicInputs";

export default function TestPage() {
  const [values, setValues] = useState(["", ""]);

  return (
    <main className="mx-auto max-w-3xl p-10 space-y-8">

      <h1 className="text-3xl font-bold">
        Prueba DynamicInputs
      </h1>

     <DynamicInputs
    label="Resistencia"
     symbol="R"
     unit="Ω"
    values={values}
    onChange={setValues}
 />

      <div className="rounded-xl bg-gray-100 p-4">
        <h2 className="font-bold mb-2">
          Estado actual
        </h2>

        <pre>
          {JSON.stringify(values, null, 2)}
        </pre>
      </div>

    </main>
  );
}
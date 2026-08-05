export function calculateThreePhasePower(values: Record<string, number>) {
  const voltage = Number(values.voltage);
  const current = Number(values.current);
  const powerFactor = Number(values.powerFactor);

  const power = (Math.sqrt(3) * voltage * current * powerFactor) / 1000;

  return {
    value: Number(power.toFixed(2)),
    unit: "kW",

    formula: "P = √3 × V × I × FP / 1000",

    substitution: `√3 × ${voltage} × ${current} × ${powerFactor} / 1000`,

    explanation:
      "La potencia activa trifásica se obtiene multiplicando la raíz de tres por el voltaje de línea, la corriente y el factor de potencia, dividiendo el resultado entre 1000 para obtener kW.",

    steps: [
       {
    title: "Paso 1",
    content: "Aplicamos la fórmula de potencia activa trifásica.",
  },
  {
    title: "Paso 2",
    content: "Sustituimos los valores en la fórmula.",
  },
  {
    title: "Paso 3",
    content: `P = √3 × ${voltage} × ${current} × ${powerFactor} / 1000`,
  },
  {
    title: "Paso 4",
    content: `Resultado: ${power.toFixed(2)} kW.`,
  },
    ]
  };
}
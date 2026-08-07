import type { CalculationResult } from "../registry";

export function calculateMotorSlip(
  values: Record<string, string>
): CalculationResult {
  const syncSpeed = Number(values.syncSpeed);
  const realSpeed = Number(values.realSpeed);

  if (isNaN(syncSpeed) || isNaN(realSpeed)) {
    throw new Error("Ingresa valores válidos.");
  }

  if (syncSpeed <= 0) {
    throw new Error("La velocidad sincrónica debe ser mayor que cero.");
  }

  if (realSpeed <= 0) {
    throw new Error("La velocidad real debe ser mayor que cero.");
  }

  if (realSpeed > syncSpeed) {
    throw new Error(
      "La velocidad real no puede ser mayor que la velocidad sincrónica."
    );
  }

  const slip =
    ((syncSpeed - realSpeed) / syncSpeed) * 100;

  return {
    outputs: {
      slip: Number(slip.toFixed(2)),
    },

    formula: "S = ((Ns - Nr) / Ns) × 100",

    substitution: `((${syncSpeed} - ${realSpeed}) / ${syncSpeed}) × 100`,

    explanation:
      "El deslizamiento representa la diferencia entre la velocidad sincrónica del campo magnético y la velocidad real del rotor. Es una característica normal en los motores de inducción.",

    steps: [
      {
        title: "Paso 1: Identificar los datos",
        content: `Velocidad sincrónica = ${syncSpeed} RPM\nVelocidad real = ${realSpeed} RPM`,
      },
      {
        title: "Paso 2: Aplicar la fórmula",
        content: "S = ((Ns - Nr) / Ns) × 100",
      },
      {
        title: "Paso 3: Sustituir los valores",
        content: `((${syncSpeed} - ${realSpeed}) / ${syncSpeed}) × 100`,
      },
      {
        title: "Paso 4: Realizar el cálculo",
        content: `${slip.toFixed(2)} %`,
      },
      {
        title: "Resultado",
        content: `El deslizamiento del motor es ${slip.toFixed(2)} %.`,
      },
    ],
  };
}
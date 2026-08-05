import { calculateResistance } from "./calculations/ohm";
import { calculateThreePhasePower } from "./calculations/potencia-trifasica";

export interface CalculationStep {
  title: string;
  content: string;
}

export interface CalculationResult {
  outputs: Record<string, string | number>;

  formula: string;

  substitution: string;

  explanation: string;

  steps: CalculationStep[];
}

export type CalculationFunction = (
  values: Record<string, string>
) => CalculationResult;

export const calculatorRegistry: Record<string, CalculationFunction> = {
  "ley-ohm": calculateResistance,
  "potencia-trifasica": calculateThreePhasePower,
};
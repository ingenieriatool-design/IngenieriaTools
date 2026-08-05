import { calculateResistance } from "./calculations/ohm";
import { calculateThreePhasePower } from "./calculations/potencia-trifasica";

export interface CalculationStep {
  title: string;
  content: string;
}

export interface CalculationResult {
  value: number;
  unit: string;
  formula: string;
  substitution: string;
  explanation: string;
  steps: CalculationStep[];
}

export type CalculationFunction = (
  values: Record<string, string>
) => CalculationResult;

export const calculationRegistry: Record<string, CalculationFunction> = {
  "ley-ohm": calculateResistance,
  "potencia-trifasica": calculateThreePhasePower,
};
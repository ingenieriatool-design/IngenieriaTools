import { calculateResistance } from "./electricidad/ley-ohm";
import { calculatePower } from "./electricidad/potencia";
import { calculateCurrent } from "./electricidad/corriente-electrica";
import { calculateVoltage } from "./electricidad/voltaje";
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
  "potencia-electrica": calculatePower,
  "voltaje": calculateVoltage,
  "corriente-electrica": calculateCurrent,
};
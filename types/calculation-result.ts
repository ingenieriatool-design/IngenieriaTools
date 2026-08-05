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

  precision?: number;

  references?: string[];

  notes?: string[];
}
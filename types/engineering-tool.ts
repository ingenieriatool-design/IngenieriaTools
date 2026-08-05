export interface ToolVariable {
  id: string;
  label: string;
  symbol?: string;
  unit?: string;
  required?: boolean;
}

export interface EngineeringTool {
  id: string;

  type: "calculator" | "converter" | "table" | "guide" | "simulator";

  category: string;

  title: string;

  description: string;

  difficulty: "Básico" | "Intermedio" | "Avanzado";

  estimatedTime: string;

  tags: string[];

  // Entradas
  inputs: ToolVariable[];

  // Resultados
  outputs: ToolVariable[];

  formula?: string;

  example?: string;

  references: string[];
}
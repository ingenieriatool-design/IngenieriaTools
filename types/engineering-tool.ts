
export interface ToolOption {
  label: string;
  value: string;
}

export interface ToolVariable {
  id: string;
  label: string;
  symbol?: string;
  unit?: string;
  required?: boolean;

  // Si existe, el campo se renderiza como un <select>
  options?: ToolOption[];
}

export interface DynamicInputsConfig {
  enabled: boolean;

  label: string;

  symbol?: string;

  unit?: string;

  minItems?: number;

  maxItems?: number;
}

export interface EngineeringTool {
  id: string;

  type:
    | "calculator"
    | "converter"
    | "table"
    | "guide"
    | "simulator";

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

  // Entradas dinámicas
  dynamicInputs?: DynamicInputsConfig;

  formula?: string;

  references: string[];
}
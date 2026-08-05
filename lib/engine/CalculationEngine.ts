import { calculationRegistry } from "@/lib/calculationRegistry";
import { EngineeringTool } from "@/types/engineering-tool";
import { CalculationResult } from "@/types/calculation-result";

export class CalculationEngine {
  static execute(
    tool: EngineeringTool,
    values: Record<string, number>
  ): CalculationResult {
    const calculate =
      calculationRegistry[
        tool.id as keyof typeof calculationRegistry
      ];

    if (!calculate) {
      throw new Error(`No existe un cálculo para "${tool.id}".`);
    }

    return calculate(values);
  }
}
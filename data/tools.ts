import type { EngineeringTool } from "@/types/engineering-tool";
import { electricidadTools } from "./electricidad";

export const tools: EngineeringTool[] = [
  ...electricidadTools,
];

export function getTool(category: string, toolId: string) {
  return tools.find(
    (tool) =>
      tool.category.toLowerCase() === category.toLowerCase() &&
      tool.id === toolId
  );
}
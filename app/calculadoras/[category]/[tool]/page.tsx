import { notFound } from "next/navigation";

import CalculatorRenderer from "@/components/calculator/CalculatorRenderer";
import { getTool, tools } from "@/data/tools";

interface PageProps {
  params: Promise<{
    category: string;
    tool: string;
  }>;
}

export default async function ToolPage({ params }: PageProps) {
  const { category, tool } = await params;

  console.log("========== TOOL PAGE ==========");
  console.log("Category:", category);
  console.log("Tool:", tool);
  console.log("Tools:", tools);

  const selectedTool = getTool(category, tool);

  console.log("SelectedTool:", selectedTool);

  // Temporalmente NO usar notFound()
  if (!selectedTool) {
  notFound();
}

return (
  <main className="max-w-5xl mx-auto py-10 px-4">
    <CalculatorRenderer tool={selectedTool} />
  </main>
);
}
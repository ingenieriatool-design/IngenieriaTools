import Link from "next/link";
import { EngineeringTool } from "@/types/engineering-tool";

interface Props {
  tool: EngineeringTool;
}

export default function CalculatorCard({ tool }: Props) {
  return (
    <Link
      href={`/calculadoras/${tool.category}/${tool.id}`}
      className="block rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-bold">{tool.title}</h2>

      <p className="mt-2 text-gray-600">{tool.description}</p>

      <div className="mt-6 text-blue-600 font-semibold">
        Abrir →
      </div>
    </Link>
  );
}
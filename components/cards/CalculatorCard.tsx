import Link from "next/link";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import { EngineeringTool } from "@/types/engineering-tool";

interface CalculatorCardProps {
  tool: EngineeringTool;
}

export default function CalculatorCard({ tool }: CalculatorCardProps) {
  return (
    <Link
      href={`/calculadoras/${tool.category}/${tool.id}`}
      className="group block rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {tool.category}
        </span>

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {tool.title}
      </h3>

      <p className="mt-3 line-clamp-2 text-gray-600">
        {tool.description}
      </p>

      <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <BarChart3 size={16} />
          {tool.difficulty}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {tool.estimatedTime}
        </div>
      </div>
    </Link>
  );
}
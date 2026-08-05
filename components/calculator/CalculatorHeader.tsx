import { Clock, BarChart3 } from "lucide-react";

interface CalculatorHeaderProps {
  title: string;
  description: string;
  difficulty: string;
  estimatedTime: string;
}

export default function CalculatorHeader({
  title,
  description,
  difficulty,
  estimatedTime,
}: CalculatorHeaderProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      <h1 className="text-4xl font-bold text-gray-900">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-6">

        <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          <span className="font-medium text-blue-700">
            {difficulty}
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-orange-50 px-4 py-2">
          <Clock className="h-5 w-5 text-orange-600" />
          <span className="font-medium text-orange-700">
            {estimatedTime}
          </span>
        </div>

      </div>

    </div>
  );
}
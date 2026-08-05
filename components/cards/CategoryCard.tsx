
import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  slug: string;
  count: number;
  icon: LucideIcon;
}

export default function CategoryCard({
  title,
  description,
  slug,
  count,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={`/calculadoras/${slug}`}
      className="group block rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 text-white transition-transform duration-300 group-hover:scale-110">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {count} calculadoras
        </span>

        <span className="flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3">
          Explorar
          <ArrowRight size={18} />
        </span>
      </div>
    </Link>
  );
}
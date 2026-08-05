interface StatsCardProps {
  value: string | number;
  label: string;
}

export default function StatsCard({
  value,
  label,
}: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl font-extrabold text-blue-600">
        {value}
      </div>

      <div className="mt-3 text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}
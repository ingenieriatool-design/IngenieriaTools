interface ReferenceCardProps {
  references: string[];
}

export default function ReferenceCard({
  references,
}: ReferenceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Referencias
      </h2>

      <ul className="space-y-3">
        {references.map((reference, index) => (
          <li
            key={index}
            className="rounded-lg bg-gray-100 p-4"
          >
            {reference}
          </li>
        ))}
      </ul>
    </div>
  );
}
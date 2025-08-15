export default function SectionList({ title, items }) {
  return (
    <details open className="mb-4">
      <summary className="font-semibold">{title}</summary>
      <div className="mt-2 flex flex-wrap gap-3">
        {items.map((item, i) => (
          <button
            key={i}
            className="border px-3 py-1 rounded hover:bg-gray-100"
          >
            {typeof item === "string" ? item : `${item.name} - ${item.description || ""}`}
          </button>
        ))}
      </div>
    </details>
  );
}

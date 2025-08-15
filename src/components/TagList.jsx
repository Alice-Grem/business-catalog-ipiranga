export default function TagList({ tags, onAddTag }) {
  const handleAddTag = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      onAddTag(e.target.value.trim());
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, i) => (
        <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
          {tag}
        </span>
      ))}
      <input
        type="text"
        placeholder="+ Add Filter"
        onKeyDown={handleAddTag}
        className="border px-2 py-1 rounded text-sm"
      />
    </div>
  );
}

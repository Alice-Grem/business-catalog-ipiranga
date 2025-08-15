export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex w-full max-w-2xl border border-gray-300 rounded-md overflow-hidden mb-12 bg-white">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Pesquise termos, relatórios ou dados..."
        className="flex-1 px-4 py-2 outline-none"
      />
      <button
        onClick={onSearch}
        className="bg-white px-4 border-l border-gray-300 text-gray-700 hover:bg-gray-100"
      >
        Search
      </button>
    </div>
  );
}

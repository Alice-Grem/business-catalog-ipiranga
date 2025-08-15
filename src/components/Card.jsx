export default function Card({ icon: Icon, title, description }) {
  return (
    <div className="border-2 border-blue-600 rounded-lg p-6 text-center bg-white shadow hover:shadow-lg transition">
      <Icon className="mx-auto mb-4 text-blue-600" size={40} />
      <h3 className="font-bold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

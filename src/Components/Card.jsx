import Link from "next/link";

export default function Card({ title, description, link }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition text-black">
      <h2 className="text-black font-semibold mb-2 ">{title}</h2>
      <p className="text-black mb-4">{description}</p>
      <Link href={link} className="text-blue-600 hover:underline">
        Ver más
      </Link>
    </div>
  );
}

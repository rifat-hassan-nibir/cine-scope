import { Film } from "lucide-react";
import Link from "next/link";

export default function EmptyList({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="text-center py-16 md:py-24 bg-surface rounded-3xl border border-dashed border-white/10 px-4">
      {icon}
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto">{description}</p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-primary hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors"
      >
        Explore Movies
      </Link>
    </div>
  );
}

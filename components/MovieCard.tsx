import { Movie } from "@/types/tmdb";
import { Plus, Star } from "lucide-react";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group relative block rounded-xl overflow-hidden bg-surface transition-transform hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="aspect-2/3 w-full relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center text-yellow-400 text-xs font-bold">
                <Star size={12} className="fill-yellow-400 mr-1" />
                {movie.vote_average}
              </span>
              <span className="text-gray-300 text-xs">{movie.release_date}</span>
            </div>

            <h3 className="text-white font-bold text-sm mb-3 line-clamp-2 leading-tight">
              {movie.title}
            </h3>

            <button className="w-full py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors bg-white/20 backdrop-blur text-white hover:bg-white/30">
              <Plus size={14} /> Watch Later
            </button>
          </div>
        </div>

        {/* Static Rating Badge (visible when not hovering) */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 group-hover:opacity-0 transition-opacity">
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-medium text-white">{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}

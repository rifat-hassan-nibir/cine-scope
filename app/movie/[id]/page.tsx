import { getMovieDetails } from "@/services/tmdb";
import { Genre } from "@/types/tmdb";
import { Calendar, Clock, Plus, Star } from "lucide-react";

export default async function MovieDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const movie = await getMovieDetails(Number(id));

  return (
    <div className="mt-8 lg:mt-16 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12">
        {/* Poster Section */}
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-2/3">
            <img
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
              alt="No Poster"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="hover:cursor-pointer w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] bg-primary hover:bg-rose-700 text-white shadow-lg shadow-primary/25">
            <Plus /> Add to Watchlist
          </button>
        </div>

        {/* Info Section */}
        <div className="space-y-8 py-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {movie.title}{" "}
              <span className="text-gray-400 font-normal">
                ({new Date(movie.release_date).getFullYear()})
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-yellow-400">
              <Star size={16} fill="currentColor" />
              <span className="text-white">{movie.vote_average.toFixed(1)}</span>
              <span className="text-gray-500">({movie.vote_count} votes)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-gray-300">
              <Clock size={16} />
              {movie.runtime} min
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-gray-300">
              <Calendar size={16} />
              {movie.release_date}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((g: Genre) => (
              <span
                key={g.id}
                className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold"
              >
                {g.name}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-lg">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

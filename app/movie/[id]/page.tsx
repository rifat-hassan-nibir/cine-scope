import MovieCard from "@/components/MovieCard";
import WatchLaterButton from "@/components/WatchLaterButton";
import { TMDB_IMAGE_BASE_URL } from "@/constants";
import { getMovieCastDetails, getMovieDetails, getSimilarMovies } from "@/services/tmdb";
import { Cast, Genre, Movie } from "@/types/tmdb";
import { Calendar, Clock, Film, PanelsTopLeft, Star, Users } from "lucide-react";
import Image from "next/image";

export default async function MovieDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const movie = await getMovieDetails(Number(id));
  const castDetails = await getMovieCastDetails(Number(id));
  const similarMovies = await getSimilarMovies(Number(id));

  return (
    <div className="mt-8 lg:mt-12 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12">
        {/* Poster Section */}
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-2/3 relative">
            <Image
              src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title || "Movie Poster"}
              width={500}
              height={750}
              className="object-cover"
            />
          </div>

          {/* Watch Later Button */}
          <WatchLaterButton movie={movie} />
        </div>

        {/* Info Section */}
        <div className="space-y-8 py-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {movie.title}{" "}
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
              <p>{new Date(movie.release_date).getFullYear()}</p>
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
            <div className="flex items-center gap-2">
              <PanelsTopLeft className="text-primary" />
              <h3 className="text-xl font-semibold text-white">Overview</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">{movie.overview}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Users className="text-primary" />
              <h3 className="text-xl font-semibold text-white">Top Casts</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {castDetails.cast.slice(0, 10).map((cast: Cast) => (
                <div key={cast.id} className="flex flex-col items-center gap-2">
                  <Image
                    src={`${TMDB_IMAGE_BASE_URL}${cast.profile_path}`}
                    alt={cast.name}
                    width={100}
                    height={100}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="text-gray-300 text-xs font-medium text-wrap">{cast.name}</p>
                  <p className="text-gray-500 text-xs text-wrap">{cast.character}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-800" />

      {/* Similar Movies */}
      <div className="mt-8 lg:mt-16 space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Film className="text-primary" />
            <h3 className="text-2xl font-semibold text-white">Similar Movies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {similarMovies.slice(0, 10).map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

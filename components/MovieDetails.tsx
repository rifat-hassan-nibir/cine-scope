"use client";

import MovieCard from "@/components/MovieCard";
import WatchLaterButton from "@/components/buttons/WatchLaterButton";
import { TMDB_IMAGE_BASE_URL } from "@/constants";
import { addToRecentlyViewed } from "@/services/localStorage";
import { Cast, Genre, Movie, MovieDetails as MovieDetailsType } from "@/types/tmdb";
import { Calendar, Clock, Film, PanelsTopLeft, Star, Users } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function MovieDetails({
  movie,
  castDetails,
  similarMovies,
}: {
  movie: MovieDetailsType;
  castDetails: { cast: Cast[] };
  similarMovies: Movie[];
}) {
  useEffect(() => {
    addToRecentlyViewed(movie);
  }, [movie.id]);

  return (
    <div className="mt-8 lg:mt-10 space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6 md:gap-8 lg:gap-12">
        {/* Poster Section */}
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-2/3 relative">
            <Image
              src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title || "Movie Poster"}
              width={500}
              height={750}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Watch Later Button */}
          <WatchLaterButton movie={movie} />
        </div>

        {/* Info Section */}
        <div className="space-y-6 md:space-y-8 py-4">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {movie.title}{" "}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm font-medium">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-yellow-400">
              <Star size={16} fill="currentColor" />
              <span className="text-white">{movie.vote_average?.toFixed(1) || "0.0"}</span>
              <span className="text-gray-500">({movie.vote_count} votes)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-gray-300">
              <Clock size={16} />
              {movie.runtime} min
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-gray-300">
              <Calendar size={16} />
              <p>{movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((g: Genre) => (
              <span
                key={g.id}
                className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs md:text-sm font-semibold"
              >
                {g.name}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <PanelsTopLeft className="text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-white">Overview</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-lg">{movie.overview}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Users className="text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-white">Top Casts</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {castDetails.cast.slice(0, 10).map((cast: Cast) => (
                <div key={cast.id} className="flex flex-col items-center gap-2">
                  <Image
                    src={`${TMDB_IMAGE_BASE_URL}${cast.profile_path}`}
                    alt={cast.name}
                    width={100}
                    height={100}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="text-gray-300 text-xs font-medium text-center text-wrap">
                    {cast.name}
                  </p>
                  <p className="text-gray-500 text-xs text-center text-wrap">{cast.character}</p>
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
            <h3 className="text-lg md:text-xl font-semibold text-white">Similar Movies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {similarMovies.slice(0, 10).map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

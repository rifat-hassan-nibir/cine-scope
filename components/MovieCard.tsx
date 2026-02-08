import MovieCardWatchLater from "@/components/buttons/MovieCardWatchLater";
import { TMDB_IMAGE_BASE_URL } from "@/constants";
import { Movie } from "@/types/tmdb";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({
  movie,
  setWatchList,
}: {
  movie: Movie;
  setWatchList?: (movies: Movie[]) => void;
}) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group relative block rounded-xl overflow-hidden bg-surface transition-transform hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="aspect-2/3 w-full relative overflow-hidden">
        <Image
          src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          className="object-cover w-full h-full"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center text-yellow-400 text-xs font-bold">
                <Star size={12} className="fill-yellow-400 mr-1" />
                {movie.vote_average?.toFixed(1) || "0.0"}
              </span>
              <span className="text-gray-300 text-xs">
                {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
              </span>
            </div>

            <h3 className="text-white font-bold text-sm mb-3 line-clamp-2 leading-tight">
              {movie.title}
            </h3>

            <MovieCardWatchLater movie={movie} setWatchList={setWatchList} />
          </div>
        </div>

        {/* Static Rating Badge (visible when not hovering) */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 group-hover:opacity-0 transition-opacity">
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-medium text-white">
            {movie.vote_average?.toFixed(1) || "0.0"}
          </span>
        </div>
      </div>
    </Link>
  );
}

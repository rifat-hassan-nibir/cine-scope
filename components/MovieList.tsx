import MovieCard from "./MovieCard";
import { Movie } from "@/types/tmdb";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

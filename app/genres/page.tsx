import MovieCard from "@/components/MovieCard";
import SortMovies from "@/components/SortMovies";
import { getAllGenres, getMoviesData } from "@/services/tmdb";
import { Movie, MovieSortOption } from "@/types/tmdb";

export default async function GenresPage({
  searchParams,
}: {
  searchParams: Promise<{ id: string; sortBy: string }>;
}) {
  const { id, sortBy } = await searchParams;
  const genres = await getAllGenres();
  const movies = await getMoviesData(Number(id), sortBy as MovieSortOption);

  return (
    <div className="flex flex-col gap-8">
      <SortMovies genres={genres} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

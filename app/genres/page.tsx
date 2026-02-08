import PaginationButton from "@/components/buttons/PaginationButton";
import MovieList from "@/components/MovieList";
import SortMovies from "@/components/SortMovies";
import { getAllGenres, getMoviesData } from "@/services/tmdb";
import { MovieSortOption } from "@/types/tmdb";

export default async function GenresPage({
  searchParams,
}: {
  searchParams: Promise<{ id: string; sortBy: string; page: string }>;
}) {
  const { id, sortBy, page } = await searchParams;
  const currentPage = page ? Number(page) : 1;
  const genres = await getAllGenres();
  const movies = await getMoviesData(Number(id), sortBy as MovieSortOption, currentPage.toString());

  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <SortMovies genres={genres} />
      <MovieList movies={movies} />
      <PaginationButton currentPage={currentPage} />
    </div>
  );
}

import SeeAllMoviesButton from "@/components/buttons/SeeAllMoviesButton";
import MovieCard from "@/components/MovieCard";
import { getAllGenres, getMoviesData, getTopRatedMovies } from "@/services/tmdb";
import { Genre, Movie } from "@/types/tmdb";

export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();
  const genres = await getAllGenres();

  const genreMovies = await Promise.all(
    genres.map(async (genre: Genre) => {
      const movies = await getMoviesData(genre.id, "popularity.desc", 1);
      return {
        ...genre,
        movies: movies.slice(0, 5),
      };
    }),
  );

  return (
    <div className="flex flex-col gap-16">
      {/* Top Rated Movies */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-text border-l-4 border-primary pl-4">
            Top Rated Movies
          </h1>
          <SeeAllMoviesButton genre={"vote_average.desc"} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {topRatedMovies.slice(0, 10).map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Movies by Genre */}
      {genreMovies.map((genre: Genre & { movies: Movie[] }) => (
        <section key={genre.id}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text border-l-4 border-primary pl-4">
              {genre.name}
            </h2>
            <SeeAllMoviesButton genre={genre.id} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {genre.movies.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

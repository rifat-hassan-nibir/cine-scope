import SeeAllMoviesButton from "@/components/buttons/SeeAllMoviesButton";
import MovieList from "@/components/MovieList";
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
    <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
      {/* Top Rated Movies */}
      <section>
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-text border-l-4 border-primary pl-4">
            Top Rated Movies
          </h1>
          <SeeAllMoviesButton genre={"vote_average.desc"} />
        </div>

        {/* Movie List */}
        <MovieList movies={topRatedMovies.slice(0, 10)} />
      </section>

      {/* Movies by Genre */}
      {genreMovies.map((genre: Genre & { movies: Movie[] }) => (
        <section key={genre.id}>
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-text border-l-4 border-primary pl-4">
              {genre.name}
            </h2>
            <SeeAllMoviesButton genre={genre.id} />
          </div>

          {/* Movie List */}
          <MovieList movies={genre.movies} />
        </section>
      ))}
    </div>
  );
}

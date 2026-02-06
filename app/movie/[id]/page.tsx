import MovieDetails from "@/components/MovieDetails";
import { getMovieCastDetails, getMovieDetails, getSimilarMovies } from "@/services/tmdb";

export default async function MovieDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await getMovieDetails(Number(id));
  const castDetails = await getMovieCastDetails(Number(id));
  const similarMovies = await getSimilarMovies(Number(id));

  return <MovieDetails movie={movie} castDetails={castDetails} similarMovies={similarMovies} />;
}

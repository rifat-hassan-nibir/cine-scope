import MovieDetails from "@/components/MovieDetails";
import { getMovieCastDetails, getMovieDetails, getSimilarMovies } from "@/services/tmdb";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const movie = await getMovieDetails(Number(id));

  return {
    title: `${movie.title} - CineScope`,
    description: movie.overview,
  };
}

export default async function MovieDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await getMovieDetails(Number(id));
  const castDetails = await getMovieCastDetails(Number(id));
  const similarMovies = await getSimilarMovies(Number(id));

  return <MovieDetails movie={movie} castDetails={castDetails} similarMovies={similarMovies} />;
}

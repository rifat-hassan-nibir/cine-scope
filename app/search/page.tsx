import EmptyList from "@/components/EmptyList";
import MovieList from "@/components/MovieList";
import { searchMovies } from "@/services/tmdb";
import { Search } from "lucide-react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;
  const movies = await searchMovies(query || "");

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-text border-l-4 border-primary pl-4">
        Search Results for: <span className="text-primary italic">"{query}"</span>
      </h1>

      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <EmptyList
          title="No movies found"
          description={`We couldn't find any movies matching "${query}". Try a different keyword.`}
          icon={<Search size={48} className="md:size-16 mx-auto text-gray-600 mb-6" />}
        />
      )}
    </div>
  );
}

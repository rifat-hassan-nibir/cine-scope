import MovieCard from "@/components/MovieCard";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text">Trending Movies</h1>
        <button className="flex items-center gap-2 text-primary hover:underline hover:cursor-pointer transition-colors">
          See All <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

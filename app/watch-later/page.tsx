"use client";

import MovieCard from "@/components/MovieCard";
import { getFromLocalStorage } from "@/services/localStorage";
import { Movie } from "@/types/tmdb";
import { Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WatchlistPage() {
  const [watchList, setWatchList] = useState<Movie[]>([]);

  useEffect(() => {
    setWatchList(getFromLocalStorage("watchLater"));
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 border-b border-white/5 pb-6">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Clock className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Watch Later</h1>
          <p className="text-gray-400">Your curated list of movies to watch</p>
        </div>
      </div>

      {watchList.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {watchList.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} setWatchList={setWatchList} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-surface rounded-3xl border border-dashed border-white/10">
          <Clock size={64} className="mx-auto text-gray-600 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-2">Your watchlist is empty</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Movies you add to your watchlist will appear here. Start exploring to find something
            great to watch.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors"
          >
            Explore Movies
          </Link>
        </div>
      )}
    </div>
  );
}

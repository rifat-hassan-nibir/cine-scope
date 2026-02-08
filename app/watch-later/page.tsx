"use client";

import EmptyList from "@/components/EmptyList";
import MovieCard from "@/components/MovieCard";
import PageTitle from "@/components/PageTitle";
import { MovieCardSkeleton, Skeleton } from "@/components/SkeletonLoader";
import { getFromLocalStorage } from "@/services/localStorage";
import { Movie } from "@/types/tmdb";
import { Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WatchlistPage() {
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setWatchList(getFromLocalStorage("watchLater"));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="flex items-center gap-3 border-b border-white/5 pb-6">
          <Skeleton className="w-14 h-14 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(10)].map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageTitle
        title="Watch Later"
        description="Your curated list of movies to watch"
        icon={<Clock className="w-8 h-8 text-primary" />}
      />

      <hr className="border-white/5" />

      {watchList.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {watchList.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} setWatchList={setWatchList} />
          ))}
        </div>
      ) : (
        <div className="col-span-full">
          <EmptyList
            title="Your watchlist is empty"
            description="Movies you add to your watchlist will appear here. Start exploring to find something great to watch."
            icon={<Clock size={48} className="md:size-16 mx-auto text-gray-600 mb-6" />}
          />
        </div>
      )}
    </div>
  );
}

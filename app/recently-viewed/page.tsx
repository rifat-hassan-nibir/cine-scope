"use client";

import MovieCard from "@/components/MovieCard";
import PageTitle from "@/components/PageTitle";
import { MovieCardSkeleton, Skeleton } from "@/components/SkeletonLoader";
import { getFromLocalStorage } from "@/services/localStorage";
import { Movie } from "@/types/tmdb";
import { Eye, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecentlyViewedPage() {
  const [recentlyViewed, setRecentlyViewed] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setRecentlyViewed(getFromLocalStorage("recentlyViewed"));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 border-b border-white/5 pb-6 w-full">
            <Skeleton className="w-14 h-14 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(10)].map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  const handleClearAll = () => {
    setRecentlyViewed([]);
    localStorage.removeItem("recentlyViewed");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <PageTitle
          title="Recently Viewed"
          description="Your recently viewed movies"
          icon={<Eye className="w-8 h-8 text-primary" />}
        />

        <button
          onClick={handleClearAll}
          className="hover:cursor-pointer inline-flex w-full md:w-auto items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-primary hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors"
        >
          <Trash className="w-4 h-4 mr-2" /> Clear All
        </button>
      </div>

      <hr className="border-white/5" />

      {recentlyViewed.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {recentlyViewed.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-surface rounded-3xl border border-dashed border-white/10">
          <Eye size={64} className="mx-auto text-gray-600 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-2">Your recently viewed list is empty</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Movies you watch will appear here. Start exploring to find something great to watch.
          </p>
          <Link
            href="/"
            className="hover:cursor-pointer inline-flex items-center px-6 py-3 bg-primary hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors"
          >
            Explore Movies
          </Link>
        </div>
      )}
    </div>
  );
}

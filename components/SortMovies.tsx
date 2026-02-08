"use client";

import { Genre } from "@/types/tmdb";
import { ChevronDown, Filter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortMovies({ genres }: { genres: Genre[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleUpdateQuery = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-surface p-4 lg:p-6 rounded-2xl border border-white/5">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">
          Movies
        </h1>
        <p className="text-gray-400 text-xs md:text-sm">Discover the best movies</p>
      </div>

      <div className="flex flex-wrap lg:gap-4 gap-2">
        <div className="relative group">
          <Filter
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <select
            value={searchParams.get("id") || ""}
            onChange={(e) => handleUpdateQuery("id", e.target.value)}
            name="id"
            className="appearance-none bg-gray-950 border border-white/10 text-white text-sm lg:text-base py-2.5 pl-10 pr-10 rounded-xl focus:outline-none focus:border-primary cursor-pointer hover:bg-darker/80 transition-colors"
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>

        <div className="relative group">
          <select
            value={searchParams.get("sortBy") || "popularity.desc"}
            onChange={(e) => handleUpdateQuery("sortBy", e.target.value)}
            name="sortBy"
            className="appearance-none bg-gray-950 border border-white/10 text-white text-sm lg:text-base py-2.5 px-4 pr-10 rounded-xl focus:outline-none focus:border-primary cursor-pointer hover:bg-darker/80 transition-colors"
          >
            <option value="popularity.desc">Most Popular</option>
            <option value="vote_average.desc">Top Rated</option>
            <option value="release_date.desc">Newest Releases</option>
            <option value="original_title.asc">A-Z</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

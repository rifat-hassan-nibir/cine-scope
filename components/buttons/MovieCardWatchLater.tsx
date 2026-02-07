"use client";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "@/services/localStorage";
import { Movie } from "@/types/tmdb";
import { Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function MovieCardWatchLater({
  movie,
  setWatchList,
}: {
  movie: Movie;
  setWatchList?: (movies: Movie[]) => void;
}) {
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const watchLaterMovies = getFromLocalStorage("watchLater");
    setIsWatchLater(watchLaterMovies.some((item: Movie) => item.id === movie.id));
  }, [movie.id]);

  const handleWatchLater = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWatchLater) {
      removeFromLocalStorage("watchLater", movie.id);
      setIsWatchLater(false);
      const newWatchList = getFromLocalStorage("watchLater");
      setWatchList?.(newWatchList);
    } else {
      saveToLocalStorage("watchLater", movie);
      setIsWatchLater(true);
      const newWatchList = getFromLocalStorage("watchLater");
      setWatchList?.(newWatchList);
    }
  };

  return (
    <button
      onClick={handleWatchLater}
      className={`hover:cursor-pointer w-full py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors ${isWatchLater ? "bg-primary backdrop-blur text-white hover:bg-primary/80" : "bg-white/20 backdrop-blur text-white hover:bg-white/30"}`}
    >
      {isWatchLater ? (
        <>
          <Check size={14} /> Added
        </>
      ) : (
        <>
          <Plus size={14} /> Add to Watch Later
        </>
      )}
    </button>
  );
}

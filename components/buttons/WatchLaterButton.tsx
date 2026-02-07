"use client";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "@/services/localStorage";
import { MovieDetails } from "@/types/tmdb";
import { Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function WatchLaterButton({ movie }: { movie: MovieDetails }) {
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const watchLaterMovies = getFromLocalStorage("watchLater");
    setIsWatchLater(watchLaterMovies.some((m: any) => m.id === movie.id));
  }, [movie.id]);

  const handleToggle = () => {
    if (isWatchLater) {
      removeFromLocalStorage("watchLater", movie.id);
      setIsWatchLater(false);
    } else {
      saveToLocalStorage("watchLater", movie);
      setIsWatchLater(true);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`hover:cursor-pointer w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${
        isWatchLater
          ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25"
          : "bg-primary hover:bg-rose-700 shadow-primary/25"
      } text-white shadow-lg`}
    >
      {isWatchLater ? (
        <>
          <Check size={20} /> Added to Watch Later
        </>
      ) : (
        <>
          <Plus size={20} /> Add to Watch Later
        </>
      )}
    </button>
  );
}

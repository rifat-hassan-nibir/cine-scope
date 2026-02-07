"use client";

import { useRouter } from "next/navigation";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-2xl font-bold text-white mb-2">Something went wrong!</h1>
      <p className="text-zinc-400 mb-8 max-w-sm">
        {error.message || "An unexpected error occurred. Please try again or return home."}
      </p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium border-0 hover:cursor-pointer"
        >
          Try Again
        </button>

        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-700 hover:text-white transition-colors font-medium border-0 hover:cursor-pointer"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

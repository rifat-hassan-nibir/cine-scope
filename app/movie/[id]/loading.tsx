import { MovieCardSkeleton, Skeleton } from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="mt-8 lg:mt-12 space-y-12 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12">
        {/* Poster Section Skeleton */}
        <div className="space-y-6">
          <Skeleton className="aspect-2/3 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>

        {/* Info Section Skeleton */}
        <div className="space-y-8 py-4">
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <div className="flex gap-4">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>

          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-8 w-32" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>

          <div className="space-y-3">
            <Skeleton className="h-8 w-32" />
            <div className="flex gap-4 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <Skeleton className="h-3 w-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-800/50" />

      {/* Similar Movies Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

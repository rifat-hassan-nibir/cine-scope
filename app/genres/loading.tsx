import { MovieCardSkeleton, Skeleton } from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      {/* SortMovies Skeleton */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Skeleton className="h-12 w-full md:w-64" />
        <Skeleton className="h-12 w-full md:w-64" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(10)].map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

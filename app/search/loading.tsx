import { MovieCardSkeleton, Skeleton } from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex items-center gap-4">
        <Skeleton className="h-8 w-1 border-l-4 border-primary" />
        <Skeleton className="h-10 w-64" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(10)].map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

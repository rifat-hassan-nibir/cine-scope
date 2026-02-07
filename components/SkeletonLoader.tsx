export function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-white/5 ${className || ""}`} />;
}

export function MovieCardSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="aspect-2/3 w-full rounded-xl" />
      <div className="space-y-2 px-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}

export function MovieSectionSkeleton({ count = 5 }: { count?: number }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-1 border-l-4 border-primary" />
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="h-6 w-24" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(count)].map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

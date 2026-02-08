export function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-white/5 ${className || ""}`} />;
}

export function MovieCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 group relative rounded-xl overflow-hidden bg-white/5">
      <div className="aspect-2/3 w-full relative">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end gap-2">
          <div className="flex gap-2">
            <Skeleton className="h-3 w-10 md:h-4" />
            <Skeleton className="h-3 w-10 md:h-4" />
          </div>
          <Skeleton className="h-4 w-full md:h-5 " />
          <Skeleton className="h-8 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export function MovieSectionSkeleton({ count = 5 }: { count?: number }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 md:h-8 w-1 border-l-4 border-primary" />
          <Skeleton className="h-6 md:h-8 w-32 md:w-48" />
        </div>
        <Skeleton className="h-4 md:h-6 w-20 md:w-24" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {[...Array(count)].map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

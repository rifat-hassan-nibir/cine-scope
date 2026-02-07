import { MovieSectionSkeleton } from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="flex flex-col gap-16">
      <MovieSectionSkeleton count={10} />
      <MovieSectionSkeleton count={5} />
      <MovieSectionSkeleton count={5} />
      <MovieSectionSkeleton count={5} />
    </div>
  );
}

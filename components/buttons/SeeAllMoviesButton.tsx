import { ChevronRight } from "lucide-react";
import Form from "next/form";

export default function SeeAllMoviesButton({ genre }: { genre: string | number }) {
  return (
    <Form action={`/genres`}>
      <input type="hidden" name="id" value={genre} />
      <button className="flex items-center gap-2 text-sm md:text-base text-primary hover:underline hover:cursor-pointer transition-colors font-medium">
        See All <ChevronRight size={20} />
      </button>
    </Form>
  );
}

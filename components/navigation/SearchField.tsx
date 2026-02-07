import { Search } from "lucide-react";
import Form from "next/form";

export default function SearchField() {
  return (
    <div className="mb-6 bg-gray-900 rounded-lg">
      <Form action="/search" className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          className="w-full bg-darker text-sm text-white pl-10 pr-4 py-2.5 rounded-lg border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
        />
      </Form>
    </div>
  );
}

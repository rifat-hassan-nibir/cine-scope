"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationButtonProps {
  currentPage: number;
  totalPages?: number;
}

export default function PaginationButton({ currentPage, totalPages }: PaginationButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-2 md:mt-4 lg:mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="hover:cursor-pointer bg-secondary hover:bg-primary text-white rounded-lg px-3 py-2 transition-colors duration-200 ease-in disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowLeft className="lg:size-6 size-5" />
      </button>

      {(() => {
        const endPage = Math.max(3, currentPage);
        const startPage = Math.max(1, endPage - 2);

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
          if (totalPages && i > totalPages) break;
          pages.push(i);
        }

        return pages.map((page) => (
          <button
            key={page}
            className={`hover:cursor-pointer px-4 py-1.5 lg:px-5 lg:py-2 rounded-lg transition-colors duration-200 ease-in ${
              page === currentPage
                ? "bg-primary text-white"
                : "bg-secondary hover:bg-primary text-white"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ));
      })()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={totalPages ? currentPage >= totalPages : false}
        className="hover:cursor-pointer bg-secondary hover:bg-primary text-white rounded-lg px-3 py-2 transition-colors duration-200 ease-in disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowRight className="lg:size-6 size-5" />
      </button>
    </div>
  );
}

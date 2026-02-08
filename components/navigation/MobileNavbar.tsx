"use client";

import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SearchField from "./SearchField";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-800 border-b border-gray-700 h-16 px-4 flex items-center justify-between">
        <Link href="/" className="text-primary text-2xl font-bold font-outfit tracking-tight">
          Cine Scope
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="hover:cursor-pointer p-2 text-gray-400 hover:text-white"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Slide-over Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Content - Matching DesktopNav Styling */}
        <aside
          className={`absolute top-0 right-0 w-64 h-full bg-gray-800 p-2 shadow-xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-4 p-3">
            <span className="text-primary text-2xl font-bold font-outfit tracking-tight">
              Cine Scope
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:cursor-pointer p-1 text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <SearchField />

          <ul>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === pathname;
              return (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 py-3 px-4 mt-2 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold border-r-2 border-r-primary"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        size={20}
                        className={`transition-colors duration-200 ${
                          isActive ? "text-primary" : "text-gray-500 group-hover:text-white"
                        }`}
                      />
                    )}
                    <span>{link.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
}

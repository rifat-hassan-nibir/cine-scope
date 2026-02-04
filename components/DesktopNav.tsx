"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col p-2 w-64 h-screen bg-gray-800 border-r border-r-gray-800">
      <div>
        {/* logo */}
        <p className="text-primary text-3xl font-bold pb-5 font-outfit tracking-tight p-3">
          Cine Scope
        </p>
        {/* nav links */}
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
      </div>
    </nav>
  );
}

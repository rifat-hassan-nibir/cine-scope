import DesktopNav from "@/components/DesktopNav";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Cine Scope",
  description: "Browse your favorite movies and series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-gray-900 text-white`}
      >
        <div className="flex">
          {/* desktop nav */}
          <DesktopNav />
          <main className="h-screen flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

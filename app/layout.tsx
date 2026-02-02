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
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-gray-950 text-white`}
      >
        <div className="flex">
          {/* desktop nav */}
          <DesktopNav />
          <div className="h-screen flex-1 p-5">{children}</div>
        </div>
      </body>
    </html>
  );
}

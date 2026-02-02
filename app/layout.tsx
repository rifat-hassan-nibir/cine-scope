import type { Metadata } from "next";
import "./globals.css";
import DesktopNav from "@/components/DesktopNav";

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
      <body className={`antialiased`}>
        <div className="flex">
          {/* desktop nav */}
          <DesktopNav />
          <div className="h-screen flex-1 p-5">{children}</div>
        </div>
      </body>
    </html>
  );
}

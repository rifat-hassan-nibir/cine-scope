import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

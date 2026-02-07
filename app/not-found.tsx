import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="text-lg text-muted-foreground">The page you are looking for does not exist.</p>
      <Link href="/" className="text-primary hover:underline">
        Go back to home
      </Link>
    </div>
  );
}

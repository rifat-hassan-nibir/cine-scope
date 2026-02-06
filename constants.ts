import { Home, Eye, Film } from "lucide-react";

export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const navLinks = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Genres",
    href: "/genres",
    icon: Film,
  },
  {
    title: "Watchlist",
    href: "/watchlist",
    icon: Eye,
  },
];

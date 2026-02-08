# 🎬 CineScope

CineScope is a premium, high-performance movie discovery platform built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS 4**. It offers a cinematic experience for exploring trending titles, deep-diving into movie details, and managing a personal watchlist, all while maintaining a smooth and responsive interface.

Live Link: [cine-scope-nibir.vercel.app](https://cine-scope-nibir.vercel.app)

## ✨ Features

- **Dynamic Movie Discovery**: Browse top-rated movies and explore a rich variety of genres with deep-linked navigation.
- **Detailed Insights**: View comprehensive movie details, including cast information, runtime, release dates, and high-quality posters.
- **Similar Recommendations**: Discover new favorites with a built-in recommendation engine for every movie.
- **Advanced Search**: Real-time search functionality integrated directly into the navigation for instant access to the TMDB database.
- **Watch Later & History**: Save movies to your personal watchlist and keep track of your recently viewed films, powered by persistent local storage.
- **Responsive Navigation**: A dual-nav system featuring a sleek **Desktop Sidebar** and a **Mobile Hamburger Toggle** for a seamless across-device experience.
- **Premium UI/UX**:
  - **Fluid Typography**: Auto-scaling font sizes for perfect readability on any device.
  - **Skeleton Loaders**: Custom shimmering loading states that match the layout for a perceived performance boost.
  - **Glassmorphism**: Subtle blur effects and premium dark-mode aesthetics.
  - **Micro-interactions**: Hover effects, smooth transitions, and intuitive toggle buttons.

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Source**: [TMDB API](https://www.themoviedb.org/documentation/api)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or later
- npm, pnpm, or yarn
- A TMDB API Access Token (Bearer Token)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rifat-hassan-nibir/cine-scope
   cd cine-scope
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your TMDB credentials:

   ```env
   TMDB_BASE_URL=https://api.themoviedb.org/3
   TMDB_ACCESS_TOKEN=your_tmdb_bearer_token_here
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open the application**:
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
├── app/               # Next.js App Router (Pages, Layouts, API Config, CSS)
├── components/        # UI Component Library
│   ├── buttons/       # Functional buttons (Watch Later, See All)
│   ├── navigation/    # Responsive Nav systems (Desktop & Mobile)
│   ├── MovieCard.tsx  # Core movie item component
│   ├── PageTitle.tsx  # Dynamic page header component
│   └── EmptyList.tsx  # Reusable empty state component
├── services/          # Business logic & API abstraction layers
├── types/             # Centralized TypeScript definitions
├── constants.ts       # Global config and navigation paths
└── README.md          # Project documentation
```

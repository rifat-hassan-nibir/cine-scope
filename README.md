# 🎬 CineScope

CineScope is a premium movie discovery platform built with **Next.js 16**, **React 19**, and **Tailwind CSS**. It provides a seamless experience for exploring blockbusters, trending movies, and discovering deep cinematic details using the TMDB API.

Live Link: https://cine-scope-nibir.vercel.app

## ✨ Features

- **Dynamic Movie Discovery**: Explore top-rated movies and browse by a wide variety of genres.
- **Detailed Insights**: Get comprehensive information about movies, including cast details, ratings, and similar recommendations.
- **Advanced Search**: Real-time movie searching with optimized API interactions.
- **Watch Later**: Save your favorite movies to a dedicated watch list (powered by local storage).
- **Recently Viewed**: Keep track of the movies you've explored recently.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Premium UX**: Smooth transitions, custom scrollbars, and cinematic dark mode aesthetics.
- **Robust Error Handling**: Customized error boundaries and 404 pages for a resilient user experience.

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
- npm or yarn
- A TMDB API Access Token

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
   Create a `.env` file in the root directory and add the following:

   ```env
   TMDB_BASE_URL=https://api.themoviedb.org/3
   TMDB_ACCESS_TOKEN=your_tmdb_bearer_token_here
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
├── app/               # Next.js App Router (Pages, Layouts, CSS)
├── components/        # Reusable UI components
├── services/          # API service layers (TMDB interactions)
├── types/             # TypeScript interfaces and types
├── public/            # Static assets
└── constants.ts       # Global constants and navigation config
```

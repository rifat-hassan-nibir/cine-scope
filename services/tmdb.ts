import {
  CastDetails,
  Genre,
  GenreResponse,
  Movie,
  MovieDetails,
  MovieResponse,
  MovieSortOption,
} from "@/types/tmdb";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  },
};

// get top rated movies
export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`,
    getOptions,
  );
  const data: MovieResponse = await res.json();
  return data.results;
};

// get popular movies by genres
export const getMoviesData = async (
  genreId?: number,
  sortBy: MovieSortOption = "popularity.desc",
  page: number = 1,
): Promise<Movie[]> => {
  const params = new URLSearchParams({
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: page.toString(),
    sort_by: sortBy,
  });

  if (genreId && !isNaN(genreId)) {
    params.append("with_genres", genreId.toString());
  }

  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/discover/movie?${params.toString()}`,
    getOptions,
  );
  const data: MovieResponse = await res.json();
  return data.results || [];
};

// get all genre id
export const getAllGenres = async (): Promise<Genre[]> => {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/genre/movie/list?language=en-US`,
    getOptions,
  );
  const data: GenreResponse = await res.json();
  return data.genres;
};

// get movie details
export const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/${movieId}`, getOptions);
  const data: MovieDetails = await res.json();
  return data;
};

// get movie cast details
export const getMovieCastDetails = async (movieId: number): Promise<CastDetails> => {
  const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/${movieId}/credits`, getOptions);
  const data: CastDetails = await res.json();
  return data;
};

// get similar movies
export const getSimilarMovies = async (movieId: number): Promise<Movie[]> => {
  const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/${movieId}/similar`, getOptions);
  const data: MovieResponse = await res.json();
  return data.results || [];
};

// search movies
export const searchMovies = async (query: string): Promise<Movie[]> => {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
    getOptions,
  );
  const data: MovieResponse = await res.json();
  return data.results || [];
};

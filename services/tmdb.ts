// get top rated movies
export const getTopRatedMovies = async () => {
  const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  return data.results;
};

// get popular movies by genres
export const getMoviesData = async (
  genreId?: number,
  sortBy: string = "popularity.desc",
  page: number = 1,
) => {
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

  const res = await fetch(`${process.env.TMDB_BASE_URL}/discover/movie?${params.toString()}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  return data.results || [];
};

// get all genre id
export const getAllGenres = async () => {
  const res = await fetch(`${process.env.TMDB_BASE_URL}/genre/movie/list?language=en-US`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  return data.genres;
};

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

export const getPopularMoviesByGenres = async (genreId: number) => {
  const res = await fetch(
    `${process.env.TMDB_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      },
    },
  );
  const data = await res.json();
  return data.results;
};

export const getAllGenreId = async () => {
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

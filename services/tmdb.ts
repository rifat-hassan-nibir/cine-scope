export const getTopRatedMovies = async () => {
  const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
};

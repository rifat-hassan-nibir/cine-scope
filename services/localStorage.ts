// Save to Local Storage
export const saveToLocalStorage = (key: string, value: any) => {
  if (typeof window === "undefined") return;

  const storedMovies = getFromLocalStorage(key);
  if (storedMovies.some((movie: any) => movie.id === value.id)) {
    return;
  }

  localStorage.setItem(key, JSON.stringify([...storedMovies, value]));
};

// Get from Local Storage
export const getFromLocalStorage = (key: string) => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem(key) || "[]");
};

// Remove from Local Storage
export const removeFromLocalStorage = (key: string, id: number) => {
  if (typeof window === "undefined") return;

  const storedMovies = getFromLocalStorage(key);
  const updatedMovies = storedMovies.filter((movie: any) => movie.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedMovies));
};

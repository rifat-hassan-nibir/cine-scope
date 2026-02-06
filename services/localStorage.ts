// Save to Local Storage
export const saveToLocalStorage = (key: string, value: any) => {
  const storedMovies = getFromLocalStorage(key);
  if (storedMovies.some((movie: any) => movie.id === value.id)) {
    return;
  }

  localStorage.setItem(key, JSON.stringify([...storedMovies, value]));
};

// Get from Local Storage
export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

// Remove from Local Storage
export const removeFromLocalStorage = (key: string, id: number) => {
  const storedMovies = getFromLocalStorage(key);
  const updatedMovies = storedMovies.filter((movie: any) => movie.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedMovies));
};

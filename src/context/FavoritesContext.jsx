import { createContext, useState } from "react";


export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

 const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");

  return savedFavorites
    ? JSON.parse(savedFavorites)
    : [];
});

  const addFavorite = (movie) => {
  setFavorites((prev) => {
    const updatedFavorites = [...prev, movie];

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    return updatedFavorites;
  });
};

 const removeFavorite = (id) => {
  setFavorites((prev) => {
    const updatedFavorites = prev.filter(
      (movie) => movie.id !== id
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    return updatedFavorites;
  });
};

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
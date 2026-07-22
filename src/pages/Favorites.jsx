
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/movie/movieDetails/MovieCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">
        ❤️ Favorites
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.map((movie) => (
          <MovieCard 
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}

export default Favorites;
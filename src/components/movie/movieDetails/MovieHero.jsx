import { useState } from "react";
import { useContext } from "react";
import { FavoritesContext } from "../../../context/FavoritesContext";

function MovieHero({ movie }) {
  const BACKDROP_URL = "https://image.tmdb.org/t/p/original";
  const POSTER_URL = "https://image.tmdb.org/t/p/w500";

  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const [isExpanded, setIsExpanded] = useState(false);
  const releaseYear = movie.release_date?.slice(0, 4);
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  const isFavorite = favorites.some(
  (fav) => fav.id === movie.id
);

  return (
    <section
      className="relative h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">

        {/* Poster */}
        <div className="flex-shrink-0">
          <img
            src={`${POSTER_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-56 rounded-xl shadow-2xl"
          />
        </div>

        {/* Movie Info */}
        <div className="ml-10 max-w-3xl">

          {/* Rating */}
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
            ⭐ {movie.vote_average.toFixed(1)} / 10
          </h2>

          {/* Title */}
          <h1 className="text-6xl font-bold text-white leading-tight">
            {movie.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-gray-300 text-lg mt-4">
            <span>{releaseYear}</span>
            <span>•</span>
            <span>{hours}h {minutes}m</span>
            <span>•</span>
            <span>{movie.original_language.toUpperCase()}</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-3 mt-6">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className={`mt-6 text-gray-300 text-lg ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
            {movie.overview}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition-colors duration-300"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>

        <button
            onClick={() =>
              isFavorite
                ? removeFavorite(movie.id)
                : addFavorite(movie)
            }
            className={`mt-4 ml-4 px-6 py-2 text-black font-semibold rounded-full transition-colors duration-300 ${
              isFavorite
                ? "bg-purple-500 hover:bg-purple-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isFavorite ? "💜 Saved" : "❤️ Add Favorite"}
          </button>
        </div>

      </div>
    </section>
  );
}

export default MovieHero;
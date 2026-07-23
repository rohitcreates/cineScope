import { useState, useEffect, useRef, useContext } from "react";
import { FavoritesContext } from "../../../context/FavoritesContext";
import { Link } from "react-router-dom";

function MovieHero({ movie }) {
  const BACKDROP_URL = "https://image.tmdb.org/t/p/original";
  const POSTER_URL = "https://image.tmdb.org/t/p/w500";

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const overviewRef = useRef();

  const releaseYear = movie.release_date?.slice(0, 4);
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  const isFavorite = favorites.some(
    (fav) => fav.id === movie.id
  );


  useEffect(() => {

    function handleClickOutside(event) {

      if (
        overviewRef.current &&
        !overviewRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }

    }


    function handleEscape(event) {

      if (event.key === "Escape") {
        setIsExpanded(false);
      }

    }


    if (isExpanded) {

      document.addEventListener(
        "mousedown",
        handleClickOutside
      );

      document.addEventListener(
        "keydown",
        handleEscape
      );

    }


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, [isExpanded]);


  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />


      <div className="relative z-10 min-h-[80vh] max-w-7xl mx-auto px-6 flex items-center py-10">


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


          <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
            ⭐ {movie.vote_average.toFixed(1)} / 10
          </h2>



          <h1 className="text-5xl font-bold text-white leading-tight">
            {movie.title}
          </h1>



          <div className="flex items-center gap-4 text-gray-300 text-lg mt-4">

            <span>{releaseYear}</span>
            <span>•</span>
            <span>
              {hours}h {minutes}m
            </span>
            <span>•</span>
            <span>
              {movie.original_language.toUpperCase()}
            </span>

          </div>



          <div className="flex flex-wrap gap-3 mt-6">

            {movie.genres.map((genre) => (

              <Link
                key={genre.id}
                to={`/genre/${genre.id}/${genre.name}`}
                className="
                  px-4 py-1
                  rounded-full
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  text-sm
                  hover:bg-yellow-500
                  hover:text-black
                  transition
                "
              >
                {genre.name}
              </Link>

            ))}

          </div>



          <div ref={overviewRef}>

  <p
    className={`
      mt-6 
      text-gray-300 
      text-lg
      ${
        isExpanded
          ? "line-clamp-none"
          : "line-clamp-3"
      }
    `}
  >
    {movie.overview}
  </p>


  <div className="flex items-center gap-4 mt-4">

    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className="
        px-6 
        py-2 
        bg-yellow-500 
        hover:bg-yellow-600 
        text-black 
        font-semibold 
        rounded-full
      "
    >
      {isExpanded ? "Show Less" : "Show More"}
    </button>


    <button
      onClick={() =>
        isFavorite
          ? removeFavorite(movie.id)
          : addFavorite(movie)
      }
      className={`
        px-6
        py-2
        text-black
        font-semibold
        rounded-full
        ${
          isFavorite
            ? "bg-purple-500"
            : "bg-red-500"
        }
      `}
    >
      {isFavorite ? "💜 Saved" : "❤️ Add Favorite"}
    </button>

  </div>

</div>
          

        </div>

      </div>

    </section>
  );
}

export default MovieHero;
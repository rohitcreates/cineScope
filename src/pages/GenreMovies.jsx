import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../services/api";
import MovieCard from "../components/movie/movieDetails/MovieCard";

function GenreMovies() {
  const { id, name } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchGenreMovies() {
      const data = await getMoviesByGenre(id);
      setMovies(data);
    }

    fetchGenreMovies();
  }, [id]);


  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-white mb-8">
        {name} Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </section>
  );
}

export default GenreMovies;
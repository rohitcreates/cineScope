import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { searchMovies } from "../services/api";
import MovieCard from "../components/movie/movieDetails/MovieCard";
import Loading from "../components/common/Loading";


function Search() {

  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    async function fetchMovies() {

      if (!query) return;

      try {

        setLoading(true);

        const data = await searchMovies(query);

        setMovies(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    fetchMovies();

  }, [query]);



  if (loading) {
    return <Loading />;
  }


  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-white mb-8">
        Search Results for "{query}"
      </h1>


      {
        movies.length === 0 ? (

          <p className="text-gray-400">
            No movies found.
          </p>

        ) : (

          <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-8
          ">

            {movies.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))}

          </div>

        )
      }

    </section>
  );
}


export default Search;
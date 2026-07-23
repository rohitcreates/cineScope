import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Hero from "../components/hero/Hero";
import TrendingMovies from "../components/movie/TrendingMovies";
import MovieCard from "../components/movie/movieDetails/MovieCard";
import { searchMovies, getTrendingMovies } from "../services/api";
import Loading from "../components/common/Loading";


function Home() {

  const [searchResults, setSearchResults] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [searchLoading, setSearchLoading] = useState(false);
  const [trendingLoading, setTrendingLoading] = useState(false);

  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search");


  async function handleSearch(query = searchText) {

    if (query.trim() === "") {
      return;
    }

    try {
      setError(null);
      setSearchLoading(true);
      setHasSearched(true);
      setSearchResults([]);

      const movieData = await searchMovies(query);

      setSearchResults(movieData);

    } catch (error) {

      setError(
        "Failed to fetch search results. Please try again later."
      );

    } finally {

      setSearchLoading(false);

    }
  }


  async function loadTrendingMovies() {

    try {

      setTrendingLoading(true);

      const movieData = await getTrendingMovies();

      setTrendingMovies(movieData);

    } catch (error) {

      setError("Failed to load trending movies.");

    } finally {

      setTrendingLoading(false);

    }
  }


  useEffect(() => {

    loadTrendingMovies();

  }, []);


  // Navbar search trigger
  useEffect(() => {

    if (searchQuery) {

      setSearchText(searchQuery);
      handleSearch(searchQuery);

    }

  }, [searchQuery]);


  return (

    <div>

      <Hero
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />


      {error && (
        <p className="text-center text-red-400 py-5">
          {error}
        </p>
      )}


      {
        searchLoading || trendingLoading ? (

          <Loading />

        ) : (

          <>

            {searchResults.length > 0 && (

              <section className="max-w-7xl mx-auto px-6 py-10">

                <h2 className="text-3xl font-bold text-white mb-6">
                  🔍 Search Results
                </h2>


                <div
                  className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    lg:grid-cols-5
                    gap-8
                  "
                >

                  {searchResults.map((movie) => (

                    <MovieCard
                      key={movie.id}
                      movie={movie}
                    />

                  ))}

                </div>

              </section>

            )}



            {hasSearched &&
              !searchLoading &&
              searchResults.length === 0 && (

              <p className="text-center text-gray-500 py-10">
                No movies found. Try another search.
              </p>

            )}



            <TrendingMovies movies={trendingMovies} />

          </>

        )

      }

    </div>

  );
}


export default Home;
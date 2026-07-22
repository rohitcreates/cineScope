import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import SearchBar from "../components/hero/SearchBar";
import MovieCard from "../components/movie/movieDetails/MovieCard";
import { searchMovies,getTrendingMovies } from "../services/api";
import Loading from "../components/common/Loading";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null); 
  

  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (searchText.trim() === "") {
        return;
    }

    try {
      setLoading(true);
      const movieData = await searchMovies(searchText);
      setMovies(movieData);
      
    } catch (error) {
      setError("Failed to fetch search results. Please try again later.");
      
    }
    finally {
      setLoading(false);
    }
}

  async function loadTrendingMovies() {
    setLoading(true);
    const movieData = await getTrendingMovies();
    console.log(movieData);
    setMovies(movieData);
    setLoading(false);
   
}

useEffect(() => {
    loadTrendingMovies();
}, []);

  return (
    <div>
      <Navbar />
      <Hero
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />

{
  loading ? (
    <Loading />
  ) : (
    movies.length === 0 ? (
      <p className="text-center text-gray-500">No movies found. Try another search.</p>
    ) : (
      // Your existing movie grid
     <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        lg:grid-cols-5 
        gap-8
        overflow-visible
      ">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
    )
  )
}
    </div>
  );
}

export default Home;
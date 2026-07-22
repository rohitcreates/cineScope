import {getSimilarMovies} from "../../../services/api";
import { useState, useEffect } from "react";
import MovieCard from "../movieDetails/MovieCard";

function SimilarMovies({ movieId }) {
    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {
        const fetchSimilarMovies = async () => {
            const movies = await getSimilarMovies(movieId);
            setSimilarMovies(movies);
        };

        

        fetchSimilarMovies();
    }, [movieId]);


    return (
        <section className="similar-movies max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>
            <div className="flex gap-5 overflow-x-auto overflow-y-visible py-10 pb-20 no-scrollbar">
        {similarMovies.slice(0, 20).map((movie) => (
           <div key={movie.id} className="min-w-[180px]">
      <MovieCard movie={movie} />
    </div>
        ))}
      </div>
        </section>
    );
}

export default SimilarMovies;
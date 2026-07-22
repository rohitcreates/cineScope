import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import MovieHero from "../components/movie/movieDetails/MovieHero";
import MovieTrailer from "../components/movie/movieDetails/MovieTrailer";
import MovieCast from "../components/movie/movieDetails/MovieCast";
import SimilarMovies from "../components/movie/movieDetails/SimilarMovies";


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await getMovieDetails(id);
      setMovie(movieData);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MovieHero movie={movie} />
      <MovieTrailer movieId={id} />
      <MovieCast movieId={id} />
      <SimilarMovies movieId={id} />
    </>
  );
}

export default MovieDetails;
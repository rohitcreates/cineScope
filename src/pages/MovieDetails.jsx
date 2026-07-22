import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import MovieHero from "../components/movie/movieDetails/MovieHero";
import MovieTrailer from "../components/movie/movieDetails/MovieTrailer";
import MovieCast from "../components/movie/movieDetails/MovieCast";
import SimilarMovies from "../components/movie/movieDetails/SimilarMovies";
import Loading from "../components/common/Loading";
import ErrorMessage from "../components/common/ErrorMessage";


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
        setError(null);
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError("Failed to fetch movie details. Please try again later.");
      }
    };
    

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!movie) {
  return <Loading />;
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
import {getMovieCast} from "../../../services/api";
import { useState, useEffect } from "react";
import ActorCard from "./ActorCard";


function MovieCast({ movieId }) {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true); 

    useEffect(() => {
      const fetchCast = async () => {
  setLoading(true);

  try {
    const castData = await getMovieCast(movieId);
    setCast(castData);
  } catch (error) {
    console.error(error);
   
  } finally {
    setLoading(false);
  }
};

      fetchCast();
    }, [movieId]);

  if (loading) {
    return <div>Loading cast...</div>;
  }

  return (
    <section className="movie-cast max-w-7xl mx-auto px-6 py-12 ">
      <h2  className="text-3xl font-bold mb-6">Cast</h2>
      <div className="flex gap-4 overflow-x-auto pb-5 no-scrollbar">
        {cast.slice(0, 10).map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </section>
  );
}

export default MovieCast;
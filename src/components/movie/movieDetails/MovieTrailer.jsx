import { useEffect, useState } from "react";
import {getMovieVideos} from "../../../services/api";




function MovieTrailer({ movieId }) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchMovieVideos = async () => {
      const videoData = await getMovieVideos(movieId);
      setVideos(videoData);
      setLoading(false);
    };

    fetchMovieVideos();
  }, [movieId]);

  const trailer = videos.find(
  video =>
    video.type === "Trailer" &&
    video.site === "YouTube"
);

if (loading) {
    return (
        <section>
            <h2>Trailer</h2>
            <p>Loading...</p>
        </section>
    );
}

if (!trailer) {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-6">🎬 Official Trailer</h2>
        <p className="text-gray-400">No trailer available.</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
       <h2 className="text-3xl font-bold mb-6 ">
    🎬 Official Trailer
    </h2>

        <div className="overflow-hidden rounded-2xl shadow-2xl">
         
          <iframe
            className="w-full aspect-video"

        
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      
       
      
    </section>
  );
}

export default MovieTrailer;
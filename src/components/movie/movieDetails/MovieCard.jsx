import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const {
    id,
    title,
    vote_average,
    release_date,
    poster_path,
    original_language,
    overview,
  } = movie;

  const releaseYear = release_date?.slice(0, 4);

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/placeholder.png";

  return (
   <Link to={`/movie/${id}`} className="block">
  <div className="group relative">
      <div className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-3">

          <h2 className="text-xl font-bold text-white line-clamp-1">
            {title}
          </h2>

          <p className="inline-block mt-2 bg-yellow-400 text-black px-2 py-1 rounded-md text-sm font-bold">
            ⭐ {vote_average?.toFixed(1)}
          </p>

          <p className="text-gray-400 text-sm mt-2">
            {releaseYear || "N/A"} • {original_language?.toUpperCase()}
          </p>

        </div>

      </div>

 <div
className="
absolute
left-0
top-0
z-50
opacity-0
group-hover:opacity-100
pointer-events-none
group-hover:pointer-events-auto
transition-all
duration-300
w-72
bg-gray-900
rounded-xl
shadow-2xl
overflow-hidden
"
>
  <img
  src={imageUrl}
  alt={title}
  className="w-full h-80 object-cover"
/>

<div className="p-4">

  <h2 className="text-xl font-bold text-white">
    {title}
  </h2>

  <p className="text-yellow-400 mt-2">
    ⭐ {vote_average?.toFixed(1)}
  </p>

  <p className="text-gray-400 text-sm mt-2 line-clamp-3">
    {overview}
  </p>

</div>
</div>



    </div>
    </Link>
  );
}

export default MovieCard;
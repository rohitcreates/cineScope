import MovieCard from "./movieDetails/MovieCard";

function TrendingMovies({ movies }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold text-white mb-6">
        🔥 Trending Movies
      </h2>

      <div className="
        flex 
        gap-6 
        overflow-x-auto 
        pb-4 
        no-scrollbar
      ">
        {movies.slice(0, 20).map((movie) => (
          <div 
            key={movie.id}
            className="min-w-[180px]"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default TrendingMovies;
import SearchBar from "./searchBar";

function Hero({ searchText, setSearchText, handleSearch }) {
  return (
    <section className="min-h-[70vh] bg-gray-950 flex items-center justify-center">
      <div className="text-center px-6 max-w-3xl mx-auto">
        
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Discover Your Next Favorite Movie
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Search thousands of movies from around the world.
        </p>
<SearchBar
  searchText={searchText}
  setSearchText={setSearchText}
  handleSearch={handleSearch}
/>
      </div>
    </section>
  );
}

export default Hero;
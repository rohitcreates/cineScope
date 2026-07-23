import react from 'react';


  // Create state for search text
  function SearchBar({ searchText, setSearchText,handleSearch }) {

  return (
    <div className="max-w-[600px] mx-auto mt-8 px-4">
      <div className="flex items-center bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden focus-within:border-blue-500 transition-all">
        
    
        <input
          type="text"
          placeholder="🔍 Search movies..."
          className="flex-1 bg-transparent text-white placeholder-gray-500 px-6 py-4 outline-none text-lg"
          value={searchText}                    // Controlled Input
          onChange={(e) => setSearchText(e.target.value)}   
          onKeyDown={(event) => {
            if (event.key === "Enter") {
    handleSearch();
}

}}
        />

        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-medium transition-colors hover:-shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

     
      
    </div>
  );
}

export default SearchBar;
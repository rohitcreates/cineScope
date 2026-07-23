import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavbarSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?query=${query}`);

    setQuery("");
    setOpen(false);
  }

  return (
    <div className="flex items-center">

      {open && (
        <form onSubmit={handleSearch}>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="
              bg-gray-900
              text-white
              px-4
              py-2
              rounded-lg
              border
              border-gray-700
              outline-none
              w-64
            "
          />
        </form>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="text-2xl ml-3"
      >
        🔍
      </button>

    </div>
  );
}

export default NavbarSearch;
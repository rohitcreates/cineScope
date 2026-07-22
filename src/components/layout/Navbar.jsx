import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black py-4 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        
        
        <div className="flex items-center gap-2">
          <span className="text-3xl">🎬</span>
          <h1 className="text-white text-2xl font-bold">CineScope</h1>
        </div>

      
        <div className="flex items-center gap-2 bg-gray-900 px-5 py-2 rounded-xl border border-gray-700 hover:border-red-500 transition-colors cursor-pointer">
          <Link to="/favorites">
            <button>
              ❤️ Favorites
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
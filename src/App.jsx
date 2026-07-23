import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import GenreMovies from "./pages/GenreMovies";
import Layout from "./components/layout/Layout";
import Search from "./pages/Search";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
       <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route 
            path="/genre/:id/:name" 
            element={<GenreMovies />}
          />
          <Route 
            path="/search" 
            element={<Search />}
          />
        </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
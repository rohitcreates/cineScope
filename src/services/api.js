const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export async function searchMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return data.results;
}

export async function getMovieDetails(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return data;
}

export async function getTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return data.results;
}

export async function getMovieVideos(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return data.results;
}

export async function getMovieCast(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.cast;
}

export async function getSimilarMovies(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.results;
}

export async function getMoviesByGenre(genreId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genre movies");
  }

  const data = await response.json();

  return data.results;
}
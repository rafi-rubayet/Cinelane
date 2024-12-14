import { useEffect, useState, useContext } from "react";
import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";
import { LanguageContext } from "../context/index";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const { currentLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const fetchMovies = () => {
      const moviesData = getAllMovies(currentLanguage); // Fetch movies based on the current language
      setMovies(moviesData);
    };
    console.log(currentLanguage, "MovieListFetched")
    fetchMovies();
  }, [currentLanguage]);

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

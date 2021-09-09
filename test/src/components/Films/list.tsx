import React, { useEffect, useState } from "react";
import { getMovies, Movie } from "./FilmsService";
import FilmItem from "./FilmItem";
import { useHistory } from "react-router-dom";

export const List: React.FC = () => {
  const history = useHistory();
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = () => {
    const res = getMovies();
    const este = res.filter((movie) => movie.liked == true);
    console.log(res);
    console.log(este);
    setMovies(este);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="row">
      {movies.map((movie) => {
        return (
          <FilmItem movie={movie} key={movie._id} loadMovies={loadMovies} />
        );
      })}
    </div>
  );
};

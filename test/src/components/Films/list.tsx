import React, { useEffect, useState } from "react";
import { getMovies } from "./FilmsService";
import { Movie } from "./Film";
import FilmItem from "./FilmItem";
import { useHistory } from "react-router-dom";

export const List = () => {
  const history = useHistory();
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = () => {
    const movies = getMovies();
    const res = movies
      .map((movie) => {
        return {
          ...movie,
        };
      })
      .filter((movie) => movie.liked === true);
    setMovies(res);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="container p-4">
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <FilmItem
                  movie={movie}
                  key={movie._id}
                  loadMovies={loadMovies}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

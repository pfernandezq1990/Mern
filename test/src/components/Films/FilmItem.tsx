import React from "react";
import { Movie } from "./FilmsService";

interface Props {
  movie: Movie;
  loadMovies: () => void;
}

const FilmItem = ({ movie, loadMovies }: Props) => {
  const handleDelete = (id: string) => {};

  return (
    <div className="col-md-4 mb-3">
      <div className="card card-body video-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h1>{movie.title}</h1>
          <span
            className="text-danger"
            onClick={() => movie._id && handleDelete(movie._id)}
          >
            X
          </span>
        </div>
        <p>{movie.genre}</p>
      </div>
    </div>
  );
};

export default FilmItem;

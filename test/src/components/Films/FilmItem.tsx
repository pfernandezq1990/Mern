import React, { useState } from "react";
import { Movie } from "./Film";
import { getMovies } from "./FilmsService";

interface Props {
  movie: Movie;
  loadMovies: () => void;
}

const FilmItem = ({ movie, loadMovies }: Props) => {
  const [movies, setMovies] = useState<Movie[]>();

  const handleDelete = (id: string) => {
    const res = getMovies();
    res.find((movie) => movie._id === id);
    movie.liked = false;
    setMovies(res);
    console.log(res);
    console.log(movie);
    loadMovies();
  };

  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre?.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <button onClick={() => movie._id && handleDelete(movie._id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default FilmItem;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovie } from "../redux/movieSlice/movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  return (
    <div className="list">
      {movies.map((el) => (
        <div class="card">
          <div class="card__image-holder">
            <img class="card__image" src={el.posterurl} alt="wave" />
          </div>
          <div class="card-title">
            <a
              href="#"
              class="toggle-info btn"
              onClick={() => dispatch(deleteMovie(el.id))}
            >
              <span class="left"></span>
              <span class="right"></span>
            </a>
            <Link to={`/movie/${el.id}`}>update</Link>
            <h2>
              {el.name}
              <small>{el.description.slice(0, 80)}...</small>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

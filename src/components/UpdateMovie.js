import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateMovie } from "../redux/movieSlice/movieSlice";

const UpdateMovie = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const movies = useSelector((state) => state.movie.movies);
  console.log(movies);
  const moviee = movies.filter((el) => el.id == params.id)[0];
  console.log(moviee);
  const [movie, setmovie] = useState({});
  useEffect(() => {
    setmovie({ ...moviee });
  }, [params.id]);

  return (
    <div>
      <div class="container">
        <form id="contact" action="" method="post">
          <h3>update movie</h3>
          <h4></h4>
          <fieldset>
            <input
              placeholder={moviee.name}
              type="text"
              tabindex="1"
              required
              autofocus
              onChange={(e) => setmovie({ ...movie, name: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder={moviee.description}
              type="text"
              tabindex="2"
              required
              onChange={(e) =>
                setmovie({ ...movie, description: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <input
              placeholder={moviee.posterurl}
              type="text"
              tabindex="3"
              required
              onChange={(e) =>
                setmovie({ ...movie, posterurl: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <input
              placeholder={moviee.rating}
              type="url"
              tabindex="4"
              required
              onChange={(e) => setmovie({ ...movie, rating: e.target.value })}
            />
          </fieldset>

          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              onClick={() =>
                dispatch(updateMovie({ id: moviee.id, movie: movie }))
              }
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;

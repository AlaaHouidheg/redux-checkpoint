import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/movieSlice/movieSlice";

const AddMovie = () => {
  const dispatch = useDispatch();
  const [movie, setmovie] = useState({
    id: Math.random(),
    name: "",
    description: "",
    posterurl: "",
    rating: "",
  });
  return (
    <div>
      <div class="container">
        <form id="contact" action="" method="post">
          <h3>Add movie</h3>
          <h4></h4>
          <fieldset>
            <input
              placeholder="Movie name"
              type="text"
              tabindex="1"
              required
              autofocus
              onChange={(e) => setmovie({ ...movie, name: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your description"
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
              placeholder="Your  poster url"
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
              placeholder="rate"
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
              onClick={() => dispatch(addMovie(movie))}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;

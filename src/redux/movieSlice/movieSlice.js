import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: Math.random(),
      name: "beasts of no nation",
      posterurl:
        "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQcsOKPBHHBH4i2JGy0OJI3l4blWwCHjoewRWeLWaZ_n6yzjtW56apfhfQcc2Pb2WGfEAs2Qgs71OA4oTEocr3LZTPcE.jpg?r=b78",
      description:
        "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 1,
    },
    {
      id: Math.random(),

      name: "13 hours in benghazi",
      posterurl:
        "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRse3fgA3r6z5xMgjuVJlZlaXk8VKMNHxTV6f6_hcHVoTOwQka7dA48iui2uaWf77kkExQVywKkNVDwEB9T4Z9ofiTrl.jpg?r=44a",
      description:
        "A security team consisting of six members fights to defend an American diplomatic compound in Benghazi, Libya, against a wave of terrorist attacks.",
      rating: 4,
    },
    {
      id: Math.random(),

      name: "The Circle",
      posterurl:
        "https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg",
      description:
        "Mae is ecstatic to be employed in the biggest tech company in the world. But after she gets involved in an experiment that could change the world, she realises its adverse consequences.",
      rating: 2,
    },
  ],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((el) => el.id != action.payload);
    },
    updateMovie: (state, action) => {
      const element = state.movies.findIndex(
        (el) => el.id == action.payload.id
      );

      state.movies[element] = action.payload.movie;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovie, deleteMovie, updateMovie } = movieSlice.actions;

export default movieSlice.reducer;

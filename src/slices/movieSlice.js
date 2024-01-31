import { createSlice } from "@reduxjs/toolkit";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actions";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    updateMovieList: (state, action) => {
      switch (action.payload.type) {
        case FETCH_DATA_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case FETCH_DATA_SUCCESS:
          return {
            ...state,
            movies: action.payload.data,
            loading: false,
          };
        case FETCH_DATA_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
          };
        default:
          return state;
      }
    },
  },
});

export const { updateMovieList } = movieSlice.actions;
export default movieSlice.reducer;

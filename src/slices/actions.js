import axios from "axios";
import { updateMovieList } from "./movieSlice";
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => async (dispatch) => {
  dispatch(updateMovieList({ type: FETCH_DATA_REQUEST }));

  try {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    dispatch(
      updateMovieList({
        type: FETCH_DATA_SUCCESS,
        data: response.data,
      })
    );
  } catch (error) {
    dispatch(
      updateMovieList({
        type: FETCH_DATA_FAILURE,
        error: error.message,
      })
    );
    console.error(error);
  }
};

import axios from "axios";
import {
  CLEAR_ERRORS,
  GET_MOVIE_DETAIL_FAIL,
  GET_MOVIE_DETAIL_SUCCESS,
  FAV_MOV_REQUEST,
  FAV_MOV_SUCCESS,
  FAV_MOV_FAIL,
  LOAD_FAV_REQUEST,
  LOAD_FAV_FAIL,
  LOAD_FAV_SUCCESS,
} from "../constants/movieConstant";

export const getMovieDetail = (id) => async (dispatch) => {
  dispatch({ type: GET_MOVIE_DETAIL_FAIL });
  try {
    const { data } = await axios.get(`/api/movies/${id}`);
    dispatch({
      type: GET_MOVIE_DETAIL_SUCCESS,
      payload: data.movie,
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIE_DETAIL_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const favMov = (id) => async (dispatch) => {
  dispatch({ type: FAV_MOV_REQUEST });
  try {
    await axios.put(
      "/api/auth/userMovies",
      {
        movieId: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: FAV_MOV_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: FAV_MOV_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const getFav = () => async (dispatch) => {
  dispatch({
    type: LOAD_FAV_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/auth/userMovies");
    dispatch({
      type: LOAD_FAV_SUCCESS,
      payload: data.userMovies,
    });
  } catch (err) {
    dispatch({
      type: LOAD_FAV_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const RemFavMov = (id) => async (dispatch) => {
  dispatch({ type: FAV_MOV_REQUEST });
  try {
    await axios.delete(`/api/auth/${id}`);

    dispatch({
      type: FAV_MOV_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: FAV_MOV_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

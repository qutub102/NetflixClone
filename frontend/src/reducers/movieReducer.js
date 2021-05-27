import {
  CLEAR_ERRORS,
  GET_MOVIE_DETAIL_REQUEST,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAIL,
  FAV_MOV_REQUEST,
  FAV_MOV_SUCCESS,
  FAV_MOV_FAIL,
  LOAD_FAV_REQUEST,
  LOAD_FAV_SUCCESS,
  LOAD_FAV_FAIL,
} from "../constants/movieConstant";

export const movieDetailReducer = (state = { movie: {} }, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    case GET_MOVIE_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const FavMov = (state = { fav: [] }, action) => {
  switch (action.type) {
    case FAV_MOV_REQUEST:
    case LOAD_FAV_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_FAV_SUCCESS:
      return {
        ...state,
        loading: false,
        fav: action.payload,
      };
    case FAV_MOV_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FAV_MOV_FAIL:
    case LOAD_FAV_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

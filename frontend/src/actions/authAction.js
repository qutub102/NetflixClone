import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAIL,
  CLEAR_ERRORS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
} from "../constants/authConstant";
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });
  try {
    const { data } = await axios.post("/api/auth/register", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.user,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch) => {
  dispatch({ type: LOAD_REQUEST });
  try {
    const { data } = await axios.get("/api/auth/getUserProfile");

    dispatch({
      type: LOAD_SUCCESS,
      payload: data.user,
    });
  } catch (err) {
    dispatch({ type: LOAD_FAIL, payload: err.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get("/api/auth/logout");
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({ type: LOGOUT_FAIL, payload: err.response.data.message });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

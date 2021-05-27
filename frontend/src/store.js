import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";
import {
  movieDetailReducer,
  FavMov,
} from "./reducers/movieReducer";

let initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  user: authReducer,
  movieDetail: movieDetailReducer,
  fav: FavMov,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

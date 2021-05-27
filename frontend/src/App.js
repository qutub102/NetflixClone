import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { useDispatch } from "react-redux";
import { loadUser } from "./actions/authAction";
import MovieDetail from "./components/Home/MovieDetail";
import ProtectedRoute from "./components/route/ProtectedRoute";
import Fav from "./components/Home/Fav";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());

    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/movie/:id" component={MovieDetail} exact />
      <ProtectedRoute path="/movies/favourates" component={Fav} exact />
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/authAction";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
    if (error) {
      setTimeout(() => dispatch(clearErrors()), 5000);
    }
  }, [user, error, dispatch, history]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__heading">
          <h1>Sign In</h1>
        </div>
        {error && <p className="error">{error}</p>}
        <form onSubmit={onSubmitHandler}>
          <div className="input">
            <label htmlFor="email" className="label__email">
              Enter Email
            </label>
            <input
              className="input__login-1"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password" className="label__password">
              Password
            </label>
            <input
              className="input__password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login__btn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
        <Link className="register" to="/register">
          {" "}
          New to Netflix? <span className="new">Sign Up Now</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;

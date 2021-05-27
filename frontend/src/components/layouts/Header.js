import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authAction";

const Header = () => {
  const [show, showHandle] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        showHandle(true);
      } else showHandle(false);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <Fragment>
      <header className={`header ${show && "header__black"}`}>
        <Link to="/" className="header__logo">
          <img
            className="header__img"
            src="https://i.ibb.co/r5krrdz/logo.png"
            alt="Netflix logo"
          />
        </Link>
        <div className="header__btn">
          {user ? (
            <div className="header__right-nav">
              <Link className="header__link first" to="/movies/favourates">
                Favorates
              </Link>
              <button className="header__link btn-logout" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link className="header__link" to="/login">
              Sign In
            </Link>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

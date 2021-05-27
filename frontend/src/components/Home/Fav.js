import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFav } from "../../actions/movieAction";

const Fav = () => {
  const dispatch = useDispatch();
  const { fav, loading } = useSelector((state) => state.fav);
  useEffect(() => {
    dispatch(getFav());
  }, [dispatch]);
  return (
    <div className="home-fav">
      <div className="row-fav">
        <div className="row__category">
          <h2>Favourates Movies</h2>
        </div>
        <div className="row__poster">
          {fav.length === 0 && loading ? (
            <h1 style={{ color: "white" }}>Loading...</h1>
          ) : fav.length === 0 && !loading ? (
            <h1 style={{ color: "white" }}>No Favourate Movie added yet</h1>
          ) : (
            fav.map((m) => (
              <div className="row__poster-1" key={m._id}>
                <Link to={`/movie/${m.movieId?._id}`}>
                  <img
                    className="row__poster__img"
                    src={m.movieId?.poster_path}
                    alt={m.movieId?.title}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;

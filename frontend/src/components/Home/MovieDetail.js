import React, { Fragment, useEffect } from "react";
import Banner from "../layouts/Banner";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieDetail,
  favMov,
  clearErrors,
  RemFavMov,
} from "../../actions/movieAction";

const MovieDetail = ({ match, history }) => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movieDetail);
  const { user } = useSelector((state) => state.user);
  const { error, fav } = useSelector((state) => state.fav);
  const onAdd = () => {
    dispatch(favMov(movie?._id));
    history.push("/movies/favourates");
  };
  const onRemove = () => {
    dispatch(RemFavMov(movie?._id));
    history.push("/movies/favourates");
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => dispatch(clearErrors()), 3000);
      //eslint-disable-next-line
    }

    dispatch(getMovieDetail(match.params.id));
  }, [match.params.id, error, dispatch]);

  return (
    <div className="home__md">
      <div className="home__header">
        <Banner
          backdrop_path={movie?.backdrop_path}
          overview={movie?.overview}
          title={movie?.title}
        />
      </div>
      <div className="home__md-1">
        <div className="md__left">
          <h1 style={{ color: "#fff" }}>
            <div className="vote_averge">
              <h4>Vote Average : {movie?.vote_average}</h4>
            </div>
            <div className="vote_averge">
              <h4>Adult : {movie?.adult ? "18+ Only" : "Anybody Can Watch"}</h4>
            </div>
            <div className="vote_averge">
              <h4>Release Date : {movie?.release_date}</h4>
            </div>
            <div className="vote_averge">
              <h4>Popularity : {movie?.popularity}</h4>
            </div>
            <div className="vote_averge">
              <h4>Media Type : {movie?.media_type?.toUpperCase()}</h4>
            </div>
          </h1>
        </div>
        <div className="md__right">
          {user &&
          !fav.some(({ movieId }) => movieId._id.toString() === movie?._id) ? (
            <Fragment>
              <button onClick={onAdd} className="header__link btn">
                Add to favourate
              </button>
              {error && <p className="error">{error}</p>}
            </Fragment>
          ) : (
            user && (
              <Fragment>
                <button onClick={onRemove} className="header__link btn">
                  Remove from favourate
                </button>
                {error && <p className="error">{error}</p>}
              </Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Rows = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/movies?genre_ids=${category}`);
      setMovies(data.movies);
    };
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="row">
      <div className="row__category">
        <h2>{category}</h2>
      </div>
      <div className="row__poster">
        {movies.length === 0 ? (
          <h1 style={{ color: "#fff" }}>Loading....</h1>
        ) : (
          movies.map((m) => (
            <div key={m._id} className="row__poster-1">
              <Link to={`/movie/${m._id}`}>
                <img
                  className="row__poster__img"
                  src={m?.poster_path}
                  alt={m?.title}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Rows;

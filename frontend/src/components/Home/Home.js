import React from "react";
import Banner from "../layouts/Banner";
import Rows from "../Row/Rows";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Banner
          backdrop_path="https://image.tmdb.org/t/p/original/6ELCZlTA5lGUops70hKdB83WJxH.jpg"
          overview=" Washed-up MMA fighter Cole Young, unaware of his heritage, and
            hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out
            and trains with Earth's greatest champions as he prepares to stand
            against the enemies of Outworld in a high stakes battle for the
            universe."
          title="Mortal Combat"
        />
        <Rows category="action" />
        <Rows category="crime" />
        <Rows category="thriller" />
        <Rows category="romance" />
      </div>
    </div>
  );
};

export default Home;

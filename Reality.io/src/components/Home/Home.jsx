import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";
import Grocery from "../Products/Grocery";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Grocery />
      </div>
    </>
  );
};

export default Home;

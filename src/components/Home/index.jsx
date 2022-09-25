import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import Filter from "../Filter";
import Recommended from "./Recommended";

const Home = () => {
  return (
    <div>
      <Filter />
      <Carousel />
      <Recommended />
      <Category />
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "./shared/Navbar";
import Hero from "./Hero";
import CategoryCarousel from "./CategoryCarousel";
import Jobs from "./Jobs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <Jobs/>
    </>
  );
};

export default Home;

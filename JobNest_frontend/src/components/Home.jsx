import React from "react";
import Navbar from "./shared/Navbar";
import Hero from "./Hero";
import CategoryCarousel from "./CategoryCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
    </>
  );
};

export default Home;

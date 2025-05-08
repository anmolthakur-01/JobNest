import React from "react";
import Navbar from "./shared/Navbar";
import Hero from "./Hero";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import LatestJobsCards from "./LatestJobsCards";
import Footer from "./shared/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </>
  );
};

export default Home;

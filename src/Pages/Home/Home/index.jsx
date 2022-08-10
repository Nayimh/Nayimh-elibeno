import React from "react";
import Auction from "../../Auction";
import ExploreNft from "../../ExploreNft";
import Footer from "../../Layers/Footer";
// import Footer from '../../Layers/Footer';
import Seller from "../../Seller";
import Step from "../../Step";
import Category from "../Category";
import ExploreHome from "../Explore";
import Banner from "../HeroSection";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Banner />
        <ExploreHome />
        <Category />
        <ExploreNft />
        <Seller />
        <Step />
        <Auction />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

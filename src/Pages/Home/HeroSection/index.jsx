import React, { useState } from "react";
import Navbar from "../../Layers/Navbar";
import "./Banner.scss";
import { Image } from "../../../assets/Image/index";

function Banner() {
  return (
    <div className="hero">
      <div className="hero__container container">
        <Navbar />

        <div className="banner mb-20 md:mb-[120px]">
          <div className="banner__content--wrapper">
            <div className="banner__text">
              <h1>Collect rare digital arts & nft’s today.</h1>
              <p>
                Business requests of best or shall it global lorem is
                assignment. From
              </p>
            </div>
            <div className="banner__button">
              <button>
                Upload Item{" "}
                <span>
                  {" "}
                  <img src={Image.cloud} alt="" />{" "}
                </span>
              </button>
            </div>
            <div className="banner__counter">
              <div className="counter__item">
                <h1>68,686+</h1>
                <p>nft’s Items</p>
              </div>
              <div className="counter__bid">
                <h1>6.68 ETH</h1>
                <p>Last Bid</p>
              </div>
            </div>
          </div>
          <div className="banner__image--wrapper">
            <img src={Image.banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

import React, { useEffect, useState } from "react";
import "./Explore.scss";
import { Image } from "../../../assets/Image/index";
import { Link } from "react-router-dom";

function ExploreHome() {
  const [exploreData, setData] = useState([]);

  useEffect(() => {
    fetch("./explore.json")
      .then((resp) => resp.json())
      .then((dt) => setData(dt));
  }, []);

  return (
    <div className="explore pb-[120px] ">
      <div className="explore__container container mx-auto ">
        <div className="explore__heading">
          <h1 className="text-2xl  md:text-4xl lg:text-5xl  ">
            Explore NFTs
          </h1>
          <Link state="Explore" to="/explore">
            {" "}
            <div className="flex justify-center items-center rounded-lg bg-lightBlue py-3 px-6 gap-2 cursor-pointer">
              {" "}
              <p className="text-white"> Explore More </p>{" "}
              <span>
                {" "}
                <img src={Image?.circle} alt="" />{" "}
              </span>{" "}
            </div>{" "}
          </Link>
        </div>
        <div className="explore__cards">
          {exploreData?.slice(0, 8).map((data) => (
            <div key={data?.id} className="single__card">
              <div className="content__wrapper">
                <div className="card__img">
                  <Link state="Explore" to="/explore">
                    {" "}
                    <img src={data?.img} alt="" />
                  </Link>
                  <div className="dot">
                    <img src={Image?.dot} alt="" />
                  </div>
                </div>
                <div className="card__content">
                  <div className="card__btn">
                    <div className="cart__btn--heading">
                      <span>
                        {" "}
                        <img src={data?.icon1} alt="" />{" "}
                      </span>{" "}
                      <p> {data?.title} </p>
                    </div>
                    <Link
                      state={`Item Details > ${data?.id}`}
                      to={`/explore/${data?.id}`}
                    >
                      <div className="btn">
                        <p>{data?.id === 2 ? "bid" : "buy"}</p>{" "}
                        <img src={data?.icon2} alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="card__text">
                    <h2>{data?.name}</h2>
                    <p>{data?.author}</p>
                  </div>
                  <div className="card__footer">
                    <span>
                      {" "}
                      <img src={Image.eth2} alt="" />{" "}
                    </span>
                    <h2> {data?.qty} </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreHome;

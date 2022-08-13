import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Layers/CommonHeader";
import Footer from "../../Layers/Footer";
import explore from "./explore.json";
import { Image } from "../../../assets/Image";
import "./explore.css";


function ExploreDetails() {
  const { id } = useParams();

  const [explores, setExplores] = useState(explore);

  const [details, setDetails] = useState({});

  const [toggle, setToggle] = useState(1);

  const [picture, setPicture] = useState();

  const toggleTab = (index) => {
    setToggle(index);
  };

  useEffect(() => {
    const foundDetails = explores?.find(
      (exp) => exp?.id === parseInt(id)
    );
    setDetails(foundDetails);
  }, []);

  return (
    <div>
      <Header />

      <div className="container mx-auto py-20 md:py-[120px]">
        <div className="flex  flex-wrap justify-between  ">
          <div className="flex flex-col items-center mb-24 2xl:mb-0 xl:items-start gap-4 md:gap-6 w-full xl:w-[45%]">
            <div>
            
              <img
                className=" w-[536px] md:w-[536px]  h-[395px] object-cover rounded-lg mx-auto lg:mx-0"
                src={!picture ? details?.img : picture}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center  gap-3 md:gap-6 w-[100%] md:w-[536px] ">
              <div>
                {" "}
                <img
                  className=" w-[62px] h-[62px] md:w-[88px] md:h-[88px] rounded-lg object-cover cursor-pointer"
                  src={details?.im1}
                  onClick={() => setPicture(details?.im1)}
                  alt=""
                />{" "}
              </div>
              <div>
                {" "}
                <img
                  className=" w-[62px] h-[62px] md:w-[88px] md:h-[88px] rounded-lg object-cover cursor-pointer"
                  src={details?.im2}
                  onClick={() => setPicture(details?.im2)}
                  alt=""
                />{" "}
              </div>
              <div>
                {" "}
                <img
                  className=" w-[62px] h-[62px] md:w-[88px] md:h-[88px] rounded-lg object-cover cursor-pointer"
                  src={details?.im3}
                  onClick={() => setPicture(details?.im3)}
                  alt=""
                />{" "}
              </div>
              <div>
                {" "}
                <img
                  className=" w-[62px] h-[62px] md:w-[88px] md:h-[88px] rounded-lg object-cover cursor-pointer"
                  src={details?.im4}
                  alt=""
                  onClick={() => setPicture(details?.im4)}
                />{" "}
              </div>
              <div>
                {" "}
                <img
                  className=" w-[62px] h-[62px] md:w-[88px] md:h-[88px] rounded-lg object-cover cursor-pointer"
                  src={details?.im5}
                  alt=""
                  onClick={() => setPicture(details?.im5)}
                />{" "}
              </div>
            </div>
          </div>
          <div className=" w-full xl:w-[45%]">
            <div className="flex justify-between mb-10">
              <div className="flex items-center gap-3">
                <span>
                  {" "}
                  <img
                    className="h-[29px] w-[29px] rounded-full"
                    src={Image?.creator}
                    alt=""
                  />
                  <img src="" alt="" />
                </span>
                <span className="font-manrope font-normal flex text-light-white text-xs leading-relaxed ">
                  {" "}
                  created by:{" "}
                  <p className=" text-white font-medium ml-1">
                    {" "}
                    {details?.author}{" "}
                  </p>{" "}
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="w-[29px] h-[29px] bg-lightBlue rounded grid justify-center items-center cursor-pointer hover:-mt-2 delay-100">
                  {" "}
                  <img src={Image?.star} alt="" />{" "}
                </span>
                <span className="w-[29px] h-[29px] bg-lightBlue rounded grid justify-center items-center cursor-pointer hover:-mt-2 delay-100">
                  {" "}
                  <img src={Image?.share} alt="" />{" "}
                </span>
                <span className="w-[29px] h-[29px] bg-lightBlue rounded grid justify-center items-center cursor-pointer hover:-mt-2 delay-100">
                  {" "}
                  <img src={Image?.heart} alt="" />{" "}
                </span>
              </div>
            </div>
            <div>
              <div>
                {" "}
                <h1 className="font-syne text-white font-bold text-3xl md:text-5xl leading-relaxed ">
                  {details?.name}
                </h1>
              </div>

              <div className="flex justify-between items-center mt-4 mb-10">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="w-[30px] h-[30px] rounded-full bg-pink grid justify-center items-center">
                    {" "}
                    <img src={Image?.eth} alt="" />{" "}
                  </span>
                  <p className="font-manrope text-light-white leading-relaxed ">
                    Minimum Bid:
                  </p>
                  <h2 className="font-manrope text-white leading-relaxed text-2xl font-medium">
                    {" "}
                    0.14 ETH{" "}
                  </h2>
                </div>
                <div className="flex items-center gap-[8.71px]">
                  <span>
                    <img
                      className="h-[30px] w-[30px] rounded-full"
                      src={Image?.clock}
                      alt=""
                    />
                  </span>
                  <span>
                    {" "}
                    <p className="font-manrope text-light-white">
                      {" "}
                      24D{" "}
                    </p>{" "}
                  </span>
                  <span className="font-manrope text-light-white">
                    |
                  </span>
                  <span>
                    {" "}
                    <p className="font-manrope text-light-white">
                      {" "}
                      04H{" "}
                    </p>{" "}
                  </span>
                  <span className="font-manrope text-light-white">
                    |
                  </span>
                  <span>
                    {" "}
                    <p className="font-manrope text-light-white">
                      {" "}
                      04M{" "}
                    </p>{" "}
                  </span>
                  <span className="font-manrope text-light-white">
                    {" "}
                    |{" "}
                  </span>
                  <span className="font-manrope text-light-white">
                    {" "}
                    04S{" "}
                  </span>
                </div>
              </div>
              <div className="bg-lightBlue rounded-lg w-full ">
                <div className="p-6">
                  <div className="flex gap-4 items-center  border-b border-dashed border-neutral-600 pb-4">
                    <button
                      className={
                        toggle === 1
                          ? "  active-tabs   font-manrope leading-loose text-white font-semibold py-2 px-4  rounded"
                          : "  tabs   font-manrope leading-loose text-white font-semibold py-2 px-4  rounded"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      Details
                    </button>
                    <button
                      className={
                        toggle === 2
                          ? "  active-tabs   font-manrope leading-loose text-white font-semibold py-2 px-4  rounded"
                          : "  tabs   font-manrope leading-loose text-white font-semibold py-2 px-4  rounded"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      Bid
                    </button>
                    <button
                      className={
                        toggle === 3
                          ? "  active-tabs   font-manrope leading-loose text-white font-semibold py-2 px-4  rounded"
                          : "  tabs   font-manrope leading-loose text-white font-semibold py-2 px-4  rounded"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      History
                    </button>
                  </div>
                  <div
                    className={
                      toggle === 1
                        ? "mt-4  content active-content"
                        : "mt-4   content"
                    }
                  >
                    <p className="font-manrope leading-loose text-light-white ">
                      Rather which, caches regretting of in on parts
                      thing at far at the typically the apprehend who
                      practice date out to change. Impasse. Work that
                      the value pink cache such structure do little
                      beacon on present hologram more quitting my that
                      steps the decided in turn the met and while.
                    </p>
                  </div>
                  <div
                    className={
                      toggle === 2
                        ? "mt-4  content active-content"
                        : "mt-4   content"
                    }
                  >
                    <p className="font-manrope leading-loose text-light-white ">
                      Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Praesentium eligendi maiores
                      recusandae omnis tempora esse alias quidem
                      reiciendis inventore exercitationem
                      necessitatibus, aspernatur a laudantium deleniti
                      velit saepe et autem quos.
                    </p>
                  </div>
                  <div
                    className={
                      toggle === 3
                        ? "mt-4  content active-content"
                        : "mt-4  content"
                    }
                  >
                    <p className="font-manrope leading-loose text-light-white ">
                      Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Nesciunt, cum? Impedit error
                      facilis exercitationem nostrum. Accusamus
                      deserunt magnam voluptas soluta, error
                      distinctio assumenda ducimus. Praesentium amet
                      ipsam doloremque molestias labore!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start gap-4 mt-10">
                <button className="flex justify-center rounded-lg items-center gap-2 leading-loose text-white  text-xs font-semibold py-2 w-[180px] bg-pink hover:bg-lightBlue">
                  {" "}
                  bid Now{" "}
                  <span>
                    {" "}
                    <img src={Image?.hammer} alt="" />{" "}
                  </span>{" "}
                </button>
                <button className="flex justify-center rounded-lg items-center gap-2 leading-loose text-white  text-xs font-semibold py-2 w-[180px] bg-lightBlue ">
                  {" "}
                  Buy Now{" "}
                  <span>
                    {" "}
                    <img src={Image?.cart} alt="" />{" "}
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[120px]">
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl  xl:text-5xl font-bold font-syne text-white leading-relaxed mb-16">
              Explore NFTs
            </h1>
            <div className=" flex flex-wrap justify-center gap-6">
              {explores?.slice(0, 4)?.map((data) => (
                <div
                  key={data?.id}
                  className=" w-[312px] bg-lightBlue rounded-lg"
                >
                  <div className="p-6">
                    <div className="mb-6 relative">
                      <img
                        className="w-[264px] h-[264px] "
                        src={data.img}
                        alt=""
                      />
                      <div className="w-[29px] h-[29px] cursor-pointer rounded-lg bg-darkBlue grid justify-center items-center absolute  top-[20px] right-[20px]">
                        <img src={Image.dot} alt="" />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1">
                          <span>
                            {" "}
                            <img src={data?.icon1} alt="" />{" "}
                          </span>{" "}
                          <p className="font font-manrope text-light-white text-xs leading-relaxed ">
                            {" "}
                            {data?.title}{" "}
                          </p>
                        </div>
                        <Link
                          state={` Explore > ${data?.id}`}
                          to={`/explore/${data?.id}`}
                        >
                          {" "}
                          <div className="flex gap-2 items-center hover:rounded rounded-lg bg-darkBlue border border-pink hover:bg-pink py-2 px-4 cursor-pointer">
                            <p className="leading-loose text-xs font-semibold text-white ">
                              {data?.id === 2 ? "bid" : "buy"}
                            </p>{" "}
                            <span>
                              <img src={data?.icon2} alt="" />{" "}
                            </span>
                          </div>{" "}
                        </Link>
                      </div>
                      <div className="">
                        <h2 className="mb-2 font-syne font-bold text-white leading-relaxed text-base ">
                          {data?.name}
                        </h2>
                        <p className="font-manrope text-light-white leading-relaxed text-xs ">
                          {data?.author}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <span className="h-[28px] w-[28px] rounded-lg bg-darkBlue grid justify-center items-center">
                          {" "}
                          <img src={Image.eth2} alt="" />{" "}
                        </span>
                        <h2 className="font-manrope text-base font-semibold text-white leading-relaxed">
                          {" "}
                          {data?.qty}{" "}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ExploreDetails;

import React, { useEffect, useState } from "react";
import Header from "../Layers/CommonHeader";
import Footer from "../Layers/Footer";
import { Image } from "../../assets/Image";

function Activity() {

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch('./activity.json')
      .then(resp => resp.json())
      .then(data => setActivity(data))
  }, [])





  return (
    <div>
      <Header />
      <div className="container mx-auto py-[80px] md:py-[120px]">
    
        <div className="flex flex-col  lg:flex-row items-center  md:justify-between mb-16">
          <div className=" flex  flex-wrap mb-6 justify-center lg:mb-0 gap-[29.93px]">
            <button className="flex items-center justify-center gap-2 font-manrope bg-lightBlue hover:bg-pink  rounded-lg text-[#C1C5E0]  hover:text white leading-loose text-base font-semibold py-3 px-6">
              {" "}
              <span>
                {" "}
                <img  src={Image?.grid} alt="" />{" "}
              </span>{" "}
              All{" "}
            </button>
            <button className="flex items-center justify-center gap-2 font-manrope px-6 py-3 bg-lightBlue hover:bg-pink  rounded-lg text-[#C1C5E0]  hover:text white leading-loose text-base font-semibold ">
              <span>
                {" "}
                <img src={Image?.listing} alt="" />{" "}
              </span>{" "}
              Listing
            </button>
            <button className="flex items-center justify-center gap-2 font-manrope px-6 py-3 bg-lightBlue hover:bg-pink  rounded-lg text-[#C1C5E0]  hover:text white leading-loose text-base font-semibold ">
              <span>
                {" "}
                <img src={Image?.follow} alt="" />{" "}
              </span>{" "}
              Following
            </button>
            <button className="flex items-center justify-center gap-2 font-manrope px-6 py-3 bg-lightBlue hover:bg-pink  rounded-lg text-[#C1C5E0]  hover:text white leading-loose text-base font-semibold ">
              <span>
                {" "}
                <img src={Image?.bidding} alt="" />{" "}
              </span>{" "}
              Biding
            </button>
            <button className="flex items-center justify-center gap-2 font-manrope px-6 py-3 bg-lightBlue hover:bg-pink  rounded-lg text-[#C1C5E0]  hover:text white leading-loose text-base font-semibold ">
              <span>
                {" "}
                <img src={Image?.unfollow} alt="" />{" "}
              </span>{" "}
              Unfollow
            </button>
            <button className="flex items-center justify-center gap-2 font-manrope px-6 py-3 bg-lightBlue hover:bg-pink  rounded-lg text-[#C1C5E0]  hover:text white leading-loose text-base font-semibold ">
              <span>
                {" "}
                <img src={Image?.sale} alt="" />{" "}
              </span>{" "}
              Sale
            </button>
          </div>
          <div>
            <label for="active"></label>
            <select
              className="flex items-center justify-center active:outline-none focus:outline-none cursor-pointer font-hat px-6 py-3 bg-lightBlue hover:bg-pink  rounded-lg text-white   leading-loose text-base font-medium appearance-none   "
              name=""
              id="active"
            >
              <option
                className="bg-lightBlue cursor-pointer"
                value="1 Week ago"
              >
                {" "}
                <button className="flex items-center gap-2 font-hat px-6 py-3 bg-lightBlue hover:bg-pink  rounded-lg text-white   leading-loose text-base font-medium ">
                  Recently Active{" "}
                  <span className="grid items-center justify-center h-5 w-5 rounded-full border border-white px-[5.25px] py-[7.5px] ">
                    {" "}
                    <img src={Image?.downVector} alt="" />{" "}
                  </span>
                </button>{" "}
              </option>
              <option
                className="bg-lightBlue cursor-pointer"
                value="1 Week ago"
              >
                {" "}
                <button className="flex items-center gap-2 font-hat px-6 py-3 bg-lightBlue hover:bg-pink  rounded-lg text-white   leading-loose text-base font-medium ">
                  1 Week ago{" "}
                  <span className="grid items-center justify-center h-5 w-5 rounded-full border border-white px-[5.25px] py-[7.5px] ">
                    {" "}
                    <img src={Image?.downVector} alt="" />{" "}
                  </span>
                </button>{" "}
              </option>
              <option
                className="bg-lightBlue cursor-pointer"
                value="1 Week ago"
              >
                {" "}
                <button className="flex items-center gap-2 font-hat px-6 py-3 bg-lightBlue  hover:bg-pink  rounded-lg text-white   leading-loose text-base font-medium ">
                  1 month ago{" "}
                  <span className="grid items-center justify-center h-5 w-5 rounded-full border border-white px-[5.25px] py-[7.5px]  ">
                    {" "}
                    <img src={Image?.downVector} alt="" />{" "}
                  </span>
                </button>{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="grid gap-6">

          {
            activity?.map(active => 
              <div key={active?.id} className="w-full h-[302px] md:h-[132px] justify-center md:justify-between items-center flex flex-col md:flex-row gap-6 rounded-lg bg-lightBlue p-6">

                <div className="flex flex-col items-center md:flex-row gap-4">
                 <span className="mb-6"> <img src={active?.img} alt="" /> </span>
                  <div className="text-center md:text-start">
                  <h1 className="font-syne text-white leading-relaxe font-bold text-2xl mb-2"> {active?.name} </h1>
                  <p className="font-manrope text-xs leading-relaxed text-light-white "> {active?.title} </p>
                </div>
                </div>

                
                <div className="flex gap-1 items-center">
                  <span className="w-4 h-4 rounded-full"> <img src={Image?.clock} alt="" /> </span>  <p className="font-manrope text-white text-base font-normal leading-relaxed "> {active?.time} </p>
                </div>
               </div> )
            }
          
        </div>
        <div className="flex   justify-center mt-16  ">
          <button className="flex gap-2 items-center py-3 px-6 rounded-lg bg-pink hover:bg-lightBlue font-manrope text-white font-semibold leading-loose">
            Explore More <span> <img src={Image?.whiteCircle} alt="" /> </span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Activity;

import React, { useState, useEffect } from "react";
import { Image } from "../../../assets/Image/index";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper";

function Liveauction() {
  const [auctionData, setData] = useState([]);

  useEffect(() => {
    fetch("./auction.json")
      .then((resp) => resp.json())
      .then((dt) => setData(dt));
  }, []);

  return (
    <div className="py-20 md:py-[120px]">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: ".previus",
            nextEl: ".next",
          }}
        >
          <SwiperSlide>
            <div className="flex flex-wrap gap-6 justify-center place-items-center">
              {auctionData?.map((data) => (
                <div
                  key={data?.id}
                  className="w-[312px] bg-lightBlue rounded-lg"
                >
                  <div className="p-6">
                    <img
                      className="w-[264px] h-[264px] mb-2"
                      src={data?.img}
                      alt=""
                    />
                    <div className="flex gap-[9.14px] justify-center items-center mb-6 text-light-white">
                      <span>
                        <img
                          className="w-[30px] h-[30px] rounded-full"
                          src={Image?.clock}
                          alt=""
                        />
                      </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.date}d
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.hours}h
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.minutes}m
                      </p>
                      <span> | </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.second}s
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h1 className="font-syne font-bold leading-relaxed text-white text-base mb-2">
                          {" "}
                          {data?.name}{" "}
                        </h1>
                        <p className="text-light-white font-manrope leading-relaxed text-xs">
                          {" "}
                          {data?.author}{" "}
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-1 font-manrope font-semibold text-base leading-relaxed text-white">
                          {" "}
                          <span>
                            {" "}
                            <img src={Image?.eth2} alt="" />{" "}
                          </span>{" "}
                          {data?.qty}{" "}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center justify-center py-2 px-[56.98px] gap-2 border  border-pink hover:bg-pink  mx-auto rounded delay-100 hover:rounded-lg">
                      {" "}
                      <p className="font-manrope text-white font-semibold text-xs">
                        Bid Now
                      </p>{" "}
                      <span>
                        {" "}
                        <img src={Image?.hammer} alt="" />{" "}
                      </span>{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-wrap gap-6 justify-center place-items-center">
              {auctionData?.map((data) => (
                <div
                  key={data?.id}
                  className="w-[312px] bg-lightBlue rounded-lg"
                >
                  <div className="p-6">
                    <img
                      className="w-[264px] h-[264px] mb-2"
                      src={data?.img}
                      alt=""
                    />
                    <div className="flex gap-[9.14px] justify-center items-center mb-6 text-light-white">
                      <span>
                        <img
                          className="w-[30px] h-[30px] rounded-full"
                          src={Image?.clock}
                          alt=""
                        />
                      </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.date}d
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.hours}h
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.minutes}m
                      </p>
                      <span> | </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.second}s
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h1 className="font-syne font-bold leading-relaxed text-white text-base mb-2">
                          {" "}
                          {data?.name}{" "}
                        </h1>
                        <p className="text-light-white font-manrope leading-relaxed text-xs">
                          {" "}
                          {data?.author}{" "}
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-1 font-manrope font-semibold text-base leading-relaxed text-white">
                          {" "}
                          <span>
                            {" "}
                            <img src={Image?.eth2} alt="" />{" "}
                          </span>{" "}
                          {data?.qty}{" "}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center justify-center py-2 px-[56.98px] gap-2 border  border-pink hover:bg-pink  mx-auto rounded delay-100 hover:rounded-lg">
                      {" "}
                      <p className="font-manrope text-white font-semibold text-xs">
                        Bid Now
                      </p>{" "}
                      <span>
                        {" "}
                        <img src={Image?.hammer} alt="" />{" "}
                      </span>{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-wrap gap-6 justify-center place-items-center">
              {auctionData?.map((data) => (
                <div
                  key={data?.id}
                  className="w-[312px] bg-lightBlue rounded-lg"
                >
                  <div className="p-6">
                    <img
                      className="w-[264px] h-[264px] mb-2"
                      src={data?.img}
                      alt=""
                    />
                    <div className="flex gap-[9.14px] justify-center items-center mb-6 text-light-white">
                      <span>
                        <img
                          className="w-[30px] h-[30px] rounded-full"
                          src={Image?.clock}
                          alt=""
                        />
                      </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.date}d
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.hours}h
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.minutes}m
                      </p>
                      <span> | </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.second}s
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h1 className="font-syne font-bold leading-relaxed text-white text-base mb-2">
                          {" "}
                          {data?.name}{" "}
                        </h1>
                        <p className="text-light-white font-manrope leading-relaxed text-xs">
                          {" "}
                          {data?.author}{" "}
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-1 font-manrope font-semibold text-base leading-relaxed text-white">
                          {" "}
                          <span>
                            {" "}
                            <img src={Image?.eth2} alt="" />{" "}
                          </span>{" "}
                          {data?.qty}{" "}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center justify-center py-2 px-[56.98px] gap-2 border  border-pink hover:bg-pink  mx-auto rounded delay-100 hover:rounded-lg">
                      {" "}
                      <p className="font-manrope text-white font-semibold text-xs">
                        Bid Now
                      </p>{" "}
                      <span>
                        {" "}
                        <img src={Image?.hammer} alt="" />{" "}
                      </span>{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-wrap gap-6 justify-center place-items-center">
              {auctionData?.map((data) => (
                <div
                  key={data?.id}
                  className="w-[312px] bg-lightBlue rounded-lg"
                >
                  <div className="p-6">
                    <img
                      className="w-[264px] h-[264px] mb-2"
                      src={data?.img}
                      alt=""
                    />
                    <div className="flex gap-[9.14px] justify-center items-center mb-6 text-light-white">
                      <span>
                        <img
                          className="w-[30px] h-[30px] rounded-full"
                          src={Image?.clock}
                          alt=""
                        />
                      </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.date}d
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.hours}h
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.minutes}m
                      </p>
                      <span> | </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.second}s
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h1 className="font-syne font-bold leading-relaxed text-white text-base mb-2">
                          {" "}
                          {data?.name}{" "}
                        </h1>
                        <p className="text-light-white font-manrope leading-relaxed text-xs">
                          {" "}
                          {data?.author}{" "}
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-1 font-manrope font-semibold text-base leading-relaxed text-white">
                          {" "}
                          <span>
                            {" "}
                            <img src={Image?.eth2} alt="" />{" "}
                          </span>{" "}
                          {data?.qty}{" "}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center justify-center py-2 px-[56.98px] gap-2 border  border-pink hover:bg-pink  mx-auto rounded delay-100 hover:rounded-lg">
                      {" "}
                      <p className="font-manrope text-white font-semibold text-xs">
                        Bid Now
                      </p>{" "}
                      <span>
                        {" "}
                        <img src={Image?.hammer} alt="" />{" "}
                      </span>{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-wrap gap-6 justify-center place-items-center">
              {auctionData?.map((data) => (
                <div
                  key={data?.id}
                  className="w-[312px] bg-lightBlue rounded-lg"
                >
                  <div className="p-6">
                    <img
                      className="w-[264px] h-[264px] mb-2"
                      src={data?.img}
                      alt=""
                    />
                    <div className="flex gap-[9.14px] justify-center items-center mb-6 text-light-white">
                      <span>
                        <img
                          className="w-[30px] h-[30px] rounded-full"
                          src={Image?.clock}
                          alt=""
                        />
                      </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.date}d
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.hours}h
                      </p>
                      <span> | </span>
                      <p className=" font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.minutes}m
                      </p>
                      <span> | </span>
                      <p className="font-medium font-manrope text-base leading-[100%]">
                        {" "}
                        {data?.time?.second}s
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h1 className="font-syne font-bold leading-relaxed text-white text-base mb-2">
                          {" "}
                          {data?.name}{" "}
                        </h1>
                        <p className="text-light-white font-manrope leading-relaxed text-xs">
                          {" "}
                          {data?.author}{" "}
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-1 font-manrope font-semibold text-base leading-relaxed text-white">
                          {" "}
                          <span>
                            {" "}
                            <img src={Image?.eth2} alt="" />{" "}
                          </span>{" "}
                          {data?.qty}{" "}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center justify-center py-2 px-[56.98px] gap-2 border  border-pink hover:bg-pink  mx-auto rounded delay-100 hover:rounded-lg">
                      {" "}
                      <p className="font-manrope text-white font-semibold text-xs">
                        Bid Now
                      </p>{" "}
                      <span>
                        {" "}
                        <img src={Image?.hammer} alt="" />{" "}
                      </span>{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex gap-2 mt-16 justify-center items-center">
        <span className="w-[40px] h-[40px] bg-lightBlue hover:bg-pink rounded-full grid justify-center items-center cursor-pointer delay-150 ease-out previus">
          {" "}
          <img src={Image?.leftarrow} alt="" />{" "}
        </span>
        <span className="w-[40px] h-[40px] bg-lightBlue hover:bg-pink  rounded-full grid justify-center items-center cursor-pointer delay-150 ease-out next">
          {" "}
          <img src={Image?.arrowRight} alt="" />{" "}
        </span>
      </div>
    </div>
  );
}

export default Liveauction;

import React, { useEffect, useState } from "react";
import { Image } from "../../assets/Image/index";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper";

function Seller() {
  const [sellerData, setSellerData] = useState([]);

  useEffect(() => {
    fetch("./seller.json")
      .then((response) => response.json())
      .then((data) => setSellerData(data));
  }, []);

  return (
    <div className="py-[80px] md:py-[120px]">
      <div className="container mx-auto">
        <div className="flex mb-16 justify-between items-center ">
          <h1 className="font-syne font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed text-white">
            Top Seller
          </h1>{" "}
          <div className="flex gap-2">
            <span className="bg-lightBlue previus hover:bg-pink h-[40px] w-[40px] rounded-full grid items-center justify-center cursor-pointer">
              <img src={Image?.leftarrow} alt="" />
            </span>
            <span className="bg-lightBlue hover:bg-pink next h-[40px] w-[40px] rounded-full grid items-center justify-center cursor-pointer">
              <img src={Image?.whiteArrow} alt="" />
            </span>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: ".previus",
            nextEl: ".next",
          }}
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[80px]">
              {sellerData.map((data) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={data?.id}
                >
                  <div className="mb-4">
                    <img src={data?.img} alt="" />
                  </div>
                  <h1 className="text-white font-syne font-bold leading-relaxed text-base mb-1">
                    {" "}
                    {data?.name}{" "}
                  </h1>
                  <div className="flex items-center gap-1">
                    <span>
                      {" "}
                      {data?.item > 500 ? (
                        <img src={Image.dimond} alt="" />
                      ) : (
                        <img src={Image?.dimondbg} alt="" />
                      )}{" "}
                    </span>{" "}
                    <p className="text-[#ffffff99] font-manrope leading-relaxed text-sm font-normal">
                      {" "}
                      {data?.item} Items
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[80px]">
              {sellerData.map((data) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={data?.id}
                >
                  <div className="mb-4">
                    <img src={data?.img} alt="" />
                  </div>
                  <h1 className="text-white font-syne font-bold leading-relaxed text-base mb-1">
                    {" "}
                    {data?.name}{" "}
                  </h1>
                  <div className="flex items-center gap-1">
                    <span>
                      {" "}
                      {data?.item > 500 ? (
                        <img src={Image.dimond} alt="" />
                      ) : (
                        <img src={Image?.dimondbg} alt="" />
                      )}{" "}
                    </span>{" "}
                    <p className="text-[#ffffff99] font-manrope leading-relaxed text-sm font-normal">
                      {" "}
                      {data?.item} Items
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[80px]">
              {sellerData.map((data) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={data?.id}
                >
                  <div className="mb-4">
                    <img src={data?.img} alt="" />
                  </div>
                  <h1 className="text-white font-syne font-bold leading-relaxed text-base mb-1">
                    {" "}
                    {data?.name}{" "}
                  </h1>
                  <div className="flex items-center gap-1">
                    <span>
                      {" "}
                      {data?.item > 500 ? (
                        <img src={Image.dimond} alt="" />
                      ) : (
                        <img src={Image?.dimondbg} alt="" />
                      )}{" "}
                    </span>{" "}
                    <p className="text-[#ffffff99] font-manrope leading-relaxed text-sm font-normal">
                      {" "}
                      {data?.item} Items
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[80px]">
              {sellerData.map((data) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={data?.id}
                >
                  <div className="mb-4">
                    <img src={data?.img} alt="" />
                  </div>
                  <h1 className="text-white font-syne font-bold leading-relaxed text-base mb-1">
                    {" "}
                    {data?.name}{" "}
                  </h1>
                  <div className="flex items-center gap-1">
                    <span>
                      {" "}
                      {data?.item > 500 ? (
                        <img src={Image.dimond} alt="" />
                      ) : (
                        <img src={Image?.dimondbg} alt="" />
                      )}{" "}
                    </span>{" "}
                    <p className="text-[#ffffff99] font-manrope leading-relaxed text-sm font-normal">
                      {" "}
                      {data?.item} Items
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[80px]">
              {sellerData.map((data) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={data?.id}
                >
                  <div className="mb-4">
                    <img src={data?.img} alt="" />
                  </div>
                  <h1 className="text-white font-syne font-bold leading-relaxed text-base mb-1">
                    {" "}
                    {data?.name}{" "}
                  </h1>
                  <div className="flex items-center gap-1">
                    <span>
                      {" "}
                      {data?.item > 500 ? (
                        <img src={Image.dimond} alt="" />
                      ) : (
                        <img src={Image?.dimondbg} alt="" />
                      )}{" "}
                    </span>{" "}
                    <p className="text-[#ffffff99] font-manrope leading-relaxed text-sm font-normal">
                      {" "}
                      {data?.item} Items
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Seller;

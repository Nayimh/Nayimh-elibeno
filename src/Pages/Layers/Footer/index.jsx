import React from "react";
import { Image } from "../../../assets/Image/index";

function Footer() {
  return (
    <div className=" py-[50px] md:py-[120px] bg-lightBlue">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap mx-2 md:mx-1 gap-5 items-center justify-center md:justify-between">
          <div className="flex items-center gap-1">
            <span>
              {" "}
              <img src={Image.logo} alt="" />{" "}
            </span>{" "}
            <p className="font-syne font-bold text-3xl md:text-5xl text-white">
              Elibeno
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <span className="w-[32px] h-[32px] rounded-full border border-[#9EA2C5] hover:bg-mix hover:mb-1 hover:border-pink delay-150 grid justify-center items-center cursor-pointer">
              <img src={Image?.linkedin} alt="" />{" "}
            </span>
            <span className="w-[32px] h-[32px] rounded-full border border-white hover:bg-mix hover:mb-1 hover:border-pink delay-150 grid justify-center items-center cursor-pointer">
              <img src={Image?.insta} alt="" />
            </span>
            <span className="w-[32px] h-[32px] rounded-full border border-white hover:bg-mix hover:mb-1 hover:border-pink delay-150 grid justify-center items-center cursor-pointer">
              <img src={Image?.youtube} alt="" />
            </span>
            <span className="w-[32px] h-[32px] rounded-full border border-white hover:bg-mix hover:mb-1 hover:border-pink delay-150 grid justify-center items-center cursor-pointer">
              <img src={Image?.facebook} alt="" />
            </span>
          </div>
        </div>
        <div className="flex flex-col mx-2 md:mx-1 lg:flex-row justify-center md:justify-between gap-20   my-16 py-16  w-auto  border-t border-b border-border-white border-dashed">
          <div className=" w-full md:w-[312px]">
            <p className="mb-4 text-light-white leading-loose text-base font-normal font-manrope">
              Be can of packed he sighed. On into table is take titles
              bits avoid afforded step, up true,a ancient indication
            </p>
            <div className="flex justify-between items-center w-full md:w-[312px] h-[50px] gap-2 border border-dashed rounded-[6px] border-border-white ">
              <input
                className="bg-lightBlue w-9/12 ml-[13.1px] focus:outline-none"
                type="text"
                placeholder="Enter email address"
              />
              <button className=" m-[5px] bg-mix h-10 w-10 grid justify-center items-center rounded-lg cursor-pointer">
                {" "}
                <img src={Image?.rightArrow} alt="" />{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between  gap-[40px]  md:gap-[10px] lg:gap-[100px] xl:gap-[174px]">
                      <div className="list-none grid gap-4 w-[129px]">
                          <h2 className="font-syne text-lg text-white  leading-relaxed font-bold mb-4 md:mb-10"> Marketplace </h2>

                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed ">Categoies</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed ">Affiliate Program</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed">FAQs</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed">News & Press</li>
                          
            </div>
                      <div className="list-none grid gap-2 md:gap-4 w-[129px] ">
                          <h2 className="font-syne text-lg text-white  leading-relaxed font-bold mb-4 md:mb-10"> Explore </h2>

                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed ">Explore Artwork</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed ">Single Artwork</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed">Creators</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed">Single Creator</li>
                          
            </div>
                      <div className="list-none grid gap-4 w-w-[129px]">
                          <h2 className="font-syne text-lg text-white  leading-relaxed font-bold mb-4 md:mb-10"> Explore </h2>

                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed ">Home</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed ">Explore</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed">Collection</li>
                          <li className="cursor-pointer font-normal font-manrope text-light-white text-base leading-relaxed">Author</li>
                          
            </div>
                      
                     
            
          </div>
        </div>
          <div className="grid">
            <p className="text-center font-manrope text-light-white text-sm  leading-[22px]">© 2022 elibeno.All right reserved</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import Header from "../../Layers/CommonHeader";
import Footer from "../../Layers/Footer";
import { Image } from "../../../assets/Image";

function CreateItems() {
  return (
    <div>
      <Header />
      <div className="py-[80px] md-[py-120px] container mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          <div
            className="flex flex-col  justify-center items-center h-[580px] 
                  w-full md:w-[648px] bg-lightBlue rounded-lg "
          >
            <div className="mb-2 flex flex-col justify-center items-center gap-2">
              <span className="w-[60px] h-[60px] ">
                {" "}
                <img
                  className="w-full h-full"
                  src={Image?.imgIcon}
                  alt=""
                />{" "}
              </span>
              <h2 className="font-syne text-white font-bold text-2xl leading-loose ">
                Drag and Drop Your File
              </h2>

              <p className="font-manrope text-light-white ">
                {" "}
                PNG,JPEG,GIF,WEBP,MP3, MP4,HD Max 400MB{" "}
              </p>
            </div>
            <div className="flex flex-col items-center mt-10">
              <h2 className="font-syne text-white font-bold text-2xl leading-loose mb-2">
                or Choose a File
              </h2>
              <label htmlFor="inp">
                <div className="flex items-center gap-2 cursor-pointer py-3 px-6 rounded-lg bg-darkBlue">
                  {" "}
                  <p className="font-manrope text-white font-semibold leading-loose">
                    Browse file
                  </p>{" "}
                  <span>
                    {" "}
                    <img src={Image?.upload} alt="" />{" "}
                  </span>{" "}
                </div>
                <input id="inp" className="hidden" type="file" />
              </label>
            </div>
          </div>
          <div className="w-full md:w-[648px] ">
            <div>
              <h1 className="font-syne font-bold text-base leading-relaxed  text-white mb-2">
                Title
              </h1>
              <input
                className="outline-none w-full bg-lightBlue py-[18px] px-[10px] rounded-lg text-light-white text-xs leading-relaxed"
                type="text"
                placeholder="e.g. Creative Colorful Art"
              />
            </div>
            <div className="my-6">
              <h1 className="font-syne font-bold text-base leading-relaxed  text-white mb-2">
                Description{" "}
                <span className="text-light-white font-manrope text-xs font-normal ">
                  {" "}
                  (Optional){" "}
                </span>{" "}
              </h1>
              <input
                className="outline-none w-full bg-lightBlue py-[18px] px-[10px] rounded-lg text-light-white text-xs leading-relaxed"
                type="text"
                placeholder="Description Here"
              />
            </div>
            <div className="mb-6">
              <h1 className="font-syne font-bold text-base leading-relaxed  text-white mb-2">
                Select Method
                          </h1>
                          
                          


                          <div className='flex items-center justify-center flex-wrap gap-6 checkBox'>
                                    <div>
                                        <label className='cursor-pointer '>
                                            <input className='hidden' type="checkbox" name="" />
                                            <span className=' inline-block bg-lightBlue w-[200px] text-center rounded-lg font-manrope font-normal text-xs text-white py-[18px]'><img className='inline mr-2' src={Image?.sale} alt="" /> Fixed Price</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='cursor-pointer '>
                                            <input className='hidden' type="checkbox" name="" />
                                            <span className=' inline-block bg-lightBlue w-[200px] text-center rounded-lg font-manrope font-normal text-xs text-white py-[18px]'> <img className='inline mr-2' src={Image?.time} alt="" /> Time Auction</span>
                                        </label>
                                    </div>
                                    <div >
                                        <label className='cursor-pointer '>
                                            <input className='hidden' type="checkbox" name="" />
                                            <span className=' inline-block bg-lightBlue w-[200px] text-center rounded-lg font-manrope font-normal text-xs text-white py-[18px]'> <img className='inline mr-2' src={Image?.group} alt="" /> Open for bids</span>
                                        </label>
                                    </div>
                                </div>
                            
                          

             
            </div>
            <div>
              <h1 className="font-syne font-bold text-base leading-relaxed  text-white mb-2">
                Price
              </h1>
              <select
                className="w-full h-[50px] py-[18px] pl-[10px] pr-[32px] rounded-lg bg-lightBlue text-white outline-none text-xs font-manrope"
                name="price"
                id="pri"
              >
                <option value="20">$20</option>
                <option value="50">$50</option>
                <option value="200">$200</option>
                <option value="500">$500</option>
              </select>
            </div>
            <div className="mt-6">
              <h1 className="mb-2 font-syne text-white font-bold leading-relaxed ">
                {" "}
                Royality{" "}
              </h1>
              <input
                className="outline-none w-full bg-lightBlue py-[18px] px-[10px] rounded-lg text-light-white text-xs leading-relaxed font-manrope "
                type="text"
                placeholder="20%"
              />
            </div>
            <div className="mt-12">
              <button className="py-3 px-6 bg-lightBlue rounded-lg hover:bg-pink font-manrope text-white leading-loose font-semibold">
                {" "}
                Create Item{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateItems;

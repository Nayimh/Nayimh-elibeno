import React, { useEffect, useState } from 'react'
import Header from '../../../Layers/CommonHeader'
import Footer from '../../../Layers/Footer'
import { Image } from "../../../../assets/Image/index";

function Collection() {

  const [collections, setcollections] = useState([]);

  useEffect(() => {
    fetch("./collection.json")
      .then(resp => resp.json())
      .then(data => setcollections(data))
  }, [])

  return (
    <div>
      <Header/>
      <div className="container mx-auto py-[80px] md:py-[120px]">

        <div className="flex flex-wrap gap-6 justify-center">
          {
            collections?.map(collection => 
              <div key={collection?.id} className='w-[200px] h-[240px] relative'>
            
                <img  src={collection?.img} alt="" />
                <div className='w-[200px] h-[240px] bg-black rounded-lg opacity-0 cursor-pointer hover:opacity-20 absolute top-0 left-0'>
                  
                </div>
              </div>
              )
          }
        </div>
        <div className="flex justify-center items-center gap-2 mt-16">
                    <span className='w-[40px] h-[40px] bg-lightBlue hover:bg-pink  rounded-full grid justify-center items-center cursor-pointer delay-150 ease-out'> <img src={Image?.leftarrow} alt="" /> </span>
          <span className='w-[40px] h-[40px] bg-lightBlue hover:bg-pink  rounded-full grid justify-center items-center cursor-pointer delay-150 ease-out' > <img src={ Image?.arrowRight } alt="" /> </span>
                </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Collection
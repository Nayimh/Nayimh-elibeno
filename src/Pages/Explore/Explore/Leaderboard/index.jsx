import React, { useEffect, useState } from 'react'
import Header from '../../../Layers/CommonHeader'
import Footer from '../../../Layers/Footer'

function Leaderboard() {

    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        fetch("./leader.json")
            .then(resp => resp.json())
            .then(data => setLeaders(data));
    }, [])

   


  return (
      <div >
          <Header/>
          <div className="container mx-auto pb-[80px] md:pb-[120px] pt-[120px] md:pt-[120px]">
                
              <div className="flex flex-col gap-6">
                  {
                      leaders?.map(leader => 
                          <div key={leader?.id} className=" flex  bg-lightBlue rounded-lg justify-between gap-4 w-full p-6">
                              <div className='flex justify-start items-center gap-[10px] md:gap-[43.3px]'> 
                                  <div className="flex gap-2 items-center justify-center">
                                  <span> <img className='w-[10px] h-[10px] md:w-[18.7px] md:h-[14px] ' src={leader?.icon} alt="" /> </span>
                                  <p className='text-white text-lg md:text-2xl font-manrope font-bold leading-relaxed'> {leader?.id}. </p>
                                  </div>
                                  
                                  <div className="flex  items-center justify-center">
                                      
                                  <img className='w-[35px] h-[35px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] rounded-full ' src={leader?.img} alt="" />
                                  </div>
                              </div>
                              <div className='flex  gap-2 md:gap-6 relative'>
                                  {
                                      leader?.products?.map((product) =>
                                          <div key={product?.id}>
                                              <img className='w-[35px] h-[35px] md:w-[70px] md:h-[70px] 
                                              lg:h-[100px] lg:w-[100px] rounded-full ' src={product.img} alt="" />
                                          </div>
                                      )
                                  }
                                  {/* <p className='absolute right-8 top-10 font-manrope text-white text-base opacity-80 font-normal cursor-pointer'>
                                      40+
                                  </p> */}
                              </div>
                        </div>
                        )
                  }
             </div>
              
          </div>
          <Footer/>
    </div>
  )
}

export default Leaderboard
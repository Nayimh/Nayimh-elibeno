import React, { useEffect, useState } from 'react'
import Header from '../Layers/CommonHeader'
import Footer from '../Layers/Footer'
import { Image } from '../../assets/Image'

function Ranking() {

  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    fetch('./rank.json')
      .then(response => response.json())
      .then(data => setRankings(data));
  }, [])



  return (
    <div>
      <Header />
      <div className="container mx-auto py-[80px] md:py-[120px] w-[100%] overflow-x-scroll">
        
            
      <table className="w-full rounded-lg border-collapse overflow-hidden">
  <thead className='   bg-mix font-syne text-white font-bold  leading-relaxed  '>
    <tr className='text-left  '>
      <th className='p-4' >Rank</th>
      <th className='p-4'>Collection</th>
      <th className='p-4'>Volume</th>
      <th className='p-4'>24h %</th>
      <th className='p-4'>7d %</th>
      <th className='p-4'>Floor Price</th>
      <th className='p-4'>Owners</th>
      <th className='p-4'>Assets</th>
    </tr>
  </thead>
  <tbody >
            {
              rankings?.map(ranking => 
                <tr  key={ranking?.rank} className="text-left font-manrope text-white w-full odd:bg-lightBlue">
                  <td className="p-4 font-manrope leading-relaxed ">
                    0{ranking?.rank}
                  </td>
                  <td className='flex items-center gap-2 p-4 font-manrope leading-relaxed '>
                    <img src={ranking?.img} alt="" />
                    <p>{ranking?.name}</p>
                    
                  </td>
                  <td className="p-4 font-manrope leading-relaxed">
                    {ranking?.volume}
                  </td>
                  <td className="p-4 font-manrope leading-relaxed text-[#50FF24]">
                    {ranking?.day}
                  </td>
                  <td className="p-4 font-manrope leading-relaxed text-[#FF4242]">
                    {ranking?.week}
                  </td>
                  <td className='p-4 font-manrope leading-relaxed'>
                    {ranking?.price}
                  </td>
                  <td className="p-4 font-manrope leading-relaxed">
                    {ranking?.owner}
                  </td>
                  <td className="p-4 font-manrope leading-relaxed">
                    {ranking?.asset}
                  </td>
                  
                  
                </tr> )
    }
  </tbody>
</table>
       
        
           
        <div className="flex   justify-center mt-16  ">
          <button className="flex gap-2 items-center py-3 px-6 rounded-lg bg-pink hover:bg-lightBlue font-manrope text-white font-semibold leading-loose">
            Explore More <span> <img src={Image?.whiteCircle} alt="" /> </span>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Ranking
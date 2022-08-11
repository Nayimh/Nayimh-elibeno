import React, { useEffect, useState } from 'react'
import Header from '../../../Layers/CommonHeader'
import Footer from '../../../Layers/Footer'

function Wallet() {
  const [wallets, setWallets] = useState([]);
  
  useEffect(() => {
    fetch("./wallet.json")
      .then(resp => resp.json())
      .then(data => setWallets(data));
  }, [])

 

  return (
    <div >
        <Header/>
      <div className="container mx-auto py-[80px] md:[py-120px]">
        <div className="grid gap-6">
          {
            wallets?.map(wallet => 
              <div key={wallet?.id} className='bg-lightBlue lg:w-full flex flex-col lg:flex-row justify-between h-[362px] lg:h-[132px] items-center px-5 lg:px-[100px] py-4'>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <span>
                    <img className='w-[100px] h-[100px]' src={wallet?.img} alt="" />
                  </span>
                  <div className=' text-center lg:text-left lg:w-[580px]'>
                    <h1 className='mb-2 font-syne font-bold text-2xl text-white leading-relaxed'>
                      {wallet?.name}
                    </h1>
                    <p className='font-manrope text-light-white text-base leading-loose font-normal'>
                      {
                        wallet?.desc
                      }
                    </p>
                  </div>
                </div>
                <div>
                 <button className='text-white py-3 px-6 bg-darkBlue hover:bg-pink rounded-lg mt-4 lg:mt-0'>  Connect </button>
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

export default Wallet
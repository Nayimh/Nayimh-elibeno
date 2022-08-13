import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../assets/Image/index';

function ExploreNft() {

    const [exploreData, setData] = useState([]);

    useEffect(() => {
        fetch('./explore2.json')
            .then(resp => resp.json())
        .then(dt => setData(dt))
    }, [])

    return (
        <div className='py-[80px] md:py-[120px]'>
            <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-16">
                    <h1 className='text-2xl md:text-4xl  xl:text-5xl font-semibold md:font-bold font-syne text-white leading-relaxed'>Explore NFTs</h1>
                  <Link state="Explore" to="/explore">  <div className='flex justify-center items-center rounded-lg bg-lightBlue py-3 px-6 gap-2 cursor-pointer'> <p className='text-white'> Explore More </p> <span> <img src={Image?.circle} alt="" /> </span> </div> </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center place-items-center">
                    {
                        exploreData.map(data =>  
                            <div  key={data?.id}>
                                <div>
                                 <Link state="Explore" to="/explore">   <img className='w-[312px] h-[312px] mb-4' src={data?.img} alt="" /> </Link> 
                                </div>
                                <div>
                                    <h1 className='text-white font-bold font-syne text-lg leading-relaxed'>Creative arts Collections</h1>

                                    <div className='flex gap-1 items-center my-2 '>
                                        <p className='text-light-white font-normal font-sm font-manrope leading-relaxed '>{data?.author}</p> <span> <img src={data?.checkIcon } alt="" /> </span>
                                    </div>
                                    <div className='flex justify-start items-center gap-2'>
                                        <div className='flex gap-1 items-center'> <span> <img src={Image?.dimond} alt="" /> </span> <p className='font-medium text-white font-syne leading-relaxed text-xs'> {data?.items} </p> </div>
                                        <div className='flex gap-1 items-center'> <span> <img src={Image?.heart} alt="" /> </span> <p className='font-medium text-white font-syne leading-relaxed text-xs' > {data?.reaction} </p> </div>
                                    </div>

                                </div>
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default ExploreNft;
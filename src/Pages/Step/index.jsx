import React, { useEffect, useState } from 'react';


function Step() {

    const [spetData, setStepData] = useState([]);

    useEffect(() => {
        fetch('./easyStep.json')
            .then(response => response.json())
            .then(data => setStepData(data))
    }, [])

    return (
        <div className='bg-stepbg bg-no-repeat bg-cover mx-auto py-20 md:py-[120px]'>
            <div className="container mx-auto ">
                <div className='text-center mb-16 '>
                    <h1 className=" text-xl md:text-5xl font-syne text-white font-bold leading-relaxed mb-2 ">
                    Easy Step For Use
                    </h1>
                    <p className='font-manrope text-light-white text-sm md:text-base leading-loose'>
                    Toadipasicing volutpaconsequat. Ullamcorper a lacus vestibulum sarcu Aliquam 
                    </p>
                </div>
                <div className="flex flex-wrap gap-16 lg:gap-0 items-center mx-auto ">
                    {
                        spetData?.map((data) =>
                            <div key={data?.id} className="mx-auto flex flex-col items-center justify-center lg:mb-0">
                                <div className='flex rounded  justify-center items-center relative  w-[100px] h-[100px] bg-darkBlue mb-6'>
                                    <img src={data?.stepIcon} alt="" />
                                    <span  className='bg-pink rounded-full w-[30px] h-[30px] flex justify-center items-center absolute right-[5px] -top-4 '>
                                        <p className='leading-relaxed font-manrope font-medium text-xs text-white'> {data?.stepNumber} </p>
                                       </span>
                                </div>
                                <div >
                                    <p className='text-white text-center w-[221px] font-bold font-syne text-2xl leading-relaxed'> 
                                        {data?.stepName}
                                        </p>
                                    </div>
                                
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Step;
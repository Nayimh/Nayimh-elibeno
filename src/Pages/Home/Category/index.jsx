import React, { useEffect, useState } from 'react';


function Category() {

    const [platfotmdata, setData] = useState([]);

 

    useEffect(() => {
        fetch('./platform.json')
            .then(resp => resp.json())
        .then(dt => setData(dt))
    }, [])

    return (
      <div className='bg-lightBlue py-[80px] md:py-[120px]'>
      <div className='container  mx-auto'>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {
                  platfotmdata?.map(data => 
                      <div className='h-[120px] flex  justify-center items-center bg-darkBlue rounded-lg hover:bg-pink' key={data?.id}>
                          <div className="flex flex-col justify-center gap-4">
                              <span className='flex justify-center'> <img src={data?.img} alt="" /></span>
                              <p className='text-white leading-relaxed font-bold font-hat'>{ data?.name }</p>
                        </div>
                    </div>
                    )
              }
                </div>
                
            </div>
            </div>
  )
}

export default Category;
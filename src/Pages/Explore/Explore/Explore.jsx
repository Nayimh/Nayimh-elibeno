import React, { useState, useEffect } from 'react';
import { Image } from "../../../assets/Image/index";

function Explore() {
    const [exploreData, setData] = useState([]);

    useEffect(() => {
        fetch('./explore.json')
            .then(resp => resp.json())
        .then(dt => setData(dt))
    }, [])

  return (
    <div className='explore '>
    <div className="explore__container container mx-auto">
        
        <div className="explore__cards">
        {
            exploreData?.map(data => 
                    <div key={data?.id} className="single__card">
                        <div className="content__wrapper">
                <div className="card__img">
                            <img src={data.img} alt="" />
                            <div className="dot">
                                <img src={Image.dot} alt="" />
                            </div>
                </div>
                <div className="card__content">
                    <div className="card__btn">
                        <div className='cart__btn--heading'>
                            <span> <img src={data?.icon1} alt="" /> </span> <p > {data?.title} </p>
                        </div>  
                        <div className='btn'>
                                    <p>{ data?.id === 2 ? "bid" : "buy" }</p> <img src={data?.icon2} alt="" /> 
                        </div>
                    </div>
                    <div className="card__text">
                                <h2>
                                 {data?.name}   
                        </h2>
                                <p>
                                    {data?.author}
                        </p>
                    </div>
                    <div className="card__footer">
                        <span> <img src={Image.eth2} alt="" /> </span>
                            <h2> {data?.qty} </h2>
                    </div>
                        </div>
            </div>
        </div>
                )
            }
            </div>
        
    </div>
</div>
  )
}

export default Explore
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from "../../../assets/Image/index";

import ReactPaginate from 'react-paginate';



function Explore() {

 


    const [exploreData, setData] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);

    const cardPerPage = 12;

    const pageVisited = pageNumber * cardPerPage;

    const pageCount = Math.ceil(exploreData?.length / cardPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }    
    
    const displayCards = exploreData?.slice(pageVisited, pageVisited + cardPerPage).map((data, index )=> {
        return (
            <div key={index} className="single__card">
                <div className="content__wrapper">
                  <div className="card__img">
                    <img src={data.img} alt="" />
                    <div className="dot">
                      <img src={Image.dot} alt="" />
                    </div>
                  </div>
                  <div className="card__content">
                    <div className="card__btn">
                      <div className="cart__btn--heading">
                        <span>
                          {" "}
                          <img src={data?.icon1} alt="" />{" "}
                        </span>{" "}
                        <p> {data?.title} </p>
                      </div>
                      <Link
                        state={`Item Details > ${data?.id} `}
                        to={`/explore/${data?.id}`}
                      >
                        <div className="btn">
                          <p>{data?.id === 2 ? "bid" : "buy"}</p>{" "}
                          <img src={data?.icon2} alt="" />
                        </div>
                      </Link>
                    </div>
                    <div className="card__text">
                      <h2>{data?.name}</h2>
                      <p>{data?.author}</p>
                    </div>
                    <div className="card__footer">
                      <span>
                        {" "}
                        <img src={Image.eth2} alt="" />{" "}
                      </span>
                      <h2> {data?.qty} </h2>
                    </div>
                  </div>
                </div>
              </div>
        );
    })

    useEffect(() => {
      fetch("./explore.json")
        .then((resp) => resp.json())
        .then((dt) => setData(dt));
    }, []);

    return (
      <div className="explore ">
        <div className="explore__container container mx-auto">
                <div className="explore__cards ">
                    {displayCards}
           
          </div>

                <div className="grid justify-center mt-16">
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"flex flex-wrap justify-center items-center gap-6 font-manrope text-white font-semibold"}
                        previousClassName={"py-3 w-[100px] px-[33px] flex justify-center bg-lightBlue rounded hover:bg-pink text-base leading-loose cursor-pointer"}
                        nextClassName={"py-3 px-[33px] w-[100px] flex justify-center bg-lightBlue rounded hover:bg-pink leading-loose cursor-pointer"}
                        disabledClassName={" bg-lightBlue font-manrope flex justify-center items-center  rounded "}
                        activeClassName={"bg-pink font-manrope flex justify-center items-center w-[51px] h-[51px] rounded "}
                       
                        

                    />
           
          </div>
        </div>
      </div>
    );
}

export default Explore
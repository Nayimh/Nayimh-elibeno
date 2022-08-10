import React, { useState } from "react";
import {NavLink } from 'react-router-dom';
import "./Navbar.scss";
import { Image } from "../../../assets/Image/index";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
function Navbar() {

  const [toggle, setToggle] = useState(false);
 

  const showMenu = () => {
    setToggle(!toggle)
  };




  return (
    <div className="navBar">
      <div className="navBar__container container">
        <div className="logo">
          <div className="logo__img">
            {" "}
            <img src={Image.logo} alt="" />{" "}
          </div>
          <div className="brand">
            {" "}
            <h1>Elibeno</h1>{" "}
          </div>
        </div>
        <div className={`${toggle ? "nav" : "nav hide"}`}>
          <div className="nav__menu">
            <li > <NavLink to="/home"> Home </NavLink> </li>

            <li>
              <div className="dropdown">
                Explore 
                <span className="icon">
                <img src={Image.downVector} alt="" />
              </span>
              </div>
              <div className="menu">
                <p>
                <NavLink state="Explore" to="/explore">Explore</NavLink>  
                </p>
                <p>
                  <NavLink state="Live Auction" to="/auction">  Live Auction </NavLink>
                </p>
                <p>
                  <NavLink state="Leaderboard" to="/leaderboard">  Leader Board </NavLink>
                </p>
                
                
              </div>
              
            </li>
            <li>
            <NavLink state="Activity" to="/activity">
             Activity 
            </NavLink>
            </li>
            <li>
            <NavLink state="ranking" to="/ranking">
            Ranking
              </NavLink>
              </li>
            <li>
            <div className="dropdown">
                Pages 
                <span className="icon">
                <img src={Image.downVector} alt="" />
              </span>
              </div>
              <div className="menu">
              <p>
              <NavLink state="Collection" to="/collection">
                  Collection
                  </NavLink>
                  </p>
                  <p>
                <NavLink state="wallet" to="/wallet">
                  Wallet
                  </NavLink>
                  </p>
                  <p>
                <NavLink  state="Create Items" to="/create">
                  Create Items
                  </NavLink>
                  </p>
              </div>
            </li>

            <li> <NavLink state="Contact" to="/contact">Contact</NavLink>  </li>
            
          </div>
          <div className="navBar__btn">
            <button className="login">Login</button>
            <button className="signup">Signup</button>
          </div>
          
        </div>
        <div onClick={showMenu} className="toggle__button">
            {
              !toggle ? <FiMenu /> : <MdOutlineClose/> 
            }
            
            
          </div>
      </div>
    </div>
  );
}

export default Navbar;

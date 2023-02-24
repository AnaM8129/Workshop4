import logo from "../../assets/logonav.png";
import line from "../../assets/line.png";
import hamburguer from "../../assets/Group.png";
import { NavLink } from "react-router-dom";
import React from "react";

const navBar = ({ functionOpen, open }) => {
  return (
    <>
      {/* MENU HAMBURGUESA */}
      <div className={open === true ? "menu-show " : "menu"}>
        <ul className={open === true ? "ul-show" : "menu__ul "}>
          <figure className="close-figure">
            <img
              className="close-figure-img"
              src="https://icones.pro/wp-content/uploads/2021/08/icone-x-grise.png"
              alt="close-icon"
              onClick={functionOpen}
            />
          </figure>
          <li className="nav__ul-li">
            <NavLink to="./">
              <span>00</span>Home
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <NavLink to="./destination/moon">
              <span>01</span>Destination
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <span>02</span>Crew
          </li>
          <li className="nav__ul-li">
            <NavLink to="./Technology">
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </div>
      {/* NAV BAR NORMAL */}
      <nav className="nav">
        <figure className="nav__figure-logo">
          <img src={logo} alt="logo" />
        </figure>
        <figure className="nav__figure-line">
          <img src={line} alt="line" />
        </figure>
        <ul className="nav__ul">
          <li className="nav__ul-li">
            <NavLink to="./">
              <span>00</span>Home
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <NavLink to="./destination/moon">
              <span>01</span>Destination
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <span>02</span>Crew
          </li>
          <li className="nav__ul-li">
            <NavLink to="./Technology">
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
        <figure className="hamburguer" onClick={functionOpen}>
          <img src={hamburguer} alt="hamburguer" />
        </figure>
      </nav>
    </>
  );
};

export default navBar;

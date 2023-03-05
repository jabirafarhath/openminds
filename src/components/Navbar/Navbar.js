import { Link, NavLink } from "react-router-dom";
import React from "react";
import Logo from "../../assets/images/logoWithText.png";
import "./Navbar.css";
import { FiSettings, FiLogOut, FiHome, FiHeart, FiLayout } from "react-icons/fi";
import { TbGoGame } from "react-icons/tb";

function Navbar({signUserOut}) {
  return (
    <nav>
      <div className="nav_logo">
        <img src={Logo} alt=""/>
      </div>
      <div className="nav_menu"> 
        <NavLink className="menu_item" to="/home">
          <i><FiHome /></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="menu_item" to="/forum">
          <i><FiLayout /></i>
          <span>Forum</span>
        </NavLink>
        <NavLink className="menu_item" to="/advice">
          <i><FiHeart /></i>
          <span>Get Advice</span>
        </NavLink>
        <NavLink className="menu_item" to="/settings">
          <i><FiSettings /></i>
          <span>Settings</span>
        </NavLink>
        <NavLink className="menu_item" to="/relax">
          <i><TbGoGame /></i>
          <span>Relax</span>
        </NavLink>
      </div>
      <Link className="menu_item logout" onClick={signUserOut}>
        <i><FiLogOut /></i>
        <span>Logout</span>
      </Link>
    </nav>
  );
}

export default Navbar;
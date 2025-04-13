import React from 'react'
import micro from "/images/micro.png";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<nav className="w-screen border-b  flex justify-between py-4 px-20">
        <div className="flex items-center gap-5">
          <img src={micro} alt="" className="w-[110px]" />
          <div className="flex items-center gap-5 text-sm capitalize">
            <Link to="/todo">todo</Link>
            <Link to="/teams">teams</Link>
            <Link to="/copilet">copilet</Link>
            <Link to="/window">windows</Link>
            <Link to="/surface">surface</Link>
            <Link to="/ebox">xbox</Link>
            <Link to="/support">support</Link>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <a href="#" className="text-sm text-center">All microsoft ^</a>
          <IoSearch className="text-xl"/>
          <FaShoppingCart className="text-xl"/>
          <FaCircleUser className="text-xl"/>
          
        </div>
      </nav>
  )
}

export default Navbar
import React from "react";
import logo from "/images/schoolshop.png";
import carosel from "/images/carosel1.webp";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { CategaryCart } from "../../components/CategaryCart.jsx";
const ShopDashboard = () => {
  return (
    <div className="container min-h-screen mx-auto flex flex-col gap-3">
      <nav>
        <div className="flex justify-around items-center py-3 shadow-lg">
          <img src={logo} alt="" className="w-32 h-10" />
          <div
            id="searchbar"
            className="flex items-center shadow rounded-lg px-2 justify-between  gap-5 w-[50%] py-2"
          >
            <input
              type="text"
              className="outline-none w-[90%]"
              placeholder="Search for porducts , brands and more"
            />

            <IoSearch />
          </div>
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-full border flex items-center justify-center">
              <FaCartPlus />
            </div>
            <div className="size-10 rounded-full border flex items-center justify-center">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-blue-600 py-2 flex items-center justify-center">
          <ul className="flex uppercase gap-6 text-white">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
      </nav>
      <div id="carosel" className="h-60 shadow-lg flex flex-col gap-2">
        <div className="relative">
          <div className="bg-white h-24 w-8 absolute top-10 left-0 flex justify-center items-center">
            <IoIosArrowBack />
          </div>
          <div className="bg-white h-24 w-8 absolute top-10 right-0 flex justify-center items-center">
            <IoIosArrowBack className="rotate-180" />
          </div>
          <img src={carosel} alt="" className="" />
        </div>
        <div className=" h-5 flex justify-center items-center gap-5">
          <div className="size-3 rounded-full border bg-gray-400 "></div>
          <div className="h-3 w-10 rounded-full border bg-gray-400 "></div>
          <div className="size-3 rounded-full border bg-gray-400 "></div>
          <div className="size-3 rounded-full border bg-gray-400 "></div>
        </div>
      </div>
      <div id="herosection">
        <div className="flex flex-col justify-center items-center   ">
            <span className="py-5 inline-block text-center text-2xl font-bold">---Shop by categary---</span>
        <div className="flex gap-4 w-full">
            <CategaryCart/>
            <CategaryCart/>
            <CategaryCart/>
            <CategaryCart/>
            <CategaryCart/>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center   ">
            <span className="py-5 inline-block text-center text-2xl font-bold">---School Bags---</span>
        <div className="flex gap-4 w-full">
            <CategaryCart/>
            <CategaryCart/>
            <CategaryCart/>
            <CategaryCart/>
            <CategaryCart/>
        </div>
        </div>

      </div>
    </div>
  );
};

export default ShopDashboard;

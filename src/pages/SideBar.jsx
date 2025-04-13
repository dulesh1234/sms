import React, { useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { GiLifeBuoy } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRProject } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import image from "/images/image.avif";
const SideBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex h-screen w-full mt-1 relative">
      {menu && (
        <div
          className={`${
            menu
              ? "absolute top-0 md:static z-20 bg-white w-[70%] md:w-[30%] lg:w-[20%] "
              : "w-[0]"
          } p-3 border rounded-xl h-[100%] `}
        >
          <FaHome className="absolute top-3.5 left-4 text-xl font-bold" />
          <button className="absolute top-3 left-12 font-medium border rounded-xl px-1 font-sans">
            Quick Create
          </button>

          <ul className="space-y-8 mt-12">
            <div className="flex gap-3 relative ">
              <MdOutlineDashboard className="absolute top-1 left-0 " />
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer absolute top-0 left-6 font-semibold">
                Dashboard
              </li>
            </div>
            <div className="flex gap-3 relative space-y-4">
              <GiLifeBuoy className="absolute top-1 left-0" />
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer absolute top-0 left-6 font-semibold capitalize">
                lifecycle
              </li>
            </div>
            <div className="flex gap-3 relative mt-2">
              <SiGoogleanalytics className="absolute top-1 left-0" />
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer absolute top-0 left-6 font-semibold capitalize">
                Analytic
              </li>
            </div>
            <div className="flex gap-3 relative mt-2">
              <FaRProject className="absolute top-1 left-0" />
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer absolute top-0 left-6 font-semibold capitalize">
                project
              </li>
            </div>
            <div className="flex gap-3 relative mt-2">
              <RiTeamFill className="absolute top-1 left-0" />
              <li className="text-gray-700 hover:text-blue-600 cursor-pointer absolute top-0 left-6 font-semibold capitalize">
                teams
              </li>
            </div>
          </ul>
        </div>
      )}

      <div
        onClick={() => setMenu(!menu)}
        className={`${
          menu
            ? "bg-gray-800  md:bg-white font-bold w-[100%] md:w-[70%]  lg:w-[80%] "
            : "w-[100%] "
        } p-3 border rounded-xl h-[100%]`}
      >
        <div className="lg:relative flex justify-center lg:inline ">
          <GoSidebarCollapse
            className="font-[400] lg:absolute lg:top-3 left-0 lg:size-8 size-5 z-10 "
            onClick={() => setMenu(!menu)}
          />
          <h1 className="font-bold md:text-xl lg:text-4xl text-center capitalize">
            welcome to school management systems{" "}
          </h1>
        </div>
        <div className="flex gap-4 justify-center">
        <div className=" border-1 overflow-hidden rounded-4xl shadow-amber-300gray-400xl w-[20%] mt-10">
          <div className="overflow-hidden">
            <img src={image} alt="" className="  " />
          </div>
          <h1 className="pl-1">Asus Laptop</h1>
          <p className="pl-1">price-45000/-</p>
          <p className="text-start pl-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit good
            product!
          </p>
        </div>
        
        <div className=" border-1 overflow-hidden rounded-4xl shadow-amber-300gray-400xl w-[20%] mt-10">
          <div className="overflow-hidden">
            <img src={image} alt="" className="  " />
          </div>
          <h1 className="pl-1">Asus Laptop</h1>
          <p className="pl-1">price-45000/-</p>
          <p className="text-start pl-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit good
            product!
          </p>
        </div>
        <div className=" border-1 overflow-hidden rounded-4xl shadow-amber-300gray-400xl w-[20%] mt-10">
          <div className="overflow-hidden">
            <img src={image} alt="" className="  " />
          </div>
          <h1 className="pl-1">Asus Laptop</h1>
          <p className="pl-1">price-45000/-</p>
          <p className="text-start pl-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit good
            product!
          </p>
        </div>
        <div className=" border-1 overflow-hidden rounded-4xl shadow-amber-300gray-400xl w-[20%] mt-10">
          <div className="overflow-hidden">
            <img src={image} alt="" className="  " />
          </div>
          <h1 className="pl-1">Asus Laptop</h1>
          <p className="pl-1">price-45000/-</p>
          <p className="text-start pl-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit good
            product!
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SideBar;

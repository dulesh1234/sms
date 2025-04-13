import React from "react";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaXbox } from "react-icons/fa6";
import { MdOutlineDeviceUnknown } from "react-icons/md";
import image from "/images/image.avif";
import image2 from "/images/image2.avif";
import image3 from "/images/image3.avif";
import image4 from "/images/image4.webp";
import Cart from "../components/Cart.jsx";

const HeroSection = () => {
  // const increment = ()=>{


  //     setNum(num+10)
   

  // }

  // const decrement = ()=>{
  //   if(num > 0){

  //     setNum(num-10)
  //   }

  // }
  return (
    <div>
       {/* <div className="h-32 flex items-center justify-center gap-10 ">

<button onClick={increment} className="p-2 border-2 text-white bg-gray-600">increment</button>

<button onClick={decrement} className="p-2 border-2 text-white bg-gray-700">decrement</button>
      </div> */}
      <div className="flex items-center justify-center gap-18 text-xl py-18">
        <div className="flex flex-col items-center gap-2">
          <TfiMicrosoftAlt className="size-10" />
          <span className="text-blue-600 underline cursor-pointer">
            Choose your Microsoft 365
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaXbox className="size-10" />
          <span className="text-blue-600 underline cursor-pointer">
            show xbox
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TfiMicrosoftAlt className="size-10" />
          <span className="text-blue-600 underline cursor-pointer">
            Get Windows 11
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MdOutlineDeviceUnknown className="size-10" />
          <span className="text-blue-600 underline cursor-pointer">
            explore surface device
          </span>
        </div>
      </div>
      <div className=" flex justify-center px-14 gap-4">
        <Cart
          image={image}
          heading={"Surface laptop, Copilot+ PC"}
          paragraph={
            "This laptop's unrivalled flexibility and AI features like Cocreator, enable you to do more than you ever imagined."
          }
          new1={"new"}
          btnText={"learn more"}
        />
        <Cart
          image={image2}
          heading={"Surface Pro, Copilot+ PC"}
          paragraph={
            "This laptop's unrivalled flexibility and AI features like Cocreator, enable you to do more than you ever imagined."
          }
          btnText={"learn more"}
        />
        <Cart
          image={image3}
          heading={"achieve the extraodinary "}
          paragraph={
            "This laptop's unrivalled flexibility and AI features like Cocreator, enable you to do more than you ever imagined."
          }
          btnText={"Shop microsoft 365"}
        />
        <Cart
          image={image4}
          heading={"xbox seriou x"}
          paragraph={
            "This laptop's unrivalled flexibility and AI features like Cocreator, enable you to do more than you ever imagined."
          }
          btnText={"Shop xbox seriou x"}
        />
      </div>
    </div>
  );
};

export default HeroSection;

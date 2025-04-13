import React, { useState } from "react";

const BgColor = () => {
    const [color, setColor] = useState("olive")
   
  return (
    <div className="w-full h-screen duration-200"
    style={{background: color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-2 bottom-12 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
        <button
        onClick={() => setColor("red")}
            className="outline-none px-4 py-1 text-white rounded-full"
            style={{ background: "red" }}
            
          >
            red
          </button>
          <button
          onClick={() => setColor("green")}
            className="outline-none px-4 py-1 text-white rounded-full"
            style={{ background: "green" }}
          >
            green
          </button>
          <button
          onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 text-white rounded-full"
            style={{ background: "blue" }}
          >
            blue
          </button>
          <button
          onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 text-white rounded-full"
            style={{ background: "pink" }}
          >
            pink
          </button>
          <button
          onClick={() => setColor("black")}
            className="outline-none px-4 py-1 text-white rounded-full"
            style={{ background: "black" }}
          >
            black
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default BgColor;

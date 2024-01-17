import React from "react";
import Navbar from "../components/Navbar";

function Todos() {
 return (
  <div>
   <Navbar />
   <div className="flex justify-center items-center h-screen">
    <h1 className="text-9xl uppercase font-black">Todos</h1>
   </div>
  </div>
 );
}

export default Todos;

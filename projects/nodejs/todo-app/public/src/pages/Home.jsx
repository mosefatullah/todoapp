import React from "react";
import Navbar from "../components/Navbar";

function Home() {
 return (
  <div>
   <Navbar />
   <div className="flex justify-center items-center h-screen">
    <h1 className="text-9xl uppercase font-black">Home</h1>
   </div>
  </div>
 );
}

export default Home;

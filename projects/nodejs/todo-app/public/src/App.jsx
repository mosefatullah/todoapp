import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Timeline from "./pages/Timeline";

function App() {
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/timeline" element={<Category />} />
     <Route path="/category" element={<Timeline />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;

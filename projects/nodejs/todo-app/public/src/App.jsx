import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Search from "./pages/Search";

function App() {
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/todos" element={<Todos />} />
     <Route path="/search" element={<Search />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;

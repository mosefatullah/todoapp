import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Timeline from "./pages/Timeline";
import Login from "./pages/Login";
import { verifyToken } from "./utils/api";

function App() {
 const [isLogin, setIsLogin] = React.useState(null);
 React.useEffect(() => {
  if (window.localStorage.getItem("lxoxg") !== null) {
   verifyToken(
    () => {
     setIsLogin(false);
    },
    () => {
     setIsLogin(true);
    }
   );
  } else {
   setIsLogin(false);
  }
 }, []);
 return (
  <>
   {isLogin === true && (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/category" element={<Category />} />
     </Routes>
    </BrowserRouter>
   )}
   {isLogin === false && <Login />}
  </>
 );
}

export default App;

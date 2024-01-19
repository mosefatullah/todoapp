import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function NavWithSidebar({ children }) {
 const [expandSidebar, setExpandSidebar] = React.useState(false);
 function toggleSidebar(state) {
  setExpandSidebar(state);
 }

 return (
  <div className="main">
   <Navbar toggleSidebar={toggleSidebar} />
   <Sidebar expandSidebar={expandSidebar}>{children}</Sidebar>
  </div>
 );
}

export default NavWithSidebar;

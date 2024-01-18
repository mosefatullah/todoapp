import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ children, expandSidebar }) {
 return (
  <div className="app flex">
   <div className="relative min-w-[70px] sm:min-w-[300px]" hidden={!expandSidebar}>
    <div className="sticky top-[77px] left-0 flex w-full flex-col my-3">
     <NavLink
      to="/"
      className={({ isActive }) =>
       "flex w-full p-3 px-6 text-left rounded-e-full " +
       (isActive ? "bg-blue-200 text-blue-800" : "bg-white hover:bg-gray-100")
      }
     >
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="currentColor"
       className="w-10 h-6 sm:w-6 sm:mr-6"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
       />
      </svg>
      <span className="hidden sm:block">Todos</span>
     </NavLink>
     <NavLink
      to="/timeline"
      className={({ isActive }) =>
       "flex w-full p-3 px-6 text-left rounded-e-full " +
       (isActive ? "bg-blue-200 text-blue-800" : "bg-white hover:bg-gray-100")
      }
     >
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="currentColor"
       className="w-10 h-6 sm:w-6 sm:mr-6"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
       />
      </svg>
      <span className="hidden sm:block">Timeline</span>
     </NavLink>
     <NavLink
      to="/category"
      className={({ isActive }) =>
       "flex w-full p-3 px-6 text-left rounded-e-full " +
       (isActive ? "bg-blue-200 text-blue-800" : "bg-white hover:bg-gray-100")
      }
     >
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="currentColor"
       className="w-10 h-6 sm:w-6 sm:mr-6"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
       />
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6Z"
       />
      </svg>
      <span className="hidden sm:block">Category</span>
     </NavLink>
    </div>
   </div>
   <div className="w-full px-3">{children}</div>
  </div>
 );
}

export default Sidebar;

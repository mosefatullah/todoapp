import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/todo-icon.png";

function Navbar({ toggleSidebar }) {
 const [openUserMenu, setOpenUserMenu] = React.useState(true);
 const [expandSidebar, setExpandSidebar] = React.useState(false);
 React.useEffect(() => {
  setExpandSidebar(localStorage.getItem("todo.app.expandSidebar") === "true");
  if (toggleSidebar)
   toggleSidebar(localStorage.getItem("todo.app.expandSidebar") === "true");
 }, []);
 return (
  <>
   <nav className="nav bg-white border-b sticky top-0 left-0 z-50">
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
     <div className="relative flex h-16 items-center justify-between space-x-1 sm:space-x-2 md:space-x-4">
      <button
       type="button"
       className={
        "hideWhenToolbarShowed rounded-full relative inline-flex items-center justify-center p-3 text-gray-500 hover:bg-gray-200 hover:text-gray-600 " +
        (toggleSidebar == null ? "hidden" : "block")
       }
       onClick={() => {
        if (toggleSidebar) {
         localStorage.setItem("todo.app.expandSidebar", !expandSidebar);
         toggleSidebar(!expandSidebar);
         setExpandSidebar(!expandSidebar);
        }
       }}
      >
       <svg
        className="block h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
       </svg>
       <svg
        className="hidden h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M6 18L18 6M6 6l12 12"
        />
       </svg>
      </button>
      <div className="hideWhenToolbarShowed flex flex-1 items-stretch justify-start">
       <div className="flex flex-shrink-0 items-center">
        <img className="h-8 w-auto" src={Logo} alt="Todo App" />
       </div>
       <div
        className={
         "hidden sm:ml-6 sm:block " +
         (toggleSidebar == null ? "invisible" : "block")
        }
       >
        <input
         type="search"
         className="px-3 py-2 rounded-md bg-gray-100"
         placeholder="Search"
        />
       </div>
      </div>
      <div
       className={
        "flex items-center pl-6 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 " +
        (toggleSidebar == null ? "hidden" : "block")
       }
      >
       <button
        type="button"
        className="rounded-full relative inline-flex items-center justify-center p-3 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
       >
        <svg
         className="h-6 w-6"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
         />
        </svg>
       </button>
       <button
        type="button"
        className="rounded-full relative inline-flex items-center justify-center p-3 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
       >
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="w-6 h-6"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
         />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
         />
        </svg>
       </button>

       <div className="relative ml-3">
        <div>
         <button
          type="button"
          className="relative flex rounded-full bg-gray-200 text-sm focus:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-300"
          onClick={() => setOpenUserMenu(!openUserMenu)}
         >
          <img
           className="h-8 w-8 rounded-full"
           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
           alt=""
          />
         </button>
        </div>

        <div
         className="absolute right-0 z-[200] mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
         role="menu"
         tabIndex="-1"
         hidden={openUserMenu}
        >
         <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-0"
         >
          Your Profile
         </a>
         <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-1"
         >
          Settings
         </a>
         <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          onClick={() => {
           localStorage.removeItem("lxoxg");
           window.location.href = "/";
          }}
         >
          Log out
         </a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </nav>
  </>
 );
}

export default Navbar;

import React from "react";
import Navbar from "../components/Navbar";
import { logIn } from "../utils/api";

function Login() {
 return (
  <div>
   <Navbar />
   <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-4xl uppercase font-black">Login</h1>

    <form className="w-full max-w-lg">
     <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
       <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-user"
       >
        Email or Username
       </label>
       <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-user"
        type="email"
        placeholder="example@gmail.com or example"
       />
       <p className="text-gray-600 text-xs italic">
        Some tips - as long as needed
       </p>
      </div>
     </div>
     <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
       <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
       >
        Password
       </label>
       <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-password"
        type="password"
        placeholder="******************"
       />
       <p className="text-gray-600 text-xs italic">
        Some tips - as long as needed
       </p>
      </div>
     </div>
     <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full px-3">
       <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => {
         let emailOrUsername = {};
         if (document.querySelector("#grid-user").value.includes("@"))
          emailOrUsername = {
           email: document.querySelector("#grid-user").value,
          };
         else
          emailOrUsername = {
           username: document.querySelector("#grid-user").value,
          };
         logIn(
          {
           ...emailOrUsername,
           password: document.querySelector("#grid-password").value,
          },
          (err) => {
           alert("Error: " + err.error);
          },
          () => {
           alert("Logged in successfully!");
           window.location.href = "/";
          }
         );
        }}
       >
        Sign In
       </button>
      </div>
     </div>
    </form>
   </div>
  </div>
 );
}

export default Login;

import React from "react";
import Navbar from "../components/Navbar";
import { logIn, signUp } from "../utils/api";
import Alert from "../components/Alert";

function Login() {
 const [alert, setAlert] = React.useState({
  title: "",
  description: "",
  open: false,
 });
 return (
  <div>
   <Alert
    title={alert.title}
    description={alert.description}
    open={alert.open}
    confirmAction={(value) => {
     setAlert({ ...alert, open: value });
    }}
    cancelAction="no"
   />
   <Navbar />
   <div className="flex flex-col justify-center items-center h-[90vh]">
    <h1 className="text-4xl uppercase font-black" id="title">
     Login
    </h1>

    <form className="w-full max-w-lg mt-8" id="loginForm">
     <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
       <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="login-user"
       >
        Email or Username
       </label>
       <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="login-user"
        type="email"
        placeholder="example@gmail.com or example"
       />
       <p className="text-gray-600 text-xs italic">
        Email or Username is required.
       </p>
      </div>
     </div>
     <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
       <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="login-password"
       >
        Password
       </label>
       <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="login-password"
        type="password"
        placeholder="******************"
       />
       <p className="text-gray-600 text-xs italic">Password is required.</p>
      </div>
     </div>
     <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full px-3">
       <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => {
         let emailOrUsername = {};
         if (document.querySelector("#login-user").value.includes("@"))
          emailOrUsername = {
           email: document.querySelector("#login-user").value,
          };
         else
          emailOrUsername = {
           username: document.querySelector("#login-user").value,
          };
         logIn(
          {
           ...emailOrUsername,
           password: document.querySelector("#login-password").value,
          },
          (err) => {
           let error = err.error;
           if (error?.includes("User validation failed: ")) {
            error = error.split("User validation failed: ")[1];
            error = error.replace(/(\w+: )+/g, "");
           }
           setAlert({
            title: "Error",
            description: error || "Something went wrong",
            open: true,
           });
          },
          () => {
           window.location.href = "/";
          }
         );
        }}
       >
        Sign In
       </button>
       <span className="mx-4"> or </span>
       <a
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
        onClick={() => {
         document.querySelector("#loginForm").style.display = "none";
         document.querySelector("#signupForm").style.display = "block";
         document.querySelector("#title").innerText = "Sign Up";
        }}
       >
        Create a new account
       </a>
      </div>
     </div>
    </form>

    <form
     className="w-full max-w-lg mt-8 hidden"
     id="signupForm"
     onSubmit={(e) => {
      e.preventDefault();
     }}
    >
     <div className="flex flex-wrap -mx-3 mb-6 space-y-4">
      <div className="w-full px-3">
       <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="signup-user"
       >
        Username
       </label>
       <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="signup-user"
        type="text"
        placeholder="example"
       />
       <p className="text-gray-600 text-xs italic">Username is required.</p>
      </div>
      <div className="w-full px-3">
       <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="signup-email"
       >
        Email
       </label>
       <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="signup-email"
        type="email"
        placeholder="Email address"
       />
       <p className="text-gray-600 text-xs italic">Email is required.</p>
      </div>
      <div className="w-full px-3">
       <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="signup-password"
       >
        Password
       </label>
       <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="signup-password"
        type="password"
        placeholder="******************"
       />
       <p className="text-gray-600 text-xs italic">Password is required.</p>
      </div>

      <div className="w-full px-3">
       <label
        className="block tracking-wide text-gray-700 text-xs mb-2"
        htmlFor="signup-checkTos"
       >
        <input
         className="mr-2 leading-tight"
         type="checkbox"
         id="signup-checkTos"
         checked={true}
        />
        <span className="text-sm">
         I agree to the
         <a href="#" className="text-blue-500 mx-1">
          Terms of Service
         </a>
         and
         <a href="#" className="text-blue-500 mx-1">
          Privacy Policy
         </a>
        </span>
       </label>
      </div>
     </div>

     <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full px-3">
       <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => {
         if (document.querySelector("#signup-checkTos").checked) {
          signUp(
           {
            username: document.querySelector("#signup-user").value,
            email: document.querySelector("#signup-email").value,
            password: document.querySelector("#signup-password").value,
           },
           (err) => {
            let error = err.error;
            if (error?.includes("User validation failed: ")) {
             error = error.split("User validation failed: ")[1];
             error = error.replace(/(\w+: )+/g, "");
             error = error.toLowerCase();
             error = error.charAt(0).toUpperCase() + error.slice(1);
            } else if (error?.includes("duplicate")) {
             error = "Username already exists!";
            }
            setAlert({
             title: "Error",
             description: error || "Something went wrong!",
             open: true,
            });
           },
           () => {
            window.location.href = "/";
           }
          );
         } else {
          setAlert({
           title: "Error",
           description:
            "You must agree to the Terms of Service and Privacy Policy",
           open: true,
          });
         }
        }}
       >
        Sign Up
       </button>
       <span className="mx-4"> or </span>
       <a
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
        onClick={() => {
         document.querySelector("#loginForm").style.display = "block";
         document.querySelector("#signupForm").style.display = "none";
         document.querySelector("#title").innerText = "Login";
        }}
       >
        Log in to your account
       </a>
      </div>
     </div>
    </form>
   </div>
  </div>
 );
}

export default Login;

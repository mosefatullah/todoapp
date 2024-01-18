import React from "react";
import NavWithSidebar from "../components/NavWithSidebar";
import { getTodos } from "../utils/api";

function Home() {
 const [todos, setTodos] = React.useState([]);
 React.useEffect(() => {
  getTodos(
   (err) => {
    setTodos([]);
    console.log(err);
   },
   (data) => {
    setTodos(data.data);
   }
  );
  return () => {};
 }, []);
 return (
  <div>
   <NavWithSidebar>
    <div>
     <div className="w-full p-4 flex justify-center">
      <div className="w-full px-4 py-3 max-w-[500px] bg-white text-gray-600 shadow-md border rounded-md cursor-text">
       Take a todo...
      </div>
     </div>
     <div className="flex justify-center max-w-3xl">
      <div
       className="w-full mt-7 divide-y divide-gray-300 max-w-md space-y-4"
       hidden={todos.length <= 0}
      >
       {todos.length > 0 &&
        todos.map((todo) => (
         <div
          className="p-4 flex justify-between items-center cursor-pointer hover:shadow-md transition duration-200 ease-in-out active:bg-blue-50 active:transition-none select-none"
          key={todo._id}
          id={"todo_" + todo._id}
          onClick={() => {
           let timer = null;
           if (timer) clearTimeout(timer);
           timer = setTimeout(function () {
            document.querySelector(
             "#todo_" + todo._id + " input[type=checkbox]"
            ).checked = !document.querySelector(
             "#todo_" + todo._id + " input[type=checkbox]"
            ).checked;
           }, 100);
          }}
          onDoubleClick={() => {
           window.location.href = "/#" + todo._id;
          }}
         >
          <div className="flex items-start">
           <div>
            <input type="checkbox" className="mr-3 cursor-pointer" />
           </div>
           <div className="flex flex-col space-y-2">
            <h1 className="text-gray-800 cursor-pointer font-medium">
             {todo.title || "Untitled"}
            </h1>
            <p className="text-gray-500 cursor-pointer text-sm line-clamp-2">
             {todo.description || "No description"}
            </p>
            <span className="flex items-center text-gray-500 cursor-pointer text-sm">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
             >
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
             </svg>
             {new Date(todo.createdAt).toDateString()}
            </span>
           </div>
          </div>
         </div>
        ))}
      </div>
     </div>
     <div
      hidden={todos.length > 0}
      className="flex flex-col justify-center items-center space-y-4 h-[calc(100vh-8rem)]"
     >
      <h1 className="text-gray-800 font-medium font-sans text-4xl">
       Empty :-)
      </h1>
      <p className="text-gray-400 text-sm">No todos found!</p>
     </div>
    </div>
   </NavWithSidebar>
  </div>
 );
}

export default Home;

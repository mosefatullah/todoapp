import React from "react";
import NavWithSidebar from "../components/NavWithSidebar";
import { getTodos, addTodo, deleteTodo, changeTodoStatus } from "../utils/api";
import Alert from "../components/Alert";
import TodoModal from "../components/TodoModal";
import FormatDescription from "../components/Format";

function Home() {
 const [todos, setTodos] = React.useState([]);
 const [alert, setAlert] = React.useState({
  title: "",
  description: "",
  open: false,
  action: null,
 });
 const [todoModal, setTodoModal] = React.useState({
  data: {},
  open: false,
 });
 React.useEffect(() => {
  getTodos(
   () => {
    setTodos([]);
   },
   (data) => {
    setTodos(data.data);
   }
  );
  return () => {};
 }, [todos, todos.length]);

 React.useEffect(() => {
  if (window.location.hash && !window.location.hash.includes("home")) {
   let tid = window.location.hash.replace("#", "");
   getTodos(
    () => {
     setTodos([]);
    },
    (data) => {
     setTodos(data.data);
     let todo = data.data.filter((todo) => todo._id === tid)[0];
     if (todo) {
      openTheTodo(todo);
     } else {
      setAlert({
       title: "Error",
       description: "Todo not found!",
       open: true,
      });
     }
    }
   );
  }
  return () => {};
 }, [window.location.hash]);

 /** ALL FUNCTIONS **/
 const updateSelectedNum = () => {
  let selectedTodos = [];
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
   if (checkbox.checked) {
    selectedTodos.push(checkbox.parentElement.parentElement.parentElement.id);
   }
  });
  document.getElementById("slectedNum").innerHTML = selectedTodos.length;
 };
 const takeATodo = () => {
  document.getElementById("takeATodo1").style.display = "none";
  document.getElementById("takeATodo2").style.display = "";
  document.querySelectorAll("#takeATodo2 input")[0].focus();
 };
 const addTheTodo = () => {
  addTodo(
   {
    title: document.querySelectorAll("#takeATodo2 input")[0].value,
    description: document.querySelectorAll("#takeATodo2 textarea")[0].value,
   },
   (err) => {
    let error = err.error;
    if (error && error.includes("Todo validation failed: ")) {
     error = error.split("Todo validation failed: ")[1];
     error = error.replace(/(\w+: )+/g, "");
    }
    setAlert({
     title: "Error",
     description: error || "Failed to add todo!",
     open: true,
    });
   },
   () => {
    setTodos([]);
    document.querySelectorAll("#takeATodo2 input")[0].value = "";
    document.querySelectorAll("#takeATodo2 input")[1].value = "";
    document.getElementById("takeATodo1").style.display = "";
    document.getElementById("takeATodo2").style.display = "none";
   }
  );
 };
 const cancelTheTodo = () => {
  document.getElementById("takeATodo1").style.display = "";
  document.getElementById("takeATodo2").style.display = "none";
 };
 const selectAllTodos = () => {
  document.getElementById("selectAllTodos").style.display = "none";
  document.getElementById("deselectAllTodos").style.display = "";
  document.getElementById("deleteSelectedTodos").style.display = "";
  document.getElementById("markAsDone").style.display = "";
  document.getElementById("markAsUndone").style.display = "";
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
   checkbox.checked = true;
  });
  updateSelectedNum();
 };
 const deselectAllTodos = () => {
  document.getElementById("selectAllTodos").style.display = "";
  document.getElementById("deselectAllTodos").style.display = "none";
  document.getElementById("deleteSelectedTodos").style.display = "none";
  document.getElementById("markAsDone").style.display = "none";
  document.getElementById("markAsUndone").style.display = "none";
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
   checkbox.checked = false;
  });
  updateSelectedNum();
 };
 const deleteSelectedTodos = () => {
  let selectedTodos = [];
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
   if (checkbox.checked) {
    selectedTodos.push(
     checkbox.parentElement.parentElement.parentElement.parentElement.id
    );
   }
  });
  if (selectedTodos.length <= 0) {
   setAlert({
    title: "Error",
    description: "No todos were selected!",
    open: true,
   });
   return;
  }
  setAlert({
   title: "Delete Todo(s)",
   description: "Are you sure you want to delete the selected todo(s)?",
   open: true,
   cancelAction: "yes",
   action: () => {
    selectedTodos.forEach((todoId) => {
     let tid = todoId.replace("todo_", "");
     deleteTodo(
      tid,
      (err) => {
       setAlert({
        title: "Error",
        description: err.error || "Failed to delete todo!",
        open: true,
       });
      },
      () => {
       setTodos([]);
       unselectTodos();
      }
     );
    });
    setAlert({
     title: "Success",
     description: "Todos deleted successfully!",
     open: true,
    });
   },
  });
 };
 const toggleCheckOfTodo = (todoId) => {
  let timer = null;
  if (timer) clearTimeout(timer);
  timer = setTimeout(function () {
   let a = document.querySelector("#todo_" + todoId + " input[type=checkbox]");
   a.checked = !a.checked;
   if (a.checked === true) {
    document.getElementById("selectAllTodos").style.display = "none";
    document.getElementById("deselectAllTodos").style.display = "";
    document.getElementById("deleteSelectedTodos").style.display = "";
    document.getElementById("markAsDone").style.display = "";
    document.getElementById("markAsUndone").style.display = "";
   }
   let allUnchecked = true;
   document
    .querySelectorAll(".todo input[type=checkbox]")
    .forEach((checkbox) => {
     if (checkbox.checked) {
      allUnchecked = false;
     }
    });
   if (allUnchecked) {
    document.getElementById("selectAllTodos").style.display = "";
    document.getElementById("deselectAllTodos").style.display = "none";
    document.getElementById("deleteSelectedTodos").style.display = "none";
    document.getElementById("markAsDone").style.display = "none";
    document.getElementById("markAsUndone").style.display = "none";
   }
   updateSelectedNum();
  }, 100);
 };
 const openTheTodo = (todo) => {
  window.location.href = "/#" + todo._id;
  setTodoModal({
   data: todo,
   open: true,
  });
 };
 const changeStatusOfTodo = (status, singleId) => {
  let selectedTodos = [];
  if (singleId) {
   selectedTodos.push("todo_" + singleId);
   console.log(selectedTodos);
  } else {
   document
    .querySelectorAll(".todo input[type=checkbox]")
    .forEach((checkbox) => {
     if (checkbox.checked) {
      selectedTodos.push(
       checkbox.parentElement.parentElement.parentElement.parentElement.id
      );
     }
    });
  }
  if (selectedTodos.length <= 0) {
   setAlert({
    title: "Error",
    description: "No todos were selected!",
    open: true,
   });
  } else {
   setAlert({
    title: "Mark as " + status.charAt(0).toUpperCase() + status.slice(1),
    description:
     "Are you sure you want to mark the selected todo(s) as " + status + "?",
    open: true,
    cancelAction: "yes",
    action: () => {
     selectedTodos.forEach((todoId) => {
      let tid = todoId.replace("todo_", "");
      changeTodoStatus(
       tid,
       status,
       (err) => {
        setAlert({
         title: "Error",
         description: err.error || "Failed to mark as " + status + "!",
         open: true,
        });
       },
       () => {
        setTodos([]);
        unselectTodos();
       }
      );
     });
    },
   });
  }
 };
 const unselectTodos = () => {
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
   checkbox.checked = false;
  });
  document.getElementById("selectAllTodos").style.display = "";
  document.getElementById("deselectAllTodos").style.display = "none";
  document.getElementById("deleteSelectedTodos").style.display = "none";
  document.getElementById("markAsDone").style.display = "none";
  document.getElementById("markAsUndone").style.display = "none";
  updateSelectedNum();
 };

 return (
  <div>
   <Alert
    title={alert.title}
    description={alert.description}
    open={alert.open}
    confirmAction={(value) => {
     if (alert.action) alert.action();
     setAlert({ ...alert, open: value });
    }}
    cancelAction={
     alert.cancelAction
      ? (s) => {
         setAlert({ ...alert, open: s });
        }
      : "no"
    }
   />
   <TodoModal
    data={todoModal.data}
    open={todoModal.open}
    changeTodoStatus={(status, singleId) =>
     changeStatusOfTodo(status, singleId)
    }
    cancelAction={(s) => {
     setTodoModal({ ...todoModal, open: s });
     window.location.hash = "home";
    }}
   />
   <NavWithSidebar>
    <div>
     <div className="w-full p-4 flex flex-col justify-center items-center">
      <div
       id="takeATodo1"
       className="w-full px-4 py-3 max-w-[500px] bg-white text-gray-600 shadow-md border rounded-md cursor-text"
       onClick={takeATodo}
      >
       Take a todo...
      </div>
      <div
       id="takeATodo2"
       className="w-full px-4 py-3 max-w-[500px] bg-white text-gray-600 shadow-md border rounded-md cursor-text"
       style={{ display: "none" }}
      >
       <input
        type="text"
        className="w-full outline-none placeholder-slate-500"
        placeholder="Title"
       />
       <textarea
        className="w-full text-sm mt-5"
        placeholder="Description ..."
        rows="3"
       />
       <div className="flex justify-between items-center mt-5">
        <div className="flex items-center space-x-2">
         <button
          id="addImage"
          className="px-1 py-1 text-sm bg-gray-200 text-gray-500 rounded-md font-medium hover:bg-gray-300 transition duration-200 ease-in-out"
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
           className="w-5 h-5"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
           />
          </svg>
         </button>
        </div>
        <div className="flex items-center space-x-2">
         <button
          className="px-4 py-[5px] text-sm bg-blue-500 text-white rounded-md font-medium shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
          onClick={addTheTodo}
         >
          Add Todo
         </button>
         <button
          className="px-4 py-[5px] text-sm bg-gray-200 text-gray-500 rounded-md font-medium hover:bg-gray-300 transition duration-200 ease-in-out"
          onClick={cancelTheTodo}
         >
          Cancel
         </button>
        </div>
       </div>
      </div>
     </div>
     <div className="todoTool max-w-3xl overflow-x-scroll">
      <div className="flex space-x-2 justify-between items-center px-4 py-4 border-b bg-white border-gray-300 max-w-xl mx-auto whitespace-nowrap">
       <div>
        <span className="text-gray-500 text-sm ml-auto">
         <span id="slectedNum">0</span> selected
        </span>
       </div>
       <div className="flex space-x-2">
        <div>
         <button
          className="flex px-2 pr-3 py-1 text-sm bg-green-200 text-green-500 rounded-md font-medium hover:bg-green-300 transition duration-200 ease-in-out"
          id="markAsDone"
          style={{ display: "none" }}
          onClick={() => {
           changeStatusOfTodo("done");
          }}
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="w-5 h-5"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
           />
          </svg>
          <span className="ml-1">Done</span>
         </button>
        </div>
        <div>
         <button
          className="flex px-2 pr-3 py-1 text-sm bg-purple-200 text-purple-500 rounded-md font-medium hover:bg-purple-300 transition duration-200 ease-in-out"
          id="markAsUndone"
          style={{ display: "none" }}
          onClick={() => {
           changeStatusOfTodo("undone");
          }}
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="w-5 h-5"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
           />
          </svg>
          <span className="ml-1">Undone</span>
         </button>
        </div>
        <div>
         <button
          className="flex px-2 pr-3 py-1 text-sm bg-red-200 text-red-500 rounded-md font-medium hover:bg-red-300 transition duration-200 ease-in-out"
          id="deleteSelectedTodos"
          style={{ display: "none" }}
          onClick={deleteSelectedTodos}
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="w-5 h-5"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
           />
          </svg>
          <span className="ml-1">Delete</span>
         </button>
        </div>
        <div>
         <button
          className="flex px-2 pr-3 py-1 text-sm bg-gray-200 text-gray-500 rounded-md font-medium hover:bg-gray-300 transition duration-200 ease-in-out"
          id="selectAllTodos"
          onClick={selectAllTodos}
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
           className="w-5 h-5"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 13l4 4L19 7"
           />
          </svg>
          <span className="ml-1">Select All</span>
         </button>
         <button
          className="flex px-2 pr-3 py-1 text-sm bg-blue-200 text-blue-500 rounded-md font-medium hover:bg-blue-300 transition duration-200 ease-in-out"
          style={{ display: "none" }}
          id="deselectAllTodos"
          onClick={deselectAllTodos}
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="w-5 h-5"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
           />
          </svg>
          <span className="ml-1">Deselect All</span>
         </button>
        </div>
       </div>
      </div>
     </div>
     <div className="flex justify-center max-w-3xl">
      <div
       className="w-full mt-7 divide-y divide-gray-300 max-w-lg space-y-4 mb-16"
       hidden={todos.length <= 0}
      >
       {todos.length > 0 &&
        todos.map((todo) => (
         <div
          className="todo p-4 flex justify-between items-center cursor-pointer hover:shadow-md transition duration-200 ease-in-out active:bg-blue-50 active:transition-none active:shadow-none select-none"
          key={todo._id}
          id={"todo_" + todo._id}
          onClick={() => {
           toggleCheckOfTodo(todo._id);
          }}
         >
          <div className="w-full flex items-start justify-between">
           <div className="flex">
            <div>
             <input
              type="checkbox"
              className="mr-3 cursor-pointer"
              onClick={(e) => {
               e.stopPropagation();
              }}
             />
            </div>
            <div className="flex flex-col space-y-2">
             <h1
              className={
               "text-gray-800 cursor-pointer font-medium" +
               (todo.status === "done" ? " line-through text-red-600" : "")
              }
             >
              {todo.title || "Untitled"}
             </h1>
             <p className="text-gray-500 cursor-pointer text-sm line-clamp-2">
              <FormatDescription>
               {todo.description || "No description"}
              </FormatDescription>
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
           <div className="flex items-center">
            <button
             className="p-[1px] text-sm bg-gray-200 text-gray-500 rounded-md font-medium hover:bg-gray-300 transition duration-200 ease-in-out"
             onClick={() => {
              toggleCheckOfTodo(todo._id);
              openTheTodo(todo);
             }}
            >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
             >
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M15 12l-3 3-3-3"
              />
             </svg>
            </button>
           </div>
          </div>
         </div>
        ))}
      </div>
     </div>
     {todos.length <= 0 && (
      <div className="flex flex-col justify-center items-center space-y-4 h-[calc(100vh-8rem)]">
       <h1 className="text-gray-800 font-medium font-sans text-4xl">
        Empty :-)
       </h1>
       <p className="text-gray-400 text-sm">No todos found!</p>
      </div>
     )}
    </div>
   </NavWithSidebar>
  </div>
 );
}

export default Home;

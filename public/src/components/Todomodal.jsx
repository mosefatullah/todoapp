import React from "react";
import { updateTodo } from "../utils/api";
import FormatDescription from "./Format";

function TodoModal({ data, open, cancelAction, changeTodoStatus }) {
 const [openAlert, setOpen] = React.useState(open || false);
 const [todoDescription, setTodoDescription] = React.useState("");

 React.useEffect(() => {
  setOpen(open);
 }, [open]);

 React.useEffect(() => {
  const modal = document.querySelector(".todoModal");
  if (openAlert == true) {
   modal.style.opacity = 0;
   modal.style.transform = "scale(0.5)";
   setTimeout(() => {
    modal.style.opacity = 1;
    modal.style.transform = "scale(1)";
   }, 100);
   setTodoDescription(
    <FormatDescription>
     {data.description || "No description"}
    </FormatDescription>
   );
  }
  return () => {
   try {
    document.querySelector(".todoBase p").contentEditable = false;
    document.querySelector(".todoBase h3").contentEditable = false;
    document.querySelector("#editTodo").style.display = "";
    document.querySelector("#saveEditTodo").style.display = "none";
    document.querySelector("#cancelEditTodo").style.display = "none";
   } catch (error) {}
  };
 }, [openAlert]);

 const handleCancel = () => {
  if (cancelAction) cancelAction(false);
  setOpen(false);
 };
 return (
  <div
   className="relative z-[200]"
   style={{ display: openAlert ? "block" : "none" }}
  >
   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
   <div className="fixed overflow-y-auto inset-0 z-10 w-screen h-screen">
    <div onClick={handleCancel} className="absolute inset-0 z-0"></div>
    <div
     className="todoModal flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 transition-all"
     style={{
      display: openAlert ? "block" : "none",
     }}
    >
     <div
      className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-w-[300px]"
      style={{
       marginLeft: "50%",
       transform: "translate(-50%, 0)",
      }}
     >
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 min-h-52">
       <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"></div>
        <div className="todoBase mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
         <h3
          className="text-base font-semibold leading-6 text-gray-900"
          id="modal-title"
         >
          {data.title || "Untitled"}
         </h3>
         <div className="mt-2 mb-4">
          <p className="text-sm text-gray-500">{todoDescription}</p>
         </div>
         <div className="flex">
          <button
           type="button"
           className="w-full justify-center rounded-md bg-white px-3 py-1 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto mr-2"
           onClick={() => {
            document.querySelector(".todoBase p").contentEditable = true;
            setTodoDescription(
             data.description.split("\n").map((line, index, arr) => (
              <React.Fragment key={index}>
               {line}
               {index !== arr.length - 1 && <br />}
              </React.Fragment>
             )) || "No description"
            );
            document.querySelector(".todoBase h3").contentEditable = true;
            document.querySelector(".todoBase h3").innerText = data.title;
            document.querySelector(".todoBase h3").focus();
            document.querySelector("#editTodo").style.display = "none";
            document.querySelector("#saveEditTodo").style.display = "";
            document.querySelector("#cancelEditTodo").style.display = "";
           }}
           id="editTodo"
          >
           Edit
          </button>
          <button
           type="button"
           className="w-full justify-center rounded-md bg-white px-3 py-1 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto mr-2"
           onClick={() => {
            document.querySelector(".todoBase p").contentEditable = false;
            document.querySelector(".todoBase h3").contentEditable = false;
            document.querySelector("#editTodo").style.display = "";
            document.querySelector("#saveEditTodo").style.display = "none";
            document.querySelector("#cancelEditTodo").style.display = "none";
            let desc = document.querySelector(".todoBase p").innerText;
            desc = desc.replaceAll(/<br>/g, "\\n");
            updateTodo(
             data._id,
             {
              title: document.querySelector(".todoBase h3").innerText,
              description: desc,
             },
             () => {
              window.location.reload();
             }
            );
           }}
           style={{ display: "none" }}
           id="saveEditTodo"
          >
           Save
          </button>
          <button
           type="button"
           className="w-full justify-center rounded-md bg-white px-3 py-1 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto mr-2"
           onClick={() => {
            cancelAction(false);
           }}
           style={{ display: "none" }}
           id="cancelEditTodo"
          >
           Cancel
          </button>
         </div>
        </div>
       </div>
      </div>
      <div className="px-4 py-3 sm:flex sm:space-x-3 sm:justify-end sm:px-6 border-t">
       <button
        type="button"
        className={
         "mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto " +
         (data.status === "done"
          ? "bg-red-50 text-red-700 hover:bg-red-100"
          : "bg-green-50 text-green-700 hover:bg-green-100")
        }
        onClick={() => {
         if (changeTodoStatus)
          changeTodoStatus(
           data.status === "done" ? "undone" : "done",
           data._id
          );
         handleCancel();
        }}
       >
        Mark as {data.status === "done" ? "undone" : "done"}
       </button>
       {cancelAction !== "no" && (
        <button
         type="button"
         className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
         onClick={handleCancel}
        >
         Cancel
        </button>
       )}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default TodoModal;

import React from "react";

function TodoModal({ data, open, cancelAction, changeTodoStatus }) {
 const [openAlert, setOpen] = React.useState(open || false);

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
  }
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
      className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
      style={{
       marginLeft: "50%",
       transform: "translate(-50%, 0)",
      }}
     >
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 min-h-52">
       <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"></div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
         <h3
          className="text-base font-semibold leading-6 text-gray-900"
          id="modal-title"
         >
          {data.title || "Untitled"}
         </h3>
         <div className="mt-2">
          <p className="text-sm text-gray-500">
           {data.description || "No description"}
          </p>
         </div>
        </div>
       </div>
      </div>
      <div className="px-4 py-3 sm:flex sm:space-x-3 sm:justify-end sm:px-6">
       {cancelAction !== "no" && (
        <>
         <button
          type="button"
          className={
           "mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto " +
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
         <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={handleCancel}
         >
          Cancel
         </button>
        </>
       )}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default TodoModal;

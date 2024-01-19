import React from "react";

function Alert({
 title,
 description,
 confirmText,
 cancelText,
 confirmAction,
 cancelAction,
 open,
}) {
 const [openAlert, setOpen] = React.useState(open || false);

 React.useEffect(() => {
  setOpen(open);
 }, [open]);

 const handleConfirm = () => {
  if (confirmAction) confirmAction(false);
  setOpen(false);
 };
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
    <div
     className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 transition-all"
     style={{
      display: openAlert ? "block" : "none"
     }}
    >
     <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-w-[300px]"
     style={{
      marginLeft: "50%",
      transform: "translate(-50%, 0)",
     }}>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
       <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
         <svg
          className="h-6 w-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
         </svg>
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
         <h3
          className="text-base font-semibold leading-6 text-gray-900"
          id="modal-title"
         >
          {title || "Todo Application"}
         </h3>
         <div className="mt-2">
          <p className="text-sm text-gray-500">{description}</p>
         </div>
        </div>
       </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
       <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        onClick={handleConfirm}
       >
        {confirmText || "Ok"}
       </button>
       {cancelAction !== "no" && (
        <button
         type="button"
         className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
         onClick={handleCancel}
        >
         {cancelText || "Cancel"}
        </button>
       )}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Alert;

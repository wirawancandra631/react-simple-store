import React from "react";

function Modal({ children, onClose }) {
  return (
    <div className="z-[50] w-full h-screen fixed top-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="md:w-[35%] w-[95%] mx-auto bg-slate-50 rounded ">
        
 
        <div className="w-full p-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;

import React, { useState } from "react";
import ModalDialog from "./ModalDialog";

export default function AddBtn() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const onModalClose = ()=>{
    setisModalOpen(false)
  }

  return (
    <div className="text-gray-300 flex items-end justify-end my-12 py-8 z-10">
      <button
        className="rounded-full p-2 px-4 bg-orange-600 text-black"
        onClick={() => setisModalOpen(true)}
      >
        +
      </button>
      <ModalDialog open={isModalOpen} onModalClose={onModalClose}/>
    </div>
  );
}

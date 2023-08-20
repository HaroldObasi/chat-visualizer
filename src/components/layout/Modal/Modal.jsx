import { useGlobalContext } from "@/contexts/AppContext";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ children }) => {
  const { modalOpen, setModalOpen } = useGlobalContext();
  const [isBrowser, setIsBrowser] = useState(null);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!modalOpen) {
    return;
  }

  const Wrapper = () => (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30"></div>
      <div className="bg-zinc-300 py-5 z-40 px-3 rounded-md shadow-md mx-40">
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-400"
          onClick={() => setModalOpen(false)}
        >
          <AiOutlineCloseCircle size={30} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );

  if (isBrowser) {
    return createPortal(Wrapper(), document.getElementById("modal"));
  }

  return null;
};

export default Modal;

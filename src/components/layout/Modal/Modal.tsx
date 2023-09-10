import { useGlobalContext } from "../../../contexts/AppContext";
import React, { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

type ModalProps = {
  children: any;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { modalOpen, setModalOpen } = useGlobalContext();
  const [isBrowser, setIsBrowser] = useState<any>(null);

  const handleCloseModal = () => {
    setModalOpen(false);
    if (children?.type?.name == "OnBoardModal") {
      localStorage.setItem("onBoarded", "true");
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    if (localStorage.getItem("onBoarded") === "true") {
      setModalOpen(false);
    }
  }, []);

  if (!modalOpen) {
    return;
  }

  const Wrapper = () => (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30"></div>
      <div className="bg-zinc-300 py-5 z-40 px-3 rounded-md shadow-md mx-5 xs:mx-5 sm:w-[450px]">
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-400"
          onClick={() => handleCloseModal()}
        >
          <AiOutlineCloseCircle size={30} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );

  if (isBrowser) {
    return createPortal(Wrapper(), document.getElementById("modal")!);
  }

  return null;
};

export default Modal;

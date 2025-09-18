import React, { useState } from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";

export default function FeatureCardLP({
  icon,
  title,
  description,
  className,
  hasModal = false,
  modalContent,
}) {
  const [visible, setVisible] = useState(false);

  // só renderiza modal se hasModal for true
  const renderModal = () => {
    if (!hasModal) return null;

    return (
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={title}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    );
  };

  return (
    <>
      <MotionDivDownToUp
        className={`bg-neutral-100 rounded-xl w-full flex tablet2:w-[60%] desktop1:w-[60%] desktop2:w-[45%] flex-col items-center desktop1:hover:scale-110 px-[18px] py-[18px] ${className}`}
        onClick={() => hasModal && setVisible(true)} // abre modal somente se tiver modal
      >
        <div className="h-[64px] w-[64px] mb-[24px] bg-bgSectionDark rounded-md flex justify-center items-center text-white">
          {icon}
        </div>
        <h1 className="h-auto leading-[28px] font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
          {title}
        </h1>
        <p className="text-center desktop1:text-start text-black opacity-70 font-mainFont w-[90%] text-paragraph3">
          {description}
        </p>
      </MotionDivDownToUp>

      {renderModal()}
    </>
  );
}

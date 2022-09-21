import React from "react"
import ModalWrapper from "./ModalWrapper"
import { IoClose } from "react-icons/io5"
import classNames from "classnames"

const ConfirmModal = ({ isShowing, setShowing, text, deleteAction }) => {
  const handleUndo = () => {
    setShowing(false)
  }

  return (
    <ModalWrapper
      isShowing={isShowing}
      setShowing={setShowing}
      center
      overlayBg='#676767'
    >
      <div className='p-4 gap-2 flex flex-col bg-white rounded-xl text-normalText relative'>
        {/* Close button */}
        <button
          className='p-1 bg-mainBackground transition hover:bg-hoverBackground2 rounded-full absolute right-4 top-4'
          onClick={() => setShowing(false)}
        >
          <IoClose className='text-lg' />
        </button>

        <h3 className='font-semibold text-black text-base'>Confirm</h3>
        <p>{text}</p>
        <div className='flex justify-between gap-2 font-medium mt-1'>
          <button
            className='flex-1 text-center p-2 rounded-lg bg-mainBackground hover:bg-hoverBackground2 transition'
            onClick={() => setShowing(false)}
          >
            Cancel
          </button>
          <button
            className={classNames([
              "flex-1 text-center text-white p-2 rounded-lg transition",
              !deleteAction
                ? "bg-primaryColor hover:bg-hoverBackground1"
                : "bg-errorColor hover:bg-hoverBackground3",
            ])}
            onClick={handleUndo}
          >
            Undo
          </button>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default ConfirmModal

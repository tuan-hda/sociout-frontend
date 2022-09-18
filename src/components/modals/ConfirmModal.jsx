import React from "react"
import ModalWrapper from "./ModalWrapper"

const ConfirmModal = ({ isShowing, setShowing, text }) => {
  const handleUndo = () => {}

  return (
    <ModalWrapper
      isShowing={isShowing}
      setShowing={setShowing}
      center
      overlayBg='#676767'
    >
      <div className='p-4 gap-2 flex flex-col bg-white rounded-xl text-normalText'>
        <h3 className='font-semibold text-black text-base'>Confirm</h3>
        <p>{text}</p>
        <div className='flex justify-between -mb-2 gap-2 font-medium mt-1'>
          <button
            className='flex-1 text-center p-2 rounded-lg bg-mainBackground hover:bg-hoverBackground2 transition'
            onClick={() => setShowing(false)}
          >
            Cancel
          </button>
          <button
            className='flex-1 text-center text-white p-2 rounded-lg bg-primaryColor transition hover:bg-hoverBackground1'
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

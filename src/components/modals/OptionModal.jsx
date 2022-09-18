import classNames from "classnames"
import React from "react"
import ModalWrapper from "./ModalWrapper"

const OptionModal = ({ isShowing, setShowing, menuList }) => {
  return (
    <ModalWrapper
      isShowing={isShowing}
      setShowing={setShowing}
      top='24px'
      right='0'
    >
      <ul className='text-normalText p-3'>
        {menuList.map(([children, className, onClick], index) => (
          <li
            className={classNames([
              "p-3 button-hover rounded-xl whitespace-nowrap mr-1",
              className ? className : "text-textColor",
            ])}
            key={index}
            onClick={onClick}
          >
            {children}
          </li>
        ))}
      </ul>
    </ModalWrapper>
  )
}

export default OptionModal

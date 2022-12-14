import classNames from "classnames"
import React from "react"
import { useEffect } from "react"

// props
// - isShowing, setShowing: state to manage display of modal
// - center: center this modal
// - overlayBg: overlay background color
// - bodyClassname,
// - top, left, right, transform
const ModalWrapper = (props) => {
  const {
    isShowing,
    setShowing,
    center,
    overlayBg,
    bodyClassname,
    top,
    left,
    right,
    transform,
    children,
  } = props

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowing(false)
      }
    }

    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [setShowing])

  return (
    <div
      onMouseUp={(e) => e.stopPropagation()}
      className={classNames([
        "top-0 left-0 w-full z-20 transition cursor-default",
        center
          ? "items-center justify-center flex fixed right-0 bottom-0"
          : "absolute",
        !isShowing && "hidden",
      ])}
    >
      {/* Overlay */}
      <div
        className='fixed top-0 bottom-0 left-0 right-0 cursor-default opacity-50'
        style={{
          backgroundColor: overlayBg,
        }}
        onClick={(e) => {
          e.stopPropagation()
          setShowing(false)
        }}
      />

      {/* Body */}
      <div
        className={classNames([
          "absolute bg-white rounded-xl shadow-primary",
          bodyClassname ?? "",
        ])}
        style={{
          top: top,
          left: left,
          right: right,
          transform: transform,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalWrapper

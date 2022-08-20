import React from 'react'

const ModalWrapper = props => {
  const { isShowing, setShowing } = props

  return (
    <div
      className={`${
        isShowing ? 'absolute' : 'opacity-0 pointer-events-none'
      } top-0 left-0`}
    >
      {/* Overlay */}
      <div
        className='fixed top-0 bottom-0 left-0 right-0 cursor-default opacity-50'
        style={{
          backgroundColor: props.overlayBg
        }}
        onClick={e => {
          e.stopPropagation()
          setShowing(false)
        }}
      />

      {/* Body */}
      <div
        className='absolute bg-white rounded-xl shadow-primary'
        style={{
          top: props.top,
          left: props.left
        }}
        onClick={e => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  )
}

export default ModalWrapper

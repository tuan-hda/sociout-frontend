import classNames from 'classnames'
import React from 'react'
import { useEffect } from 'react'

const ModalWrapper = props => {
  const { isShowing, setShowing } = props

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        setShowing(false)
      }
    }

    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [setShowing])

  return (
    <div
      onMouseUp={e => e.stopPropagation()}
      onKeyDown={e => console.log(e)}
      className={classNames([
        'top-0 left-0 w-full z-10 transition',
        props.center
          ? 'items-center justify-center flex fixed right-0 bottom-0'
          : 'absolute',
        !isShowing && 'opacity-0 pointer-events-none'
      ])}
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
        className={classNames([
          'absolute bg-white rounded-xl shadow-primary',
          props.bodyClassname ?? ''
        ])}
        style={{
          top: props.top,
          left: props.left,
          right: props.right,
          transform: props.transform
        }}
        onClick={e => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  )
}

export default ModalWrapper

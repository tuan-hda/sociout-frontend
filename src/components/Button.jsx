import React from 'react'

const Button = ({
  width,
  height,
  text,
  backgroundColor,
  color,
  fontWeight,
  fontSize,
  padding,
  type
}) => {
  return (
    <button
      className={`min-w-button min-h-button flex items-center hover:opacity-90 rounded-[5px] p-4 176 
      `}
      type={type}
      style={{
        width,
        height,
        backgroundColor,
        color,
        fontWeight,
        fontSize,
        padding
      }}
    >
      <div className='w-full'>{text}</div>
    </button>
  )
}

export default Button

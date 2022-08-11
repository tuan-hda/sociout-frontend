import React from 'react'

const Button = ({ children }) => {
  return (
    <button className='bg-primaryColor text-black min-w-button py-3 rounded-full font-semibold relative w-48 hover:opacity-90'>
      {children}
    </button>
  )
}

export default Button

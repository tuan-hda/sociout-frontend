import React from 'react'

const LeftContainer = ({ children }) => {
  return (
    <div className='max-w-side min-w-[86px] flex justify-center xl:justify-start xl:flex-1'>
      {children}
    </div>
  )
}

export default LeftContainer

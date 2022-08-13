import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='max-w-container m-auto h-full xl:p-0 p-2'>{children}</div>
  )
}

export default Container

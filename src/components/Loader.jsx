import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader'

const Loader = () => {
  return (
    <div className='h-screen w-screen bg-mainBackground flex items-center justify-center z-20 fixed'>
      <MoonLoader color='#1A86F1' speedMultiplier={0.7} />
    </div>
  )
}

export default Loader

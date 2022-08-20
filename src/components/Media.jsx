import React from 'react'
import { GrClose } from 'react-icons/gr'

const Media = ({ src, name, className }) => {
  return (
    <div className='relative'>
      <img
        src={src}
        alt={name}
        className={className}
        style={{
          borderRadius: '12px'
        }}
      />

      {/* Remove button */}
      <button className='absolute top-2 right-2 bg-gray-300 button-hover rounded-full w-8 h-8 p-2 flex items-center justify-center'>
        <GrClose />
      </button>
    </div>
  )
}

export default Media

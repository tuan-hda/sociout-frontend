import React from 'react'
import { GrClose } from 'react-icons/gr'

const Media = ({ src, name, className, removeMedia, index }) => {
  return (
    <div className='relative flex-1 aspect-square'>
      <img
        src={src}
        alt={name}
        className={className}
        style={{
          borderRadius: '12px',
          objectFit: 'cover'
        }}
      />

      {/* Remove button */}
      <button
        className='absolute top-2 right-2 bg-gray-300 button-hover rounded-full w-8 h-8 p-2 flex items-center justify-center bg-opacity-50'
        onClick={() => removeMedia(index)}
      >
        <GrClose />
      </button>
    </div>
  )
}

export default Media

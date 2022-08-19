import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const Avatar = ({ Src, props, text, marginTop }) => {
  return (
    <div
      className='items-center flex w-full'
      style={{
        marginTop
      }}
    >
      <img src={Src} alt='Avatar' {...props} className='rounded-full' />

      {text && (
        <div className='flex items-center w-full justify-between text-normalText'>
          <span className='font-bold ml-3'>{text}</span>
          <FiChevronDown className='ml-5 text-[#8B8E95]' />
        </div>
      )}
    </div>
  )
}

export default Avatar

import React from 'react'

const Avatar = ({ Src, props }) => {
  const { width } = { ...props }
  return (
    <img
      src={Src}
      alt='Avatar'
      width={width}
      height={width}
      className='rounded-full'
    />
  )
}

export default Avatar

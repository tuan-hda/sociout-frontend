import React from 'react'

const RightContainer = props => {
  return (
    <div className='max-w-side flex-1 medium:block hidden'>
      {props.children}
    </div>
  )
}

export default RightContainer

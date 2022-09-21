import React from "react"

const LeftContainer = (props) => {
  return (
    <div className='max-w-side w-16 sm:min-w-[86px] xl:flex-1 relative'>
      {props.children}
    </div>
  )
}

export default LeftContainer

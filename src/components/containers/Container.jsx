import React from 'react'

const Container = props => {
  return (
    <div
      className='max-w-container m-auto h-full xl:p-0 p-2'
      style={{
        marginTop: props.marginTop ?? 0
      }}
    >
      {props.children}
    </div>
  )
}

export default Container

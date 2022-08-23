import React from 'react'

const Container = props => {
  return (
    <div
      className='medium:max-w-medium large:max-w-container max-w-small m-auto h-full p-2'
      style={{
        marginTop: props.marginTop ?? 0
      }}
    >
      {props.children}
    </div>
  )
}

export default Container

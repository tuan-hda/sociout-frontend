import React from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

const Container = props => {
  const location = useLocation()

  return (
    <div
      className={classNames([
        'medium:max-w-medium large:max-w-container max-w-small m-auto h-full relative',
        !props.excludePath?.includes(location.pathname.substring(1)) &&
          'px-2 md:px-2'
      ])}
      style={{
        marginTop: props.marginTop ?? 0
      }}
    >
      {props.children}
    </div>
  )
}

export default Container

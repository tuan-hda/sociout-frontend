import classNames from 'classnames'
import React from 'react'

const LeftContainer = props => {
  return (
    <div
      className={classNames([
        'max-w-side w-16 sm:min-w-[86px] flex justify-center xl:justify-start xl:flex-1 h-fit relative',
        props.sticky && 'sticky top-[84px]'
      ])}
    >
      {props.children}
    </div>
  )
}

export default LeftContainer

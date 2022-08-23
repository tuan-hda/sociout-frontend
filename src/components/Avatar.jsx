import classNames from 'classnames'
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
      <div className='flex-1 items-center flex'>
        <img
          src={Src}
          alt='Avatar'
          className={classNames(['rounded-full', props ? '' : 'w-11'])}
          {...props}
        />

        {text && (
          <div
            className={classNames([
              'justify-between w-full text-normalText ml-3 xl:flex hidden items-center'
            ])}
          >
            {/* If not a post's component, display as a user component, else display as an avatar */}
            <span className='font-bold'>{text}</span>

            {/* If post's component, show time, else show down arrow */}
            <FiChevronDown className='ml-5 text-[#8B8E95]' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Avatar

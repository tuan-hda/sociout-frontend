import classNames from 'classnames'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Avatar = ({ Src, props, text, marginTop, isPost, time, id }) => {
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
              'justify-between w-full text-normalText ml-3',
              isPost ? 'flex' : 'xl:flex hidden',
              time ? 'flex-col justify-between h-10' : 'items-center'
            ])}
          >
            {/* If not a post's component, display as a user component, else display as an avatar */}
            {!isPost ? (
              <span className='font-bold'>{text}</span>
            ) : (
              <Link className='font-bold hover:underline' to={'/@' + id}>
                {text}
              </Link>
            )}
            {/* If post's component, show time, else show down arrow */}
            {!isPost ? (
              <FiChevronDown className='ml-5 text-[#8B8E95]' />
            ) : (
              <span className='text-gray-400 text-xs'>{time}</span>
            )}
          </div>
        )}
      </div>

      {/* Menu three dots */}
      {isPost && (
        <div className='p-2 button-hover rounded-full'>
          <BsThreeDots />
        </div>
      )}
    </div>
  )
}

export default Avatar

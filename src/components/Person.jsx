import classNames from 'classnames'
import React from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// Props:
// - name         => Person's name
// - time         => createdAt
// - src          => Avatar source
// - id           => Person's id
// - hideAddBtn   => Hide add friend button
const Person = props => {
  const child = (
    <p
      className={classNames([
        'font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-normalText w-full hover:underline'
      ])}
    >
      {props.name}
    </p>
  )

  return (
    <div>
      <div className='flex items-center'>
        {/* Avatar */}
        {props.time ? (
          <Link
            to={'/@' + props.id}
            className='max-w-[40px] block w-10 float-left'
          >
            <img
              src={props.src}
              alt="Person's avatar"
              className='w-10 h-10 rounded-full'
            />
          </Link>
        ) : (
          <div>
            <img
              src={props.src}
              alt="Person's avatar"
              className='w-10 h-10 rounded-full'
            />
          </div>
        )}

        {/* Time / id */}
        <div className='ml-2 flex-1 min-w-0 flex items-center justify-between gap-2'>
          <div className='flex-1 min-w-0'>
            {props.underline ? (
              <Link className='w-full' to={'/@' + props.id}>
                {child}
              </Link>
            ) : (
              child
            )}
            <p className='mt-1 text-idColor text-[13px] leading-4'>
              {props.time ? props.time : '@' + props.id}
            </p>
          </div>

          {/* Add friend / More button   */}
          {!props.hideAddBtn && (
            <button className='w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition rounded-full'>
              <BiUserPlus className='fill-primaryColor text-xl' />
            </button>
          )}

          {/* Time */}
          {props.time && (
            <div className='p-2 button-hover rounded-full'>
              <BsThreeDots />
            </div>
          )}
        </div>
      </div>

      {/* Bio */}
      {props.bio && (
        <div className='text-normalText text-textColor ml-12 mt-1'>
          {props.bio}
        </div>
      )}
    </div>
  )
}

export default Person

import classNames from 'classnames'
import React from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Person = props => {
  const child = (
    <p
      className={classNames([
        'font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-normalText block',
        props.time
          ? 'w-56 lg:w-[120%] md:w-full sm:w-10/12 hover:underline'
          : 'w-44'
      ])}
    >
      {props.name}
    </p>
  )

  return (
    <div className='flex items-center'>
      {props.time ? (
        <Link to={'/@' + props.id}>
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

      <div className='flex-1 ml-2 flex items-center justify-between text-base'>
        <div>
          {props.time ? <Link to={'/@' + props.id}>{child}</Link> : child}
          <p className='mt-1 text-idColor text-[13px] leading-4'>
            {props.time ?? '@' + props.id}
          </p>
        </div>

        {/* Add friend button */}
        {!props.time ? (
          <button className='w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition rounded-full'>
            <BiUserPlus className='fill-primaryColor text-xl' />
          </button>
        ) : (
          <div className='p-2 button-hover rounded-full'>
            <BsThreeDots />
          </div>
        )}
      </div>
    </div>
  )
}

export default Person

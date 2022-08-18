import React from 'react'
import { BiUserPlus } from 'react-icons/bi'

const Person = props => {
  return (
    <div className='flex items-center'>
      <img
        src={props.src}
        alt="Person's avatar"
        className='w-10 h-10 rounded-full'
      />

      <div className='flex-1 ml-2 flex items-center justify-between text-base'>
        <div>
          <p className='font-semibold'>{props.name}</p>
          <p className='-mt-2 text-textColor'>@{props.id}</p>
        </div>

        {/* Add friend button */}
        <button className='w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition rounded-full'>
          <BiUserPlus className='fill-primary' />
        </button>
      </div>
    </div>
  )
}

export default Person

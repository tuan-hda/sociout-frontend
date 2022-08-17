import React from 'react'
import capitalize from '../utils/capitalize'
import { IoClose } from 'react-icons/io5'

const ErrorMessage = ({ clearErrors, errors }) => {
  return (
    <div className='w-full relative rounded-[10px] bg-[#FFEBE9] border-[1px] border-[#DE5F67] p-4 mt-5 text-[0.925rem] space-y-1 leading-[18px]'>
      {/* Close button */}
      <button
        className='absolute right-0 top-0 p-2'
        onClick={() => clearErrors()}
      >
        <IoClose className='text-[#DE5F67] text-lg' />
      </button>

      {Object.keys(errors).map((key, index) => (
        <p className='font-light' key={index}>
          {capitalize(errors[key].message)}.
        </p>
      ))}
    </div>
  )
}

export default ErrorMessage

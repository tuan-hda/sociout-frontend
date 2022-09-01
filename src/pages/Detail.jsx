import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { Post } from '../components'

const Detail = () => {
  const navigate = useNavigate()

  return (
    <div className='bg-white rounded-xl'>
      {/* Header */}
      <header className='h-10 flex items-center p-4 pt-[38px]'>
        <div
          className='button-hover rounded-full p-2 text-xl'
          data-tip='Go back'
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </div>

        <h2 className='font-bold text-lg ml-4'>Detail</h2>
      </header>

      {/* Detail */}
      <Post type='detail' />
    </div>
  )
}

export default Detail

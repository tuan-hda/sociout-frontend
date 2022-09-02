import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { Comment, Post } from '../components'

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

      <Comment
        text="Sweet! I'm getting sick of all the pointless hate! Sumerubis freaking amazing! ✨😎✨"
        mediaList={[]}
        time='39 minutes ago'
        author={{
          src: require('../img/Gura.jpg'),
          name: 'Gawr Gura',
          id: 'gawrgura'
        }}
      />
    </div>
  )
}

export default Detail

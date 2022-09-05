import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { Comment, Post } from '../components'
import ModalWrapper from '../components/modals/ModalWrapper'

const Detail = () => {
  const navigate = useNavigate()
  const [isShowing, setShowing] = useState(false)

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

      {/* Comment list */}
      <div className='-mt-1 mx-6 pb-6 space-y-2'>
        <Comment
          text="Sweet! I'm getting sick of all the pointless hate! Sumerubis freaking amazing! ✨😎✨"
          mediaList={[]}
          time='39 minutes ago'
          author={{
            src: require('../img/Gura.jpg'),
            name: 'Gawr Gura',
            id: 'gawrgura'
          }}
          replies={32}
        />

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

        <Comment
          text="Sweet! I'm getting sick of all the pointless hate! Sumerubis freaking amazing! ✨😎✨"
          mediaList={[]}
          time='39 minutes ago'
          author={{
            src: require('../img/Gura.jpg'),
            name: 'Gawr Gura',
            id: 'gawrgura'
          }}
          replies={32}
        />
      </div>

      <ModalWrapper
        center
        isShowing={isShowing}
        setShowing={setShowing}
      ></ModalWrapper>
    </div>
  )
}

export default Detail

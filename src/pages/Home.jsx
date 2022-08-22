import React from 'react'
import { CreatePost } from '../components/index'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { useState } from 'react'
import ModalWrapper from '../components/modals/ModalWrapper'
import classNames from 'classnames'

const Home = () => {
  const [order, changeOrder] = useState('Top')
  const [isShowing, setShowing] = useState(false)

  const onClick = s => {
    changeOrder(s)
    setShowing(false)
  }

  return (
    <div>
      <CreatePost />

      {/* Sort by */}
      <div className='mt-3 flex items-center justify-end'>
        <span className='text-gray-500 text-[13px] font-medium'>Sort by: </span>
        <div className='w-20 justify-center flex flex-col items-end relative'>
          <span
            className='font-semibold text-[13px] ml-1 cursor-pointer text-right'
            onClick={() => setShowing(true)}
          >
            {order} <FiChevronDown className='inline ml-1' />
          </span>

          {/* Modal */}
          <ModalWrapper
            isShowing={isShowing}
            setShowing={setShowing}
            top='0px'
            left='-160px'
            transform='translate(50%)'
          >
            <ul className='px-5 pt-5 pb-2 text-sm w-52'>
              <h4 className='font-semibold mb-3 text-normalText'>Sort by</h4>
              {['Top', 'Recent'].map((s, i) => (
                <li
                  key={i}
                  className={classNames([
                    '-mx-3 p-3 text-sm button-hover rounded-2xl flex justify-between items-center',
                    s === order ? 'font-semibold text-primaryColor' : ''
                  ])}
                  onClick={() => onClick(s)}
                >
                  {s} {s === order && <FiCheck />}
                </li>
              ))}
            </ul>
          </ModalWrapper>
        </div>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import { useState } from 'react'
import { BiHide } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import OptionModal from './modals/OptionModal'

const Comment = ({ text, mediaList, author }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='px-6 pb-6'>
      {/* Person */}
      <div className='flex items-start min-w-0'>
        <Link to={'/@' + author.id} className='flex items-center w-10'>
          <img
            className='w-10 rounded-full'
            src={author.src}
            alt="Author's avatar"
          />
        </Link>
        {/* Comment, Name, Time */}
        <div className='ml-4 px-3 py-2 rounded-2xl bg-mainBackground'>
          <div className='flex items-center justify-between'>
            <Link
              to={'/@' + author.id}
              className='font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-normalText w-full hover:underline'
            >
              {author.name}
            </Link>

            <div className='relative'>
              <button
                className='rounded-full hover:bg-lightBackground p-2 -mr-2 -mt-1 transition'
                onClick={() => setShowMore(true)}
              >
                <BsThreeDots className='' />
              </button>

              <OptionModal
                isShowing={showMore}
                setShowing={setShowMore}
                menuList={[
                  [
                    <p className='flex items-center'>
                      <BiHide className='text-lg mr-3' /> Hide this comment
                    </p>
                  ]
                ]}
              />
            </div>
          </div>

          <p className='text-normalText mt-1 text-textColor'>{text}</p>
        </div>
      </div>

      {/* Button */}
      <div className='flex items-center text-[13px] ml-[68px] mt-1 font-medium'>
        <button className='hover:font-semibold w-10 text-left'>Like</button>
        <button className='hover:font-semibold w-10 text-left'>Reply</button>
        <p className='text-timeColor font-normal ml-4'>1 hour ago</p>
      </div>
    </div>
  )
}

export default Comment

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { BsThreeDots, BsLink45Deg } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import classNames from 'classnames'
import globalObject from '../utils/globalObject'

const Profile = () => {
  const [tab, setTab] = useState(0)

  const name = 'Hoàng Đình Anh Tuấn'
  const id = globalObject.id

  return (
    <div className='p-6 rounded-xl bg-white'>
      {/* Images */}
      <div className='relative -mx-6 -mt-6 max-h-[200px]'>
        {/* Background image */}
        <LazyLoadImage
          src='https://pbs.twimg.com/profile_banners/1283653858510598144/1649185576/1500x500'
          alt='Profile Bg'
          effect='blur'
          wrapperClassName='rounded-[12px_12px_0_0] overflow-hidden'
          style={{
            objectFit: 'cover'
          }}
        />

        {/* Avatar */}
        <LazyLoadImage
          src='https://pbs.twimg.com/profile_images/1551250555103633409/TFGJ_IBH_400x400.jpg'
          alt='Profile Ava'
          effect='blur'
          wrapperClassName='border-4 border-white absolute w-1/4 aspect-square rounded-full overflow-hidden left-4 bottom-0 translate-y-1/2'
        />
      </div>

      {/* Edit and Option button */}
      <div className='ml-[calc(25%+12px)] -mr-2 mt-3 flex justify-end gap-4'>
        <button className='p-2 button-hover rounded-full'>
          <BsThreeDots />
        </button>

        <button className='hover:opacity-90 transtion bg-primaryColor rounded-lg text-white font-medium text-sm flex items-center justify-center px-2 gap-2'>
          <FiEdit2 />
          <span>Edit profile</span>
        </button>
      </div>

      {/* Information */}
      <div className='mt-[7%] text-textColor text-normalText'>
        {/* Name and Id */}
        <h3 className='font-bold text-xl'>{name}</h3>
        <p className='text-idColor'>@{id}</p>

        {/* Bio */}
        <div className='mt-4'>
          The Grim Reaper is a music maker. MAJOR DEBUT ALBUM COMING DECEMBER
          2022 (UMG) // mama
        </div>

        {/* Location */}
        <div className='mt-3 flex items-center'>
          <IoLocationOutline className='text-idColor text-xl' />
          <span className='ml-1'>Washington, D.C.</span>
        </div>

        {/* Link */}
        <div className='flex items-center'>
          <BsLink45Deg className='text-idColor text-xl' />
          <a
            href='https://www.youtube.com/channel/UCL_qhgtOy0dy1Agp8vkySQg'
            className='ml-1 text-linkColor overflow-hidden whitespace-nowrap text-ellipsis w-64'
            target='blank'
          >
            www.youtube.com/channel/UCL_qhgtOy0dy1Agp8vkySQg
          </a>
        </div>

        {/* Joined date */}
        <div className='flex items-center'>
          <AiOutlineCalendar className='text-idColor text-lg' />
          <span className='ml-1'>Joined July 2020</span>
        </div>

        {/* Following & Followers */}
        <div className='text-normalText text-textColor flex items-center gap-6 mt-3'>
          <Link to={'/@' + id + '/following'} className='hover:underline'>
            <span className='font-semibold text-black'>476</span> Following
          </Link>
          <Link to={'/@' + id + '/followers'} className='hover:underline'>
            <span className='font-semibold text-black'>1.3M</span> Followers
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className='flex items-center mt-5'>
        {/* Navigation list */}
        <ul className='flex-1 flex items-center justify-between text-normalText font-medium text-[#B2B1B6]'>
          {['Posts', 'Media', 'Likes', 'Replies'].map((children, index) => (
            <li
              key={index}
              className={classNames([
                index === tab && 'text-black font-bold',
                'rounded-lg flex-1 pt-3'
              ])}
            >
              <button
                onClick={() => setTab(index)}
                className='outline-none hover:text-black transition'
              >
                {children}

                {/* Underline */}
                <p
                  className={classNames([
                    'w-full border-t-4 rounded-full border-primaryColor mt-2 transition',
                    tab !== index && 'opacity-0'
                  ])}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Navigation buttons */}
        <div className='flex items-center'>
          <button
            disabled={tab === 0}
            className={classNames([tab !== 0 && 'text-black'])}
            onClick={() => setTab(tab - 1)}
          >
            <BiChevronLeft className='text-xl' />
          </button>

          <button
            disabled={tab === 3}
            className={classNames([tab !== 3 && 'text-black'])}
            onClick={() => setTab(tab + 1)}
          >
            <BiChevronRight className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile

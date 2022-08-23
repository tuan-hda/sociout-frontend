import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { BsThreeDots } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'

const Profile = () => {
  const name = 'Hoàng Đình Anh Tuấn'
  const id = 'hdatdragon'

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

      {/* Name and bio*/}
      <div className='mt-[7%]'>
        <h3 className='font-bold text-xl'>{name}</h3>
        <p className='text-idColor text-normalText'>@{id}</p>
      </div>
    </div>
  )
}

export default Profile

import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Profile = () => {
  return (
    <div className='p-6 rounded-xl bg-white'>
      {/* Header */}
      <div className='relative -mx-6 -mt-6 h-[200px]'>
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
          wrapperClassName='border-4 border-white absolute w-36 h-36 rounded-full overflow-hidden left-4 bottom-0 translate-y-1/2'
        />
      </div>
    </div>
  )
}

export default Profile

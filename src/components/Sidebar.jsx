import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import { FiChevronDown } from 'react-icons/fi'
const Sidebar = () => {
  const avatarProps = {
    width: '36px'
  }

  return (
    <div>
      <div className='flex justify-end'>
        <Link to='./profile' className='flex items-center'>
          <Avatar Src={require('../img/Makima.jpg')} props={avatarProps} />
          <span className='font-bold ml-3'>Tuấn</span>
          <FiChevronDown className='ml-5 text-[#8B8E95]' />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import capitalize from '../utils/capitalize'
import {
  AiFillHome,
  AiOutlineHome,
  AiFillMessage,
  AiOutlineMessage,
  AiFillSetting,
  AiOutlineSetting
} from 'react-icons/ai'
import { RiUser3Fill, RiUser3Line } from 'react-icons/ri'
import { BsBookmarkDashFill, BsBookmarkDash } from 'react-icons/bs'
import { IoMdNotifications, IoMdNotificationsOutline } from 'react-icons/io'
import Avatar from './Avatar'

const menu = [
  {
    title: 'Home',
    icon: <AiOutlineHome />,
    selectedIcon: <AiFillHome />
  },
  {
    title: 'Messages',
    icon: <AiOutlineMessage />,
    selectedIcon: <AiFillMessage />
  },
  {
    title: 'Notifications',
    icon: <IoMdNotificationsOutline />,
    selectedIcon: <IoMdNotifications />
  },
  {
    title: 'Profile',
    icon: <RiUser3Line />,
    selectedIcon: <RiUser3Fill />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmarkDash />,
    selectedIcon: <BsBookmarkDashFill />
  },
  {
    title: 'Settings',
    icon: <AiOutlineSetting />,
    selectedIcon: <AiFillSetting />
  }
]

const Navbar = () => {
  const [currentPage, setPage] = useState('Home')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') setPage('Home')
    else setPage(capitalize(location.pathname.substring(1)))
  }, [location])

  return (
    <div className='bg-white rounded-xl p-6'>
      {/* MENU */}
      <div>
        <h2 className='font-bold text-lg'>Menu</h2>

        {/* Navigation list */}
        <ul className='mt-2'>
          {menu.map((item, index) => {
            return (
              <Link
                to={
                  '/' + (item.title === 'Home' ? '' : item.title).toLowerCase()
                }
                key={index}
                className='text-base -mx-3 px-3 py-4 block button-hover rounded-2xl'
              >
                {item.title === currentPage ? (
                  <li className='font-semibold flex items-center gap-4'>
                    <span className='text-2xl'>{item.selectedIcon}</span>
                    <span>{item.title}</span>
                  </li>
                ) : (
                  <li className='text-gray-600 flex items-center gap-4'>
                    <span className='text-2xl'>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                )}
              </Link>
            )
          })}
        </ul>
      </div>

      {/* ACCOUNT */}
      <div className='mt-10'>
        <h2 className='font-bold text-lg'>Account</h2>

        <div className='-mx-3 mt-2 px-3 py-4 button-hover rounded-2xl'>
          <Avatar
            Src={require('../img/Makima.jpg')}
            props={{ width: '36px' }}
            text='Tuấn'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar

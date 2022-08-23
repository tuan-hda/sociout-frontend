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
import globalObject from '../utils/globalObject'

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
    selectedIcon: <RiUser3Fill />,
    path: globalObject.id
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
    else if (location.pathname === '/' + globalObject.id) setPage('Profile')
    else setPage(capitalize(location.pathname.substring(1)))
  }, [location])

  const getPath = item => {
    if (item.path) return '/' + item.path
    return '/' + (item.title === 'Home' ? '' : item.title).toLowerCase()
  }

  return (
    <div className='bg-white rounded-xl p-3 md:p-6 flex-1'>
      {/* MENU */}
      <div>
        <h2 className='font-bold text-lg hidden xl:block'>Menu</h2>

        {/* Navigation list */}
        <ul className='mt-2'>
          {menu.map((item, index) => {
            return (
              <Link
                to={getPath(item)}
                key={index}
                className='text-base -mx-1 px-1 py-3 md:py-4 md:-mx-3 md:px-3 block button-hover rounded-2xl'
              >
                {item.title === currentPage ? (
                  <li className='font-semibold flex justify-center xl:justify-start items-center gap-4'>
                    <span className='text-2xl'>{item.selectedIcon}</span>
                    <span className='hidden xl:inline'>{item.title}</span>
                  </li>
                ) : (
                  <li className='text-gray-600 flex justify-center xl:justify-start items-center gap-4'>
                    <span className='text-2xl'>{item.icon}</span>
                    <span className='hidden xl:inline'>{item.title}</span>
                  </li>
                )}
              </Link>
            )
          })}
        </ul>
      </div>

      {/* ACCOUNT */}
      <div className='mt-10'>
        <h2 className='font-bold text-lg hidden xl:block'>Account</h2>

        <div className='-mx-2 mt-2 px-2 py-3 md:-mx-3 md:px-3 md:py-4 button-hover rounded-2xl'>
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

import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import capitalize from '../utils/capitalize'

const menu = [
  'Home',
  'Messages',
  'Notifications',
  'Profile',
  'Bookmarks',
  'Settings'
]

const Navbar = () => {
  const [currentPage, setPage] = useState('Home')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') setPage('Home')
    else setPage(capitalize(location.pathname.substring(1)))
  }, [location])

  return (
    <div className='bg-white rounded-lg p-6'>
      <h2 className='font-bold text-2xl'>MENU</h2>

      {/* Navigation list */}
      <div className='mt-4'>
        {menu.map((item, index) => {
          return (
            <Link
              to={'/' + (item === 'Home' ? '' : item).toLowerCase()}
              key={index}
              className='text-lg -ml-3 -mr-3 px-3 py-3 block hover:bg-gray-100 rounded-2xl'
            >
              {item === currentPage ? (
                <span className='font-semibold'>{item}</span>
              ) : (
                <span className='text-gray-600'>{item}</span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar

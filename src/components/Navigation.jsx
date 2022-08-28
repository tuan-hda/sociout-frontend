import classNames from 'classnames'
import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = ({ menuList, className }) => {
  const navigate = useNavigate()
  const pathname = window.location.pathname

  const getIndex = () => menuList.findIndex(value => value[1] === pathname)

  return (
    <div className='flex mt-2 items-center'>
      {/* Navigation list */}
      <ul className='flex-1 flex items-center justify-between font-medium text-disabledColor'>
        {menuList.map(([children, path], index) => {
          return (
            <li
              key={index}
              className={classNames([
                path === pathname && 'text-black font-bold',
                'rounded-lg flex-1'
              ])}
            >
              <Link
                to={path}
                className={classNames([
                  'outline-none hover:text-black transition w-fit block',
                  className
                ])}
              >
                {children}

                {/* Underline */}
                <p
                  className={classNames([
                    'w-full border-t-4 rounded-full border-primaryColor mt-2 transition',
                    path !== pathname && 'opacity-0'
                  ])}
                />
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Navigation buttons */}
      <div className='flex'>
        <button
          disabled={pathname === menuList[0][1]}
          className={classNames([
            pathname === menuList[0][1] ? 'text-disabledColor' : 'text-black'
          ])}
          onClick={() => navigate(menuList[getIndex() - 1][1])}
        >
          <BiChevronLeft className='text-xl' />
        </button>

        <button
          disabled={pathname === menuList[menuList.length - 1][1]}
          className={classNames([
            pathname === menuList[menuList.length - 1][1]
              ? 'text-disabledColor'
              : 'text-black'
          ])}
          onClick={() => navigate(menuList[getIndex() + 1][1])}
        >
          <BiChevronRight className='text-xl' />
        </button>
      </div>
    </div>
  )
}

export default Navigation

import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  AiFillHome,
  AiOutlineHome,
  AiFillMessage,
  AiOutlineMessage,
  AiFillSetting,
  AiOutlineSetting,
} from "react-icons/ai"
import { RiUser3Fill, RiUser3Line } from "react-icons/ri"
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io"
import Avatar from "./Avatar"
import ModalWrapper from "./modals/ModalWrapper"
import { FiUser, FiLogOut } from "react-icons/fi"
import { logOutAction } from "../actions"
import { useDispatch, useSelector } from "react-redux"

const menu = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
    selectedIcon: <AiFillHome />,
  },
  {
    title: "Messages",
    icon: <AiOutlineMessage />,
    selectedIcon: <AiFillMessage />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
    selectedIcon: <IoMdNotifications />,
  },
  {
    title: "Profile",
    icon: <RiUser3Line />,
    selectedIcon: <RiUser3Fill />,
  },
  {
    title: "Settings",
    icon: <AiOutlineSetting />,
    selectedIcon: <AiFillSetting />,
  },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const location = useLocation()

  const getPath = (item) => {
    if (item.title === "Profile") return "/" + user?.id
    return "/" + (item.title === "Home" ? "" : item.title).toLowerCase()
  }

  // Check current page
  const checkCurrentPage = (item) => {
    const path = location.pathname.substring(1)
    if (path === user?.id && item.title === "Profile") {
      return true
    }

    if (item.title === "Home" && path === "") {
      return true
    }

    if (path === item.title.toLowerCase()) {
      return true
    }

    return false
  }

  return (
    <div className='bg-white rounded-xl p-3 pt-6 md:p-6 flex-1 sticky top-[84px]'>
      {/* MENU */}
      <div>
        <h2 className='font-bold text-lg hidden xl:block mb-2'>Menu</h2>

        {/* Navigation list */}
        <ul className='xl:mt-0 -mt-3'>
          {menu.map((item, index) => {
            return (
              <Link
                to={getPath(item)}
                key={index}
                className='text-base -mx-1 sm:mx-0 px-3 py-3 sm:py-4 md:py-4 md:px-4 md:-mx-3 block button-hover rounded-2xl'
              >
                {checkCurrentPage(item) ? (
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

        <div className='relative'>
          <div
            className='-mx-2 sm:mx-0 mt-2 px-2 py-3 md:-mx-3 md:px-3 md:py-4 button-hover rounded-2xl md:block flex justify-center'
            onClick={() => setShowMenu(true)}
          >
            <div className='w-9 md:w-auto'>
              <Avatar
                Src={require("../img/Makima.jpg")}
                props={{ width: "36px" }}
                text='Tuấn'
              />
            </div>
          </div>

          <ModalWrapper
            isShowing={showMenu}
            setShowing={setShowMenu}
            top='50px'
            left='0'
            bodyClassname='text-left w-full min-w-[150px]'
          >
            <div className='py-3 px-3 bg-white rounded-xl'>
              <ul className='text-normalText'>
                <Link
                  to={`/${user?.id}`}
                  onClick={() => setShowMenu(false)}
                  className='py-3 px-3 button-hover rounded-xl flex items-center gap-3'
                >
                  <FiUser className='text-lg' />
                  Profile
                </Link>
                <Link
                  to='/login'
                  onClick={() => {
                    dispatch(logOutAction())
                    setShowMenu(false)
                  }}
                  className='py-3 px-3 button-hover rounded-xl text-errorColor flex items-center gap-3'
                >
                  <FiLogOut className='text-lg' />
                  Log out
                </Link>
              </ul>
            </div>
          </ModalWrapper>
        </div>
      </div>
    </div>
  )
}

export default Navbar

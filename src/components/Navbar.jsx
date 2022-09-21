import React, { useState } from "react"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import capitalize from "../utils/capitalize"
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
import globalObject from "../utils/globalObject"
import checkOwnId from "../utils/checkOwnId"
import ModalWrapper from "./modals/ModalWrapper"
import { FiUser, FiLogOut } from "react-icons/fi"
import { logOutAction } from "../actions"
import { useDispatch } from "react-redux"

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
    path: globalObject.id,
  },
  {
    title: "Settings",
    icon: <AiOutlineSetting />,
    selectedIcon: <AiFillSetting />,
  },
]

const Navbar = () => {
  const [currentPage, setPage] = useState("Home")
  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch()

  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname
    if (pathname === "/") {
      setPage("Home")
    } else if (checkOwnId(pathname)) {
      setPage("Profile")
    } else {
      setPage(capitalize(location.pathname.substring(1)))
    }
  }, [location])

  const getPath = (item) => {
    if (item.path) return "/" + item.path
    return "/" + (item.title === "Home" ? "" : item.title).toLowerCase()
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
                  to={"/" + globalObject.id}
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

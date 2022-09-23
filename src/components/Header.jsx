import React from "react"
import {
  Container,
  LeftContainer,
  RightContainer,
  MiddleContainer,
} from "./containers/index"
import Logo from "./Logo"
import { FiSearch, FiLogOut, FiUser } from "react-icons/fi"
import Avatar from "./Avatar"
import ModalWrapper from "./modals/ModalWrapper"
import { useState } from "react"
import { Link } from "react-router-dom"
import { logOutAction } from "../actions"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const avatarProps = {
    width: "36px",
  }

  return (
    <div className='bg-white h-16 sticky top-0 z-10'>
      <Container>
        <div className='flex items-center h-full justify-between sm:gap-5 gap-2'>
          {/* Left */}
          <LeftContainer>
            <Logo />
          </LeftContainer>

          {/* Middle */}
          <MiddleContainer>
            {/* Search bar */}
            <div className='rounded-xl bg-mainBackground flex items-center px-3 py-[10px] gap-3 outline-2 outline-lightBlue focus-within:outline'>
              <FiSearch className='inline text-xl text-[#777]' />
              <input
                className='outline-none bg-transparent flex-1 text-normalText'
                placeholder='Search for people, posts...'
              />
            </div>
          </MiddleContainer>

          {/* Right */}
          <RightContainer>
            <div className='flex justify-end'>
              <button onClick={() => setShowMenu(true)}>
                <Avatar
                  Src={user?.avatar}
                  props={avatarProps}
                  text={user?.lastName}
                />
                <ModalWrapper
                  isShowing={showMenu}
                  setShowing={setShowMenu}
                  top='56px'
                  right='0'
                  bodyClassname='text-left pr-2'
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
              </button>
            </div>
          </RightContainer>
        </div>
      </Container>
    </div>
  )
}

export default Header

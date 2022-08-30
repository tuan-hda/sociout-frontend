import React from 'react'
import {
  Container,
  LeftContainer,
  RightContainer,
  MiddleContainer
} from './containers/index'
import Logo from './Logo'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

const Header = () => {
  const avatarProps = {
    width: '36px'
  }

  return (
    <div className='bg-white h-16 sticky top-0 z-10'>
      <Container>
        <div className='flex items-center h-full justify-between'>
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
              ></input>
            </div>
          </MiddleContainer>

          {/* Right */}
          <RightContainer>
            <div className='flex justify-end'>
              <Link to='/login'>
                <Avatar
                  Src={require('../img/Makima.jpg')}
                  props={avatarProps}
                  text='Tuấn'
                />
              </Link>
            </div>
          </RightContainer>
        </div>
      </Container>
    </div>
  )
}

export default Header

import React from 'react'
import {
  Container,
  LeftContainer,
  RightContainer,
  MiddleContainer
} from './containers/index'
import Logo from './Logo'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

const Header = () => {
  const avatarProps = {
    width: '36px'
  }

  return (
    <div className='bg-white h-20'>
      <Container>
        <div className='flex items-center h-full gap-6'>
          {/* Left */}
          <LeftContainer>
            <Logo />
          </LeftContainer>

          {/* Middle */}
          <MiddleContainer>
            {/* Search */}
            <div className='rounded-full bg-mainBackground flex items-center px-3 py-[10px] gap-3'>
              <FiSearch className='inline text-2xl' />
              <input
                className='outline-none bg-transparent flex-1'
                placeholder='Search for people, posts...'
              ></input>
            </div>
          </MiddleContainer>

          {/* Right */}
          <RightContainer>
            <div className='flex justify-end'>
              <Link to='/login' className='flex items-center'>
                <Avatar
                  Src={require('../img/Makima.jpg')}
                  props={avatarProps}
                />
                <span className='font-bold ml-3'>Tuấn</span>
                <FiChevronDown className='ml-5 text-[#8B8E95]' />
              </Link>
            </div>
          </RightContainer>
        </div>
      </Container>
    </div>
  )
}

export default Header

import React from 'react'
import {
  Container,
  LeftContainer,
  RightContainer,
  MiddleContainer
} from './containers/index'
import Logo from './Logo'
import { FiSearch } from 'react-icons/fi'
import Button from './Button'

const Header = () => {
  return (
    <div className='bg-white h-20'>
      <Container>
        <div className='flex items-center h-full'>
          {/* Left */}
          <LeftContainer>
            <Logo />
          </LeftContainer>

          {/* Middle */}
          <MiddleContainer>
            {/* Search */}
            <div className='rounded-full bg-mainBackground flex items-center p-3 gap-3'>
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
              <Button>New Post</Button>
            </div>
          </RightContainer>
        </div>
      </Container>
    </div>
  )
}

export default Header

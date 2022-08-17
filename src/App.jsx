import React from 'react'
import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer
} from './components/containers'
import { Header, Navbar, Sidebar } from './components/index'
import { Home, Login, RecoverPassword, SignUp } from './pages/index'

// Scroll to top whenever navigate to other tab
const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

const excludePath = ['login', 'signup', 'recoverpassword']

const getHeader = location => {
  if (!excludePath.includes(location.pathname.substring(1))) return <Header />
}

const SideBar = props => {
  if (!excludePath.includes(props.location?.pathname.substring(1)))
    return (
      <div className='flex mt-5 gap-6'>
        <LeftContainer>
          <Navbar />
        </LeftContainer>

        {/* Routes */}
        <MiddleContainer>{props.children}</MiddleContainer>

        <RightContainer></RightContainer>
      </div>
    )
  else return props.children
}

const App = () => {
  const location = useLocation()

  return (
    <div className='bg-[#F8F8F8] h-screen'>
      {getHeader(location)}
      <Wrapper>
        <Container>
          <SideBar location={location}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/recoverpassword' element={<RecoverPassword />} />
            </Routes>
          </SideBar>
        </Container>
      </Wrapper>
    </div>
  )
}

export default App

import React from 'react'
import { useLayoutEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useLocation } from 'react-router-dom'
import {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer
} from './components/containers'
import { Header, Navbar, SuggestionBar } from './components/index'
import {
  Home,
  Login,
  RecoverPassword,
  SignUp,
  Profile,
  Posts,
  Medias,
  Likes,
  Replies,
  Relationship
} from './pages/index'

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
      <div className='flex justify-between gap-2 relative'>
        <LeftContainer sticky>
          <Navbar />
        </LeftContainer>

        {/* Routes */}
        <MiddleContainer>{props.children}</MiddleContainer>

        <RightContainer>
          <SuggestionBar />
        </RightContainer>
      </div>
    )
  else return props.children
}

const App = () => {
  const location = useLocation()

  return (
    <div>
      <Toaster />
      {getHeader(location)}
      <Wrapper>
        <div className='h-5 sticky top-20 bg-mainBackground z-10' />

        <Container
          marginTop={
            excludePath.includes(location.pathname.substring(1)) ? '' : ''
          }
          excludePath={excludePath}
        >
          <SideBar location={location}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/recoverpassword' element={<RecoverPassword />} />
              <Route path={'/@:id/'} element={<Profile />}>
                <Route index element={<Posts />} />
                <Route path='medias' element={<Medias />} />
                <Route path='likes' element={<Likes />} />
                <Route path='replies' element={<Replies />} />
                <Route path='friends' element={<Relationship />} />
                <Route path='followers' element={<Relationship />} />
                <Route path='following' element={<Relationship />} />
              </Route>
            </Routes>
          </SideBar>
        </Container>
      </Wrapper>
    </div>
  )
}

export default App

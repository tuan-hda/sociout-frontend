import React from 'react'
import { useLayoutEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer
} from './components/containers'
import { Header, Navbar, SuggestionBar } from './components/index'
import jwt from 'jwt-decode'
import {
  Home,
  Login,
  RecoverPassword,
  SignUp,
  Profile,
  PostList,
  Medias,
  Likes,
  Replies,
  Relationship,
  Messages,
  Notifications,
  Settings
} from './pages/index'
import ReactTooltip from 'react-tooltip'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAction } from './actions'
import { getMeService } from './services'

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
      <div>
        <div className='h-5 sticky top-16 bg-mainBackground z-10' />

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
      </div>
    )

  return props.children
}

const App = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  useEffect(() => {
    // If still in section
    if (token && !auth.user) {
      const decodedObj = jwt(token)
      getMeService(decodedObj.id)
        .then(response =>
          dispatch(setUserAction({ ...decodedObj, ...response.data }))
        )
        .catch(error => {
          if (error.response) {
            console.log(error.response.status)
            console.log(error.response.headers)
            console.log(error.response.data)
          } else {
            console.log(error.response)
          }
        })
    } else {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    if (
      auth &&
      auth.user &&
      excludePath.includes(location.pathname.substring(1))
    ) {
      navigate('/')
    }
  }, [auth, navigate, location])

  return (
    <div>
      <Toaster />
      {getHeader(location)}
      <Wrapper>
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
                <Route index element={<PostList />} />
                <Route path='medias' element={<Medias />} />
                <Route path='likes' element={<Likes />} />
                <Route path='replies' element={<Replies />} />
                <Route path='friends' element={<Relationship />} />
                <Route path='followers' element={<Relationship />} />
                <Route path='following' element={<Relationship />} />
              </Route>
              <Route path='/messages' element={<Messages />} />
              <Route path='/notifications' element={<Notifications />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </SideBar>
        </Container>
      </Wrapper>

      <ReactTooltip delayShow={1000} />
    </div>
  )
}

export default App

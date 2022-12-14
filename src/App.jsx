import React from "react"
import { useLayoutEffect } from "react"
import { Toaster } from "react-hot-toast"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer,
} from "./components/containers"
import {
  FloatMessages,
  Header,
  Navbar,
  SuggestionBar,
} from "./components/index"
import jwt from "jwt-decode"
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
  Settings,
  Detail,
} from "./pages/index"
import ReactTooltip from "react-tooltip"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserAction } from "./actions"
import { getMeService } from "./services"

// Scroll to top whenever navigate to other tab
const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

const excludePath = ["login", "sign-up", "recover-password"]
const focusPath = ["messages"]

const getHeader = (location) => {
  if (!excludePath.includes(location.pathname.substring(1))) return <Header />
}

const SideBar = (props) => {
  if (!excludePath.includes(props.location?.pathname.substring(1)))
    return (
      <div className='flex justify-between sm:gap-5 gap-2'>
        <LeftContainer>
          <Navbar />
        </LeftContainer>

        {/* Routes */}
        <MiddleContainer mainContent>
          <div className='h-5 bg-mainBackground' />
          {props.children}
        </MiddleContainer>

        {!focusPath.includes(props.location?.pathname.substring(1)) && (
          <RightContainer sticky>
            <SuggestionBar />
          </RightContainer>
        )}
      </div>
    )

  return props.children
}

const token = localStorage.getItem("token")

const App = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    // If still in login session
    if (token) {
      const decodedObj = jwt(token)
      getMeService(decodedObj.id)
        .then((response) =>
          dispatch(setUserAction({ ...decodedObj, ...response.data.data }))
        )
        .catch((error) => {
          if (error.response) {
            console.log(error.response.status)
            console.log(error.response.headers)
            console.log(error.response.data)
          } else {
            console.log(error.response)
          }
        })
    } else {
      navigate("/login")
    }
  }, [])

  useEffect(() => {
    if (user && excludePath.includes(location.pathname.substring(1))) {
      navigate("/")
    }
  }, [user, location])

  return (
    <div>
      <Toaster />
      {getHeader(location)}
      <Wrapper>
        <Container excludePath={excludePath}>
          <SideBar location={location}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/recover-password' element={<RecoverPassword />} />
              <Route path={"/:id/"} element={<Profile />}>
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
              <Route path='/:id/status/:id' element={<Detail />} />
            </Routes>
          </SideBar>

          {!excludePath.includes(location.pathname.substring(1)) && (
            <div className='h-4' />
          )}
        </Container>
      </Wrapper>

      {!excludePath.includes(location.pathname.substring(1)) && (
        <FloatMessages />
      )}

      <ReactTooltip delayShow={1000} />
    </div>
  )
}

export default App

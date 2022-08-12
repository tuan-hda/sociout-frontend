import React from 'react'
import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import { Home, Login, Register } from './pages/index'

// Scroll to top whenever navigate to other tab
const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

const getHeader = location => {
  if (location.pathname !== '/login') return <Header />
}

const App = () => {
  const location = useLocation()

  return (
    <div className='bg-[#F8F8F8] h-screen'>
      {getHeader(location)}
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Wrapper>
    </div>
  )
}

export default App

import React from 'react'
import { useLayoutEffect } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'

const Wrapper = () => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return null
}

const getHeader = () => {
  return <Header />
}

const App = () => {
  return (
    <div className='bg-[#F8F8F8] h-screen'>
      {getHeader()}
      <Wrapper>
        <Routes></Routes>
      </Wrapper>
    </div>
  )
}

export default App

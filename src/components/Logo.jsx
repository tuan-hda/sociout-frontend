import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className='flex items-center text-xl gap-3 py-2 pr-4 w-fit'>
      <img src={require('../img/Logo.png')} alt='Logo' className='w-7 h-7' />
      <h1 className='font-bold'>Sociout</h1>
    </Link>
  )
}

export default Logo

import React from 'react'
import { Link } from 'react-router-dom'
import { Person } from './index'

const SuggestionBar = () => {
  return (
    <div className='bg-white rounded-lg p-6'>
      <h3 className='text-lg font-semibold'>Suggestion for you</h3>

      <ul className='mt-2'>
        <li className='-mx-3 px-3 py-4 button-hover rounded-2xl'>
          <Link to='/'>
            <Person
              src={require('../img/Makima.jpg')}
              name='Makima'
              id='makima'
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SuggestionBar

import React from 'react'
import { Link } from 'react-router-dom'
import { Person } from './index'

const people = [
  {
    src: require('../img/Makima.jpg'),
    name: 'Makima',
    id: 'makima'
  },
  {
    src: require('../img/Mori.jpg'),
    name: 'Mori Calliope💀holoEN',
    id: 'moricalliope'
  },
  {
    src: require('../img/Marine.jpg'),
    name: '宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生',
    id: 'houshoumarine'
  }
]

const SuggestionBar = () => {
  return (
    <div className='bg-white rounded-lg p-6'>
      <h3 className='text-lg font-bold'>Suggestions for you</h3>

      <ul className='mt-2'>
        {people.map((person, index) => (
          <li key={index} className='-mx-3 px-3 py-2 button-hover rounded-2xl'>
            <Link to='/'>
              <Person src={person.src} name={person.name} id={person.id} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuggestionBar

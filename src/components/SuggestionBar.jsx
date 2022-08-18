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
  },
  {
    src: require('../img/Gura.jpg'),
    name: 'Gawr Gura',
    id: 'gawrgura'
  },
  {
    src: require('../img/Yagoo.jpg'),
    name: 'YAGOO / Motoaki Tanigo',
    id: 'tanigox'
  },
  {
    src: require('../img/Amelia.jpg'),
    name: 'Watson Amelia🔎holoEN',
    id: 'watsonameliaEN'
  }
]

const SuggestionBar = () => {
  return (
    <div className='bg-white rounded-lg p-6'>
      <h3 className='text-lg font-bold'>Suggestions for you</h3>

      {/* Suggestion list */}
      <ul className='mt-4'>
        {people.map((person, index) => (
          <li key={index} className='-mx-3 px-3 py-2 button-hover rounded-2xl'>
            <Link to={'/@' + person.id}>
              <Person src={person.src} name={person.name} id={person.id} />
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-4 text-primaryColor font-medium text-center w-full'>
        <Link to='/connect-people' className='hover:font-semibold'>
          Show more
        </Link>
      </div>
    </div>
  )
}

export default SuggestionBar

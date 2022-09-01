import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Person } from './index'
import { useEffect } from 'react'

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
  const [showAuthorInfo, setShowAuthor] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (/^\/@[\d\w_]+\/status\/[\d]+/.test(location.pathname)) {
      setShowAuthor(true)
    } else {
      setShowAuthor(false)
    }
  }, [location])

  return (
    <div className='top-[84px] sticky'>
      {/*Author info */}
      {showAuthorInfo && (
        <div className='bg-white rounded-xl p-6 mb-4'>
          <Person
            name={people[2].name}
            src={people[2].src}
            id={people[2].id}
            bio='ホロライブファンタジー所属/【ファンネーム】宝鐘の一味/【生放送タグ】#マリン航海記/【切り抜き動画タグ】#わかるマリン/【ファンアート】#マリンのお宝/おかあさん💘 @AkasaAi /【描いた絵】http://pixiv.net/users/43505343'
            hideAddBtn
            leftAlignBio
          />
        </div>
      )}

      <div className='bg-white rounded-xl p-6'>
        <h3 className='text-lg font-bold'>Suggestions for you</h3>

        {/* Suggestion list */}
        <ul className='mt-4'>
          {people.map((person, index) => (
            <li key={index} className='-mx-3 p-3 button-hover rounded-2xl'>
              <Link to={'/@' + person.id}>
                <Person src={person.src} name={person.name} id={person.id} />
              </Link>
            </li>
          ))}
        </ul>

        <div className='text-primaryColor font-medium text-center w-full mt-1'>
          <Link
            to='/connect-people'
            className='hover:font-semibold text-normalText'
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuggestionBar

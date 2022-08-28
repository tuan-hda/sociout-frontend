import React from 'react'
import { Link } from 'react-router-dom'
import { Person } from '../components'
import checkOwnId from '../utils/checkOwnId'

const people = [
  {
    src: require('../img/Fubuki.jpg'),
    name: '白上フブキ@CREATION歌ってみた🦊🌽',
    id: 'shirakamifubuki',
    bio: 'ホロライブプロダクション/1期生ゲーマーズ白上フブキ/狐🦊 ❖担当絵師:凪白みと @lemon_mito 配信素材】#白上配信素材【絵】#絵フブキ 【生放送】#フブキch #fubukich 【切り抜き】#フブ切り【ファン】#すこん部 #FBKBFF'
  },
  {
    src: require('../img/Mori.jpg'),
    name: 'Mori Calliope💀holoEN',
    id: 'moricalliope',
    bio: 'The Grim Reaper is a music maker. MAJOR DEBUT ALBUM COMING DECEMBER 2022 (UMG) // mama: @y_k_sme'
  },
  {
    src: require('../img/Marine.jpg'),
    name: '宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生',
    id: 'houshoumarine',
    bio: 'ホロライブファンタジー所属/【ファンネーム】宝鐘の一味/【生放送タグ】#マリン航海記/【切り抜き動画タグ】#わかるマリン/【ファンアート】#マリンのお宝/おかあさん💘 @AkasaAi /【描いた絵】http://pixiv.net/users/43505343'
  },
  {
    src: require('../img/Gura.jpg'),
    name: 'Gawr Gura',
    id: 'gawrgura',
    bio: 'Shark-girl Idol of Hololive EN ! 🐟🐠🐡 #gawrt #gawrgura @amsrntk3 💙'
  },
  {
    src: require('../img/Yagoo.jpg'),
    name: 'YAGOO / Motoaki Tanigo',
    id: 'tanigox',
    bio: 'CEO @cover_corp(@hololivetv)\n We provide the most advanced virtual entertainment experience from Japan. \nhttp://linkedin.com/in/tanigo/'
  },
  {
    src: require('../img/Amelia.jpg'),
    name: 'Watson Amelia🔎holoEN',
    id: 'watsonameliaEN',
    bio: '🔎なるほど~🕵️‍♀️ Hololive #1 Time Traveling Detective is on the case! | 💛 Mamas: @aoinabi | @7name_ 💛🔍#amelive #ameliaRT #teamates #holoMyth #hololiveEnglish🔍'
  }
]

const Follow = () => {
  return (
    <div className='p-6 bg-white rounded-xl mt-4'>
      <ul className='-my-4'>
        {people.map((person, index) => (
          <li key={index} className='-mx-3 p-3 button-hover rounded-2xl'>
            <Link to={'/@' + person.id}>
              <Person
                src={person.src}
                name={person.name}
                id={person.id}
                bio={person.bio}
                hideAddBtn={checkOwnId(window.location.pathname)}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Follow

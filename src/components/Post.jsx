import React from 'react'
import Person from './Person'

const Post = () => {
  return (
    <div className='bg-white p-6 rounded-xl'>
      <Person
        src={require('../img/Marine.jpg')}
        name='宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生'
        time='2 hours ago'
        id='houshoumarine'
        hideAddBtn
        underline
      />
    </div>
  )
}

export default Post

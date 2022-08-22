import React from 'react'
import Avatar from './Avatar'

const Post = () => {
  return (
    <div className='bg-white p-6 rounded-xl'>
      <Avatar
        Src={require('../img/Marine.jpg')}
        text='宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生'
        isPost
        time='2 hours ago'
        id='houshoumarine'
      />
    </div>
  )
}

export default Post

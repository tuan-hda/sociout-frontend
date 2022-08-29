import React from 'react'
import { BiSad } from 'react-icons/bi'
import { RiUserUnfollowLine } from 'react-icons/ri'
import Person from './Person'
import { MdBlock, MdReport } from 'react-icons/md'
import ContentContainer from './ContentContainer'
import MediaList from './MediaList'

const owner = {
  id: 'houshoumarine',
  time: '2 hours ago',
  name: '宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生'
}

const Post = () => {
  const content =
    'Was great meeting up with Anna Ferguson and Dave Bishop at the breakfast talk! @breakfast'

  return (
    <div className='bg-white p-6 rounded-xl'>
      {/* Head */}
      <Person
        src={require('../img/Marine.jpg')}
        name={owner.name}
        time={owner.time}
        id={owner.id}
        hideAddBtn
        underline
        menuList={[
          [
            <p className='flex items-center'>
              <BiSad className='text-lg mr-3' /> Not interested
            </p>,
            ''
          ],
          [
            <p className='flex items-center'>
              <RiUserUnfollowLine className='text-lg mr-3' /> Unfollow{' '}
              {owner.id}
            </p>
          ],
          [
            <p className='flex items-center'>
              <MdBlock className='text-lg mr-3' /> Block {owner.id}
            </p>
          ],
          [
            <p className='flex items-center'>
              <MdReport className='text-lg mr-3' /> Report {owner.id}
            </p>,
            'text-errorColor'
          ]
        ]}
      />

      {/* Content */}
      <div className='text-normalText text-textColor'>
        {/* Text */}
        <ContentContainer className='mt-4'>{content}</ContentContainer>

        {/* Media list */}
        <MediaList
          mediaList={[
            {
              src: 'https://pbs.twimg.com/media/FbE53SEacAEv2Zh?format=jpg&name=large',
              type: 'image',
              name: 'Mori Calliope'
            }
          ]}
        />
      </div>
    </div>
  )
}

export default Post

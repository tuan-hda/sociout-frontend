import React, { useState } from 'react'
import { BiSad } from 'react-icons/bi'
import { RiUserUnfollowLine } from 'react-icons/ri'
import Person from './Person'
import { MdBlock, MdReport } from 'react-icons/md'
import ContentContainer from './ContentContainer'
import MediaList from './MediaList'
import { useNavigate } from 'react-router-dom'
import {
  AiOutlineComment,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineRetweet
} from 'react-icons/ai'
import classNames from 'classnames'
import copyToClipboard from '../utils/copyToClipboard'
import TextEditor from './TextEditor'
import { FiShare } from 'react-icons/fi'
import ReactTooltip from 'react-tooltip'

const owner = {
  id: 'houshoumarine',
  time: '2 hours ago',
  name: '宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生'
}

const Post = () => {
  const [like, setLike] = useState(false)
  const [content, setContent] = useState('')
  const [mediaList, setMediaList] = useState([])

  const navigate = useNavigate()
  const likes = 300,
    comments = 24,
    shares = 0

  let isMoved

  const contentSample =
    'Was great meeting up with Anna Ferguson and Dave Bishop at the breakfast talk! @breakfast'

  return (
    <div className='bg-white p-6 rounded-xl transition'>
      {/* Header */}
      <header onMouseUp={e => e.stopPropagation()}>
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
                <RiUserUnfollowLine className='text-lg mr-3' /> Unfollow @
                {owner.id}
              </p>
            ],
            [
              <p className='flex items-center'>
                <MdBlock className='text-lg mr-3' /> Block @{owner.id}
              </p>
            ],
            [
              <p className='flex items-center'>
                <MdReport className='text-lg mr-3' /> Report @{owner.id}
              </p>,
              'text-errorColor'
            ]
          ]}
        />
      </header>

      {/* Content */}
      <div
        className='text-normalText text-textColor cursor-pointer'
        onMouseDown={() => (isMoved = false)}
        onMouseMove={() => (isMoved = true)}
        onMouseUp={e => {
          if (e.button === 0) {
            if (!isMoved) navigate('/@moricalliope/status/12345')
          }
        }}
      >
        {/* Text */}
        <ContentContainer className='mt-4'>{contentSample}</ContentContainer>

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

      {/* Buttons */}
      <div
        className='mt-3 text-2xl text-textColor flex items-center justify-between -mx-1'
        onMouseUp={e => e.stopPropagation()}
      >
        <div className='flex items-center gap-2'>
          {/* Like button */}
          <div
            className='flex items-center group w-20'
            onClick={() => setLike(!like)}
          >
            <button
              className={classNames([
                'transition-all rounded-full p-2 group-hover:bg-opacity-[15%] group-hover:bg-loveColor group-hover:text-loveColor',
                like && 'text-loveColor'
              ])}
              data-tip={like ? 'Unlike' : 'Like'}
            >
              {like ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>

            {/* Number */}
            <div className='text-xs h-4 overflow-hidden cursor-pointer'>
              {likes !== 0 && (
                <p
                  className={classNames([
                    'ml-1 group-hover:text-loveColor transition ease-in-out duration-300',
                    like ? 'text-loveColor -translate-y-4' : 'text-likeColor'
                  ])}
                >
                  {likes}
                </p>
              )}

              <p
                className={classNames([
                  'ml-1 transition ease-in-out text-loveColor duration-300',
                  like && '-translate-y-4'
                ])}
              >
                {likes + 1}
              </p>
            </div>
          </div>

          {[
            [
              <AiOutlineComment />,
              'group-hover:bg-linkColor group-hover:text-linkColor',
              'Comment',
              'group-hover:text-linkColor',
              comments
            ],
            [
              <AiOutlineRetweet />,
              'group-hover:bg-greenColor group-hover:text-greenColor',
              'Share',
              'group-hover:text-greenColor',
              shares
            ]
          ].map(
            ([icon, className, dataTip, numberClassName, amount], index) => (
              <div
                className='flex items-center group w-20 cursor-pointer'
                key={index}
              >
                <button
                  className={classNames([
                    className,
                    'transition-all rounded-full p-2 group-hover:bg-opacity-[15%]'
                  ])}
                  data-tip={dataTip}
                >
                  {icon}
                </button>

                {/* Number */}
                {amount !== 0 && (
                  <span
                    className={classNames([
                      'text-xs text-likeColor ml-1',
                      numberClassName
                    ])}
                  >
                    {amount}
                  </span>
                )}
              </div>
            )
          )}
        </div>

        {/* Button copy link */}
        <button
          className='transition-all rounded-full p-[9px] hover:bg-opacity-[15%] hover:bg-linkColor hover:text-linkColor'
          data-tip='Copy link to this post'
          onClick={() =>
            copyToClipboard(window.location.href + '@moricalliope/status/12345')
          }
        >
          <FiShare className='text-[22px]' />
        </button>
      </div>

      {/* Comment section */}
      <div
        onMouseDown={e => e.stopPropagation()}
        className='mt-3 text-normalText'
      >
        <TextEditor
          content={content}
          setContent={setContent}
          mediaList={mediaList}
          setMediaList={setMediaList}
          showMedia
          showPostBtn
          placeholder='Add a comment'
        />
      </div>

      <ReactTooltip delayShow={1000} />
    </div>
  )
}

export default Post

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from './index'
import { HiOutlineEmojiHappy, HiOutlineHashtag } from 'react-icons/hi'
import { MdOutlineImage } from 'react-icons/md'
import { TbCamera } from 'react-icons/tb'
import { VscMention } from 'react-icons/vsc'
import { FiChevronDown } from 'react-icons/fi'
import { TiAttachment } from 'react-icons/ti'
import { useState } from 'react'

const baseHeight = '44px'

const CreatePost = () => {
  const tools = [
    {
      name: 'Image',
      icon: <MdOutlineImage className='inline text-primaryColor text-xl' />
    },
    {
      name: 'Video',
      icon: <TbCamera className='inline text-green-500 text-xl' />
    },
    {
      name: 'Attachment',
      icon: <TiAttachment className='inline text-yellow-600 text-xl' />
    },
    {
      name: 'Hashtag',
      icon: <HiOutlineHashtag className='inline text-red-600 text-xl' />
    },
    {
      name: 'Mention',
      icon: <VscMention className='inline text-gray-600 text-xl' />
    }
  ]

  const [content, setContent] = useState('')

  let ref = useRef()

  const autoResize = e => {
    ref.current.style.height = baseHeight
    const scHeight = e.target.scrollHeight
    ref.current.style.height = scHeight + 'px'
  }

  const handleChange = e => {
    setContent(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <form className='rounded-xl bg-white p-6' onSubmit={onSubmit}>
      {/* Textarea */}
      <div className='flex'>
        <Link to='/profile' className='inline-block rounded-full'>
          <Avatar
            Src={require('../img/Makima.jpg')}
            props={{
              width: baseHeight
            }}
          />
        </Link>

        {/* Text input */}
        <div className='flex-1 ml-4 relative outline-lightBlue outline-2 focus-within:outline rounded-2xl'>
          <textarea
            value={content}
            name='content'
            onChange={handleChange}
            placeholder='Share something...'
            className='block w-full text-sm border-full outline-0 pl-4 pr-8 py-3 rounded-2xl bg-mainBackground overflow-hidden resize-none'
            onKeyUp={autoResize}
            style={{
              height: baseHeight
            }}
            ref={ref}
          />

          <HiOutlineEmojiHappy className='hover:text-yellow-600 text-yellow-500 transition cursor-pointer absolute right-3 text-[22px] bottom-3' />
        </div>
      </div>

      {/* Divider */}
      <p className='w-full border-t-2 border-gray-100 mt-6 '></p>

      {/* Bottom */}
      <div className='mt-4 flex items-center justify-between gap-10'>
        {/* Tools */}
        <div className='flex-1 flex justify-between -ml-1 -mr-1'>
          {tools.map((tool, index) => (
            <div
              key={index}
              className='cursor-pointer button-hover rounded-xl p-1'
            >
              {tool.icon}
              <span className='text-[13px] ml-1'>{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Access */}
        <div className='button-hover rounded-xl p-1'>
          <span className='text-[13px] text-primaryColor'>
            Public <FiChevronDown className='inline ml-2' />
          </span>
        </div>
      </div>

      {/* Post button */}
      <button
        type='submit'
        disabled={content === ''}
        className={`flex items-center justify-center h-9 mt-5 text-center text-[15px] rounded-lg ${
          content !== ''
            ? 'bg-primaryColor text-white font-medium hover:opacity-90 '
            : 'bg-gray-300 text-gray-400 cursor-default'
        } transition w-full`}
      >
        Post
      </button>
    </form>
  )
}

export default CreatePost

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, MediaList } from './index'
import { HiOutlineEmojiHappy, HiOutlineHashtag } from 'react-icons/hi'
import { MdOutlineImage } from 'react-icons/md'
import { VscMention } from 'react-icons/vsc'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { TiAttachment } from 'react-icons/ti'
import { useState } from 'react'
import ModalWrapper from './modals/ModalWrapper'
import Picker from 'emoji-picker-react'
import toast from '../utils/toast'

const baseHeight = '44px'

const CreatePost = () => {
  const [content, setContent] = useState('')
  const [access, setAccess] = useState('Public')
  const [mediaList, setMediaList] = useState([])

  // Modal
  const [showAccess, setShowAccess] = useState(false)
  const [showPicker, setShowPicker] = useState(false)

  const ref = useRef()
  const fileDialogRef = useRef()

  // Auto Resize textarea
  const autoResize = e => {
    ref.current.style.height = baseHeight
    const scHeight = e.target.scrollHeight + 'px'
    ref.current.style.height = scHeight
  }

  const handleChange = e => {
    setContent(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  const showAccessModal = () => {
    setShowAccess(true)
  }

  const changeAccess = item => {
    setAccess(item)
    setShowAccess(false)
  }

  const onEmojiClick = (_, emojiObject) => {
    setContent(content + emojiObject.emoji)
  }

  const handleFileUpload = e => {
    let {
      target: { files }
    } = e
    files = [...files]

    // Clear old files
    fileDialogRef.current.value = ''

    const newFiles = [...mediaList, ...files]
    // If old files length + new files length > 4
    // or contains both video and image
    // then discard
    if (
      newFiles.length > 4 ||
      (
        newFiles.filter(f => String(f.type).includes('image')).length > 0 &&
        newFiles.filter(f => String(f.type).includes('video')).length > 0
      ).length > 0
    ) {
      toast('', 'Please choose either 1 GIF or up to 4 photos.', 'w-[420px]')
      return
    }
    setMediaList(newFiles)
  }

  const tools = [
    {
      name: 'Media',
      icon: <MdOutlineImage className='inline text-primaryColor text-xl' />,
      inner: (
        <input
          type='file'
          className='hidden'
          ref={fileDialogRef}
          accept='image/*, video/*'
          onChange={handleFileUpload}
          multiple
        />
      ),
      onClick: () => fileDialogRef.current.click()
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

        {/* Editor and Media list */}
        <div className='flex-1 ml-4'>
          <div className='relative outline-2 outline-lightBlue focus-within:outline rounded-2xl'>
            {/* Markdown text handling. When edit, show textarea and hide Markdown text */}
            <textarea
              value={content}
              name='content'
              onChange={handleChange}
              placeholder='Share something...'
              className={`block w-full border-full text-sm outline-0 pl-4 pr-8 py-3 rounded-2xl bg-mainBackground overflow-hidden resize-none`}
              onKeyUp={autoResize}
              style={{
                height: baseHeight
              }}
              ref={ref}
            />

            <div className='inline absolute right-3 bottom-3 button-hover'>
              <HiOutlineEmojiHappy
                className='hover:text-yellow-600 text-yellow-500 transition cursor-pointer text-[22px]'
                onClick={() => setShowPicker(true)}
              />

              <ModalWrapper
                isShowing={showPicker}
                setShowing={setShowPicker}
                top='32px'
                left='50%'
                transform='translate(-50%)'
              >
                <div
                  className='absolute -top-[15px] left-1/2 -translate-x-1/2 border-8 z-10'
                  style={{
                    borderColor: 'transparent transparent white transparent'
                  }}
                />
                {showPicker && <Picker onEmojiClick={onEmojiClick} />}
              </ModalWrapper>
            </div>
          </div>

          {/* Media list */}
          {mediaList.length !== 0 && (
            <MediaList mediaList={mediaList} setMediaList={setMediaList} />
          )}
        </div>
      </div>

      {/* Divider */}
      <p className='w-full border-t-2 border-gray-100 mt-6'></p>

      {/* Bottom */}
      <div className='mt-4 flex items-center justify-between'>
        {/* Tools */}
        <div className='flex justify-between -ml-1 -mr-1 gap-1'>
          {tools.map((tool, index) => (
            <div
              key={index}
              className='cursor-pointer button-hover rounded-xl p-1'
              onClick={tool.onClick}
            >
              {tool.icon}
              <span className='text-[13px] ml-1'>
                {tool.name}
                {tool.inner}
              </span>
            </div>
          ))}
        </div>

        {/* Access */}
        <div
          className='relative min-w-[96px] text-right ml-4'
          onClick={showAccessModal}
        >
          <span className='button-hover p-2 rounded-xl text-[13px] text-primaryColor'>
            {access} <FiChevronDown className='inline ml-2' />
          </span>

          {/* Access Modal */}
          <ModalWrapper
            isShowing={showAccess}
            setShowing={setShowAccess}
            top='40px'
            left='50%'
            transform='translate(-50%)'
          >
            <ul className='text-sm w-64 px-5 pt-5 pb-2'>
              <h4 className='font-semibold text-normalText mb-4 text-left'>
                Who can view your post?
              </h4>
              {['Public', 'Friend', 'Private'].map((item, index) => (
                <div
                  key={index}
                  className={`p-3 -mx-3 flex justify-between items-center ${
                    item === access ? 'font-semibold text-primaryColor' : ''
                  } button-hover rounded-2xl`}
                  onClick={() => changeAccess(item)}
                >
                  {item}
                  {item === access && (
                    <FiCheck className='text-primaryColor text-xl' />
                  )}
                </div>
              ))}
            </ul>
          </ModalWrapper>
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

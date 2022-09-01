import React, { useRef } from 'react'
import { HiOutlineHashtag } from 'react-icons/hi'
import { MdOutlineImage } from 'react-icons/md'
import { VscMention } from 'react-icons/vsc'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { TiAttachment } from 'react-icons/ti'
import { useState } from 'react'
import ModalWrapper from './modals/ModalWrapper'
import toast from '../utils/toast'
import TextEditor from './TextEditor'

const CreatePost = () => {
  const [content, setContent] = useState('')
  const [access, setAccess] = useState('Public')
  const [mediaList, setMediaList] = useState([])

  // Modal
  const [showAccess, setShowAccess] = useState(false)

  const fileDialogRef = useRef()

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
    const containVideo =
      newFiles.filter(f => String(f.type).includes('video')).length > 0
    const containImage =
      newFiles.filter(f => String(f.type).includes('image')).length > 0

    if (
      newFiles.length > 4 ||
      (containVideo && (containImage || newFiles.length > 1))
    ) {
      toast('', 'Please choose either 1 GIF or up to 4 photos.', 'w-[420px]')
      return
    }
    setMediaList(newFiles)
  }

  const tools = [
    {
      name: 'Media',
      icon: <MdOutlineImage className='inline text-greenColor text-xl' />,
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
      <TextEditor
        content={content}
        setContent={setContent}
        mediaList={mediaList}
        setMediaList={setMediaList}
      />

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
              <span className='text-[13px] ml-1 md:inline hidden'>
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
            left='100%'
            transform='translate(-100%)'
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

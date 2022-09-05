import EmojiPicker from 'emoji-picker-react'
import React, { useRef, useState } from 'react'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import MediaList from './MediaList'
import ModalWrapper from './modals/ModalWrapper'
import { MdOutlineImage } from 'react-icons/md'
import toast from '../utils/toast'
import { AiOutlineSend } from 'react-icons/ai'
import { BiMessageSquareError } from 'react-icons/bi'
import classNames from 'classnames'

const baseHeight = '40px'

const TextEditor = ({
  content,
  setContent,
  mediaList,
  setMediaList,
  showMedia,
  showPostBtn,
  placeholder
}) => {
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

  const onEmojiClick = (_, emojiObject) => {
    setContent(content + emojiObject.emoji)
  }

  const isContentEmpty = () => content === '' && mediaList.length === 0

  const handlePostComment = () => {
    if (isContentEmpty()) {
      return
    }
    toast('', 'Your comment was sent.')
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
      toast(
        '',
        'Please choose either 1 GIF or up to 4 photos.',
        'w-[420px]',
        null,
        <BiMessageSquareError />
      )
      return
    }
    setMediaList(newFiles)
  }

  return (
    <div>
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
        <div className='flex-1 ml-2'>
          <div className='relative outline-2 outline-lightBlue focus-within:outline rounded-2xl flex items-center'>
            {/* Markdown text handling. When edit, show textarea and hide Markdown text */}
            <textarea
              value={content}
              name='content'
              onChange={handleChange}
              placeholder={placeholder ? placeholder : 'Share something...'}
              className={classNames([
                'block w-full border-full outline-0 pl-4 py-[11px] text-normalText rounded-2xl bg-mainBackground overflow-hidden resize-none',
                showMedia && showPostBtn ? 'pr-24' : 'pr-8'
              ])}
              onKeyUp={autoResize}
              style={{
                height: baseHeight
              }}
              ref={ref}
            />

            {/* Tool */}
            <div className='absolute right-3 button-hover inline-flex gap-2 items-center text-xl'>
              {/* Media icon */}
              {showMedia && (
                <div
                  className='flex items-center'
                  onClick={() => fileDialogRef.current.click()}
                >
                  <MdOutlineImage
                    className='inline text-greenColor hover:text-[#049a4f] transition outline-none'
                    data-tip='Media'
                  />

                  <input
                    type='file'
                    className='hidden'
                    ref={fileDialogRef}
                    accept='image/*, video/*'
                    onChange={handleFileUpload}
                    multiple
                  />
                </div>
              )}

              {/* Smile icon */}
              <HiOutlineEmojiHappy
                className='hover:text-yellow-600 text-[#F2C302] transition'
                onClick={() => setShowPicker(true)}
                data-tip='Emoji'
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
                {showPicker && (
                  <EmojiPicker
                    onEmojiClick={onEmojiClick}
                    pickerStyle={{
                      position: 'absolute',
                      right: '-20px'
                    }}
                  />
                )}
              </ModalWrapper>

              {/* Post */}
              {showPostBtn && (
                <AiOutlineSend
                  className={classNames([
                    'transition outline-none',
                    isContentEmpty()
                      ? 'cursor-default text-disabledColor'
                      : 'text-primaryColor hover:text-[#0864F1]'
                  ])}
                  data-tip='Post'
                  onClick={handlePostComment}
                />
              )}
            </div>
          </div>

          {/* Media list */}
          {mediaList.length !== 0 && (
            <MediaList mediaList={mediaList} setMediaList={setMediaList} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TextEditor

import classNames from "classnames"
import React from "react"
import { useState } from "react"
import { AiFillHeart } from "react-icons/ai"
import { BiHide } from "react-icons/bi"
import { BsReply, BsThreeDots } from "react-icons/bs"
import { FiChevronUp } from "react-icons/fi"
import { Link } from "react-router-dom"
import OptionModal from "./modals/OptionModal"
import TextEditor from "./TextEditor"

const Comment = (props) => {
  const {
    text,
    mediaList,
    author,
    replies,
    showReplies,
    triggerShowReplies,
    smallAvatar,
    children,
  } = props
  const [showMore, setShowMore] = useState(false)
  const [like, setLike] = useState(false)
  const [likes, setLikes] = useState(5)

  // States use for reply function
  const [content, setContent] = useState()
  const [replyMediaList, setReplyMediaList] = useState([])

  // Like/Unlike handle
  const triggerLike = () => {
    if (like) {
      setLike(false)
      setLikes(likes - 1)
    } else {
      setLike(true)
      setLikes(likes + 1)
    }
  }

  return (
    <div className='relative my-1'>
      {/* Person */}
      <div className='flex items-start min-w-0 gap-2'>
        {/* Avatar */}
        <div>
          <Link
            to={"/@" + author.id}
            className={classNames([
              "flex items-center",
              !smallAvatar ? "min-w-[40px] w-10" : "min-w-[32px] w-8",
            ])}
          >
            <img
              className='w-full rounded-full'
              src={author.src}
              alt="Author's avatar"
            />
          </Link>
        </div>

        {/* Comment, Name, Time */}
        <div className='px-3 pb-2 pt-0.5 rounded-2xl bg-mainBackground relative min-w-[224px]'>
          <div className='flex items-center justify-between'>
            <Link
              to={"/@" + author.id}
              className='font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-normalText w-full hover:underline'
            >
              {author.name}
            </Link>

            <div className='relative'>
              <button
                className='rounded-full hover:bg-lightBackground p-2 -mr-2 ml-1 transition'
                onClick={() => setShowMore(true)}
              >
                <BsThreeDots className='' />
              </button>

              <OptionModal
                isShowing={showMore}
                setShowing={setShowMore}
                menuList={[
                  [
                    <p className='flex items-center'>
                      <BiHide className='text-lg mr-3' /> Hide this comment
                    </p>,
                  ],
                ]}
              />
            </div>
          </div>

          <div className='text-normalText text-textColor relative -mt-1'>
            {text}
          </div>

          {/* Likes count */}
          {likes !== 0 && (
            <div className='absolute h-4 bg-[#f3f3f3] rounded-xl right-1 -bottom-4 flex items-center gap-2 px-1 py-3 shadow-soft'>
              <AiFillHeart className='text-loveColor' />{" "}
              <span className='text-xs'>{likes}</span>
            </div>
          )}
        </div>
      </div>

      <div
        className={classNames([
          "mr-4",
          !smallAvatar ? "ml-[60px]" : "ml-[52px]",
        ])}
      >
        {/* Buttons, time and count */}
        <div className='flex items-center text-[13px] mt-1'>
          <div className='flex items-center font-medium'>
            <div className='w-10 text-left'>
              <button
                className={classNames([
                  "hover:underline",
                  like && "text-loveColor",
                ])}
                onClick={triggerLike}
              >
                Like
              </button>
            </div>
            <div className='w-10 text-left'>
              <button className='hover:underline'>Reply</button>
            </div>
            <p className='text-timeColor font-normal ml-4'>1 hour ago</p>
          </div>
        </div>

        {/* Replies */}
        {replies !== 0 && replies != null && (
          <div>
            {/* Line */}
            <div
              className={classNames([
                "border-l-2 border-b-2 rounded-bl-lg absolute top-12 left-5 w-7",
                !showReplies ? "bottom-[10px]" : "bottom-[14px]",
              ])}
            />

            {/* Replies Count / Hide Replies */}
            {!showReplies && (
              <div>
                <button
                  className='text-[13px] font-medium hover:underline'
                  onClick={triggerShowReplies}
                >
                  <BsReply className='inline-block mr-2 -mt-1' />
                  {replies} replies
                </button>
              </div>
            )}

            {children}

            {showReplies && (
              <div className='mb-3'>
                <button
                  className='text-[13px] font-medium hover:underline my-1 ml-[52px] flex items-center gap-1'
                  onClick={triggerShowReplies}
                >
                  <FiChevronUp />
                  Hide all replies
                </button>

                <TextEditor
                  content={content}
                  setContent={setContent}
                  mediaList={replyMediaList}
                  setMediaList={setReplyMediaList}
                  showMedia
                  showPostBtn
                  smallAvatar
                  placeholder='Add a reply'
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment

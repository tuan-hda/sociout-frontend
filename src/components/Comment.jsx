import classNames from "classnames"
import React from "react"
import { useState } from "react"
import { BiHide } from "react-icons/bi"
import { BsReply, BsThreeDots } from "react-icons/bs"
import { Link } from "react-router-dom"
import OptionModal from "./modals/OptionModal"

const Comment = ({
  text,
  mediaList,
  author,
  replies,
  showReplies,
  triggerShowReplies,
  smallAvatar,
}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='relative'>
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
        <div className='px-3 pb-2 pt-1 rounded-2xl bg-mainBackground'>
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

          <p className='text-normalText text-textColor relative'>
            {text}
            <div>
              <p className='hover:underline cursor-pointer'>153 likes</p>
            </div>
          </p>
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
              <button className='hover:underline'>Like</button>
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
            {/* Replies Count / Hide Replies */}
            {!showReplies ? (
              <div>
                <button
                  className='text-[13px] font-medium hover:underline'
                  onClick={triggerShowReplies}
                >
                  <BsReply className='inline-block mr-2 -mt-1' />
                  {replies} replies
                </button>

                {/* Line */}
                <div className='border-l-2 border-b-2 rounded-bl-lg absolute top-12 bottom-[10px] left-5 w-7'></div>
              </div>
            ) : (
              <div>
                <button
                  className='text-[13px] font-medium hover:underline mb-1'
                  onClick={triggerShowReplies}
                >
                  Hide all replies
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment

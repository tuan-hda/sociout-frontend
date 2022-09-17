import classNames from "classnames"
import React from "react"
import { useState } from "react"
import { BiUserPlus } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import OptionModal from "./modals/OptionModal"

// Props:
// - name         => Person's name
// - time         => createdAt
// - src          => Avatar source
// - id           => Person's id
// - underline    => underline when hover
// - underlineId  => underlineId when hover
// - hideAddBtn   => Hide add friend button
// - bio          => Person's bio
// - leftAlignBio => Left align the bio
// - clickableId  => Whether if id is clickable
// - menuList
// - isChatRoom   => Whether if this is a Chat room
// - latestMsg    => Latest message of this chat room
// - createdAt    => Latest message sent time
// - read         => Whether if latest message is read
const Person = (props) => {
  const {
    name,
    time,
    src,
    id,
    underline,
    underlineId,
    hideAddBtn,
    bio,
    leftAlignBio,
    bigAvatar,
    clickableId,
    menuList,
    isChatRoom,
    latestMsg,
    createdAt,
    read,
  } = props

  const [showMore, setShowMore] = useState(false)
  const navigate = useNavigate()

  const child = (
    <p
      className={classNames([
        "font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-normalText w-full leading-4",
        underline && "hover:underline",
      ])}
    >
      {name}
    </p>
  )

  return (
    <div>
      <div className='flex items-center'>
        {/* Avatar */}
        {time ? (
          <Link
            to={"/@" + id}
            className='max-w-[40px] block float-left w-10 h-10'
            onMouseUp={(e) => e.stopPropagation()}
          >
            <img src={src} alt="Person's avatar" className='rounded-full' />
          </Link>
        ) : (
          <div className='border-[#eee] border-[1px] rounded-full'>
            <img
              src={src}
              alt="Person's avatar"
              className={classNames([
                "rounded-full",
                !bigAvatar ? "w-10 h-10" : "w-12 h-12",
              ])}
            />
          </div>
        )}

        {/* Name + Time / id */}
        {!isChatRoom && (
          <div className='ml-2 flex-1 min-w-0 flex items-center justify-between gap-2'>
            <div className='flex-1 min-w-0'>
              {/* Name */}
              {underline ? (
                <Link className='w-full' to={"/@" + id}>
                  {child}
                </Link>
              ) : (
                child
              )}

              {/* Time / ID / Latest message */}
              <p
                className={classNames([
                  "text-idColor text-[13px] inline-block",
                  underlineId && "hover:underline",
                  clickableId && "cursor-pointer",
                ])}
                onClick={() => {
                  if (clickableId) navigate("/@" + id)
                }}
              >
                {time ? time : "@" + id}
              </p>
            </div>

            {/* Add friend button   */}
            {!hideAddBtn && (
              <button className='w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition rounded-full'>
                <BiUserPlus className='fill-primaryColor text-xl' />
              </button>
            )}

            {/* More button */}
            {time && (
              <div className='relative'>
                <div
                  className={classNames(["p-2 button-hover rounded-full"])}
                  onClick={() => setShowMore(true)}
                  onMouseUp={(e) => e.stopPropagation()}
                >
                  <BsThreeDots />
                </div>

                {/* More modal */}
                {menuList && (
                  <OptionModal
                    menuList={menuList}
                    isShowing={showMore}
                    setShowing={setShowMore}
                  />
                )}
              </div>
            )}
          </div>
        )}

        {/* Chat room */}
        {isChatRoom && (
          <div className='ml-2 flex-1 min-w-0 flex justify-between flex-col'>
            {/* Name */}
            {child}

            {/* Latest message and Time */}
            <div
              className='text-[13px] flex gap-1'
              onClick={() => {
                if (clickableId) navigate("/@" + id)
              }}
            >
              <p
                className={classNames([
                  "overflow-hidden whitespace-nowrap text-ellipsis",
                  read ? "text-idColor" : "font-medium",
                ])}
              >
                {latestMsg}
              </p>
              {"•"}
              <span className='whitespace-nowrap text-idColor'>
                {createdAt}
              </span>
            </div>
          </div>
        )}

        {/* Unread Message Notification */}
        {isChatRoom && !read && (
          <p className='w-2 h-2 rounded-full bg-primaryColor' />
        )}
      </div>

      {/* Bio */}
      {bio && (
        <div
          className={classNames([
            "text-normalText text-textColor",
            leftAlignBio ? "mt-2" : "ml-12 mt-1",
          ])}
        >
          {bio}
        </div>
      )}
    </div>
  )
}

export default Person

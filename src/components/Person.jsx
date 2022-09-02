import classNames from 'classnames'
import React from 'react'
import { useState } from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import OptionModal from './modals/OptionModal'

// Props:
// - name         => Person's name
// - time         => createdAt
// - src          => Avatar source
// - id           => Person's id
// - underline    => underline when hover
// - underlineId  => underlineId when hover
// - hideAddBtn   => Hide add friend button
// - bio          => Person's bio
// - leftAlignBio    => Left align the bio
const Person = props => {
  const [showMore, setShowMore] = useState(false)
  const navigate = useNavigate()

  const child = (
    <p
      className={classNames([
        'font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-normalText w-full hover:underline'
      ])}
    >
      {props.name}
    </p>
  )

  return (
    <div>
      <div className='flex items-center'>
        {/* Avatar */}
        {props.time ? (
          <Link
            to={'/@' + props.id}
            className='max-w-[40px] block w-10 float-left'
            onMouseUp={e => e.stopPropagation()}
          >
            <img
              src={props.src}
              alt="Person's avatar"
              className='w-10 h-10 rounded-full'
            />
          </Link>
        ) : (
          <div>
            <img
              src={props.src}
              alt="Person's avatar"
              className='w-10 h-10 rounded-full'
            />
          </div>
        )}

        {/* Name + Time / id */}
        <div className='ml-2 flex-1 min-w-0 flex items-center justify-between gap-2'>
          <div className='flex-1 min-w-0'>
            {props.underline ? (
              <Link className='w-full' to={'/@' + props.id}>
                {child}
              </Link>
            ) : (
              child
            )}
            <p
              className={classNames([
                'mt-1 text-idColor text-[13px] leading-4 inline-block',
                props.underlineId && 'hover:underline',
                props.clickableId && 'cursor-pointer'
              ])}
              onClick={() => {
                if (props.clickableId) navigate('/@' + props.id)
              }}
            >
              {props.time ? props.time : '@' + props.id}
            </p>
          </div>

          {/* Add friend button   */}
          {!props.hideAddBtn && (
            <button className='w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition rounded-full'>
              <BiUserPlus className='fill-primaryColor text-xl' />
            </button>
          )}

          {/* More button */}
          {props.time && (
            <div className='relative'>
              <div
                className={classNames(['p-2 button-hover rounded-full'])}
                onClick={() => setShowMore(true)}
                onMouseUp={e => e.stopPropagation()}
              >
                <BsThreeDots />
              </div>

              {/* More modal */}
              {props.menuList && (
                <OptionModal
                  menuList={props.menuList}
                  isShowing={showMore}
                  setShowing={setShowMore}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bio */}
      {props.bio && (
        <div
          className={classNames([
            'text-normalText text-textColor',
            props.leftAlignBio ? 'mt-2' : 'ml-12 mt-1'
          ])}
        >
          {props.bio}
        </div>
      )}
    </div>
  )
}

export default Person

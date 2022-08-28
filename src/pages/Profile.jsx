import React, { useRef, useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { BsThreeDots, BsLink45Deg } from 'react-icons/bs'
import { IoLocationOutline, IoClose } from 'react-icons/io5'
import { FiEdit2 } from 'react-icons/fi'
import {
  AiOutlineCalendar,
  AiOutlineCamera,
  AiOutlineDelete
} from 'react-icons/ai'
import classNames from 'classnames'
import globalObject from '../utils/globalObject'
import ModalWrapper from './../components/modals/ModalWrapper'
import defaultCover from '../img/default-cover.jpg'
import ReactTooltip from 'react-tooltip'
import copyToClipboard from './../utils/copyToClipboard'
import { Navigation, Person, TextField } from '../components'

const EditButton = ({ className, onClick, removed, dataTip }) => {
  return (
    <button
      onClick={onClick}
      data-tip={dataTip}
      className={classNames([
        'w-10 h-10 flex items-center justify-center bg-gray-700 bg-opacity-80 hover:opacity-70 rounded-full transition absolute z-10',
        className
      ])}
    >
      {!removed ? <AiOutlineCamera /> : <AiOutlineDelete />}
    </button>
  )
}

const Cover = ({ src, roundedTop, edit, editInfo, setEditInfo }) => {
  const ref = useRef()

  if (!editInfo) editInfo = {}

  const onUploadCover = e => {
    const {
      target: { files }
    } = e
    setEditInfo({ ...editInfo, cover: URL.createObjectURL(files[0]) })
  }

  return (
    <div
      className={classNames([
        'relative flex items-center justify-center aspect-[3] overflow-hidden',
        roundedTop && 'rounded-tl-xl rounded-tr-xl'
      ])}
    >
      <LazyLoadImage
        src={editInfo.cover ? editInfo.cover : src ? src : defaultCover}
        alt='Profile Bg'
        effect='blur'
        style={{
          objectFit: 'cover',
          width: '100%'
        }}
        wrapperClassName='w-full'
      />

      {/* Edit button */}
      {edit && (
        <EditButton
          onClick={() => ref.current.click()}
          dataTip='Change cover'
        />
      )}

      <input
        type='file'
        className='hidden'
        ref={ref}
        onChange={onUploadCover}
      />
    </div>
  )
}

const ProfileAvatar = ({ src, edit, editInfo, setEditInfo }) => {
  const ref = useRef()

  if (!editInfo) editInfo = {}

  const onUploadAvatar = e => {
    const {
      target: { files }
    } = e

    setEditInfo({ ...editInfo, avatar: URL.createObjectURL(files[0]) })
  }

  return (
    <div className='absolute left-4 w-1/4 flex items-center justify-center'>
      <LazyLoadImage
        src={
          editInfo.avatar
            ? editInfo.avatar
            : src
            ? src
            : 'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png'
        }
        alt='Profile Ava'
        effect='blur'
        wrapperClassName='border-4 border-white absolute w-full aspect-square rounded-full overflow-hidden bottom-0 translate-y-1/2'
        style={{
          objectFit: 'cover',
          height: '100%'
        }}
      />

      {/* Edit button */}
      {edit && (
        <EditButton
          className='mt-[2px]'
          onClick={() => ref.current.click()}
          dataTip='Change avatar'
        />
      )}

      <input
        type='file'
        className='hidden'
        ref={ref}
        onChange={onUploadAvatar}
      />
    </div>
  )
}

const Profile = () => {
  const [profile, setProfile] = useState({})
  const [id, setId] = useState()
  const [showMore, setShowMore] = useState(false)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [editInfo, setEditInfo] = useState({})

  const pathname = window.location.pathname
  const name = 'Hoàng Đình Anh Tuấn'

  useEffect(() => {
    setProfile({
      avatar:
        'https://pbs.twimg.com/profile_images/1551250555103633409/TFGJ_IBH_400x400.jpg',
      cover:
        'https://pbs.twimg.com/profile_banners/1283653858510598144/1649185576/1500x500'
    })

    // get profile id
    const tempPath = window.location.pathname
    const lastSlash = tempPath.lastIndexOf('/')
    let res
    if (lastSlash === 0) res = tempPath.substring(1)
    else res = tempPath.substring(1, lastSlash)
    setId(res)
  }, [])

  const onSave = () => {
    console.log('Saved')
    setShowEditProfile(false)
    setEditInfo({})
  }

  if (
    pathname === '/' + id + '/followers' ||
    pathname === '/' + id + '/following' ||
    pathname === '/' + id + '/friends'
  )
    return (
      <div>
        <div className='p-6 bg-white rounded-xl'>
          <Person
            name={globalObject.name}
            id={globalObject.id}
            src='https://pbs.twimg.com/profile_images/1551250555103633409/TFGJ_IBH_400x400.jpg'
            hideAddBtn
            underline
          />

          {/* Navigation */}
          <Navigation
            menuList={[
              ['Friends', '/' + id + '/friends'],
              ['Followers', '/' + id + '/followers'],
              ['Following', '/' + id + '/following']
            ]}
            className='text-normalText pt-3'
          />
        </div>
        <Outlet />
      </div>
    )

  return (
    <div className='p-6 rounded-xl bg-white'>
      {/* Images */}
      <div className='relative -mx-6 -mt-6 max-h-[200px]'>
        {/* Background image */}
        <Cover roundedTop src={profile.cover} />

        {/* Avatar */}
        <ProfileAvatar src={profile.avatar} />
      </div>

      {/* Edit and Option button */}
      <div className='-mr-2 mt-3 flex justify-end items-center gap-4'>
        {/* More */}
        <div className='relative'>
          <button
            className='p-2 button-hover rounded-full'
            onClick={() => setShowMore(true)}
          >
            <BsThreeDots />
          </button>

          {/* More Modal */}
          <ModalWrapper
            isShowing={showMore}
            setShowing={setShowMore}
            top='24px'
            right='0'
          >
            <ul className='text-normalText p-3'>
              {[
                [
                  'Copy link to profile',
                  '',
                  () => copyToClipboard(window.location.href)
                ],
                [`Unfollow ${id}`],
                [`Block ${id}`],
                [`Report ${id}`, 'text-errorColor']
              ].map(([children, classname, onClick], index) => (
                <li
                  className={classNames([
                    'p-3 button-hover rounded-xl whitespace-nowrap',
                    classname
                  ])}
                  key={index}
                  onClick={onClick}
                >
                  {children}
                </li>
              ))}
            </ul>
          </ModalWrapper>
        </div>

        {/* Edit profile */}
        <div className='relative'>
          <button
            className='hover:opacity-90 transtion bg-primaryColor rounded-lg text-white font-medium text-sm flex items-center justify-center px-2 gap-2 h-8'
            onClick={() => setShowEditProfile(true)}
          >
            <FiEdit2 />
            <span>Edit profile</span>
          </button>

          {/* Modal Edit Profile */}
          <ModalWrapper
            isShowing={showEditProfile}
            setShowing={setShowEditProfile}
            center
            overlayBg='#676767'
            bodyClassname='w-full max-w-[90%] md:max-w-xl max-h-[90%] overflow-auto'
          >
            {/* Close button */}
            <button
              className='absolute top-2 right-2 p-2 rounded-full button-hover'
              onClick={() => setShowEditProfile(false)}
            >
              <IoClose className='text-2xl' />
            </button>

            <div className='p-4 w-full text-center'>
              <h4 className='font-bold text-lg'>Edit profile</h4>

              {/* Modal: Avatar and Cover */}
              <div className='-mx-[14px] mt-4 relative'>
                <Cover
                  src={profile.cover}
                  edit
                  editInfo={editInfo}
                  setEditInfo={setEditInfo}
                />

                <ProfileAvatar
                  src={profile.avatar}
                  edit
                  editInfo={editInfo}
                  setEditInfo={setEditInfo}
                />
              </div>

              {/* Modal: Information */}
              <div className='mt-[calc(16px+12.5%)] text-left text-normalText px-1'>
                {/* Name */}
                <div className='flex items-center justify-between gap-4'>
                  {['First name', 'Last name'].map((children, index) => (
                    <div className='flex-1' key={index}>
                      <p className='font-semibold'>{children}</p>

                      <TextField
                        name='name'
                        kind='normal'
                        wrapperClassname='h-10 w-full mt-2'
                        inputClassname='text-textColor bg-white'
                      />
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className='mt-4'>
                  <p className='font-semibold'>Bio</p>

                  <textarea
                    name='bio'
                    className='overflow-auto resize-none w-full bg-blueGray rounded-[10px] mt-2 outline-lightBlue p-[13px] text-textColor font-medium'
                  />
                </div>

                {/* Location & Website */}
                {['Location', 'Website', 'Date of birth'].map(
                  (children, index) => (
                    <div className='mt-4' key={index}>
                      <p className='font-semibold'>{children}</p>

                      <TextField
                        name='name'
                        kind='normal'
                        wrapperClassname='h-10 w-full mt-2'
                        inputClassname='text-textColor'
                      />
                    </div>
                  )
                )}
              </div>

              {/* Save button */}
              <div
                className='text-normalText font-semibold rounded-lg bg-primaryColor text-white block mt-6 mx-1 hover:bg-opacity-90 transition h-9 leading-9 cursor-pointer'
                onClick={onSave}
              >
                Save
              </div>
            </div>
          </ModalWrapper>
        </div>
      </div>

      {/* Information */}
      <div className='mt-[7%] text-textColor text-normalText'>
        {/* Name and Id */}
        <h3 className='font-bold text-xl'>{name}</h3>
        <p className='text-idColor'>{id}</p>

        {/* Bio */}
        <div className='mt-4'>
          The Grim Reaper is a music maker. MAJOR DEBUT ALBUM COMING DECEMBER
          2022 (UMG) // mama
        </div>

        {/* Location */}
        <div className='mt-3 flex items-center'>
          <IoLocationOutline className='text-idColor text-xl' />
          <span className='ml-1'>Washington, D.C.</span>
        </div>

        {/* Link */}
        <div className='flex items-center'>
          <BsLink45Deg className='text-idColor text-xl' />
          <a
            href='https://www.youtube.com/channel/UCL_qhgtOy0dy1Agp8vkySQg'
            className='ml-1 text-linkColor overflow-hidden whitespace-nowrap text-ellipsis w-64'
            target='blank'
          >
            www.youtube.com/channel/UCL_qhgtOy0dy1Agp8vkySQg
          </a>
        </div>

        {/* Joined date */}
        <div className='flex items-center'>
          <AiOutlineCalendar className='text-idColor text-lg' />
          <span className='ml-1'>Joined July 2020</span>
        </div>

        {/* Friends, Following & Followers */}
        <div className='text-normalText text-textColor flex items-center gap-6 mt-3'>
          {[
            ['Friends', 'friends', 300],
            ['Followers', 'followers', 476],
            ['Following', 'following', '1.3M']
          ].map(([title, path, num], index) => (
            <Link
              to={'/' + id + '/' + path}
              className='hover:underline'
              key={index}
            >
              <span className='font-semibold text-black'>{num}</span> {title}
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <Navigation
        menuList={[
          ['Posts', '/' + id],
          ['Medias', '/' + id + '/medias'],
          ['Likes', '/' + id + '/likes'],
          ['Replies', '/' + id + '/replies']
        ]}
        className='text-normalText pt-3'
      />

      <ReactTooltip delayShow={1000} />
    </div>
  )
}

export default Profile

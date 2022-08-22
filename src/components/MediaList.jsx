import React, { useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'

const Media = ({ src, name, className, removeMedia, index, type }) => {
  return (
    <div className='relative'>
      {type.includes('image') ? (
        <img
          src={src}
          alt={name}
          className={className}
          style={{
            borderRadius: '12px',
            objectFit: 'cover'
          }}
        />
      ) : (
        <video className='rounded-xl w-full max-h-[650px]' controls>
          <source src={src} type={type} />
        </video>
      )}

      {/* Remove button */}
      <button
        className='absolute top-2 right-2 bg-gray-300 button-hover rounded-full w-8 h-8 p-2 flex items-center justify-center bg-opacity-50'
        onClick={() => removeMedia(index)}
      >
        <GrClose />
      </button>
    </div>
  )
}

const MediaList = ({ mediaList, setMediaList }) => {
  const [mediaStyle, setMediaStyle] = useState('')

  useEffect(() => {
    switch (mediaList.length) {
      case 1:
        setMediaStyle(['rounded-xl w-full aspect-square'])
        break
      case 2:
        setMediaStyle(Array(2).fill('rounded-xl w-full aspect-[6/7]'))
        break
      case 3:
        setMediaStyle([
          'rounded-xl w-full aspect-[6/7]',
          ...Array(2).fill('rounded-xl w-full aspect-[16/9]')
        ])
        break
      case 4:
        setMediaStyle(Array(4).fill('rounded-xl w-full aspect-[16/9]'))
        break
      default:
    }
  }, [mediaList])

  const getMediaSrc = file => URL.createObjectURL(file)
  const getMedia = index => {
    if (index >= mediaList.length) return ''
    return (
      <Media
        key={index}
        src={getMediaSrc(mediaList[index])}
        name={mediaList[index].name}
        className={mediaStyle[index]}
        removeMedia={removeMedia}
        index={index}
        type={mediaList[index].type}
      />
    )
  }

  const removeMedia = index => {
    const temp = [...mediaList]
    temp.splice(index, 1)
    setMediaList(temp)
  }

  return (
    <div className='mt-4 w-full flex gap-3'>
      <div className='flex-1 flex flex-col gap-3'>
        {/* Item 1 */}
        {getMedia(0)}
        {/* Item 3 */}
        {mediaList.length === 4 && getMedia(2)}
      </div>

      {mediaList.length > 1 && (
        <div className='flex-1 flex flex-col gap-3'>
          {/* Item 2, 3, 4 */}
          {getMedia(1)}
          {mediaList.length === 3 && getMedia(2)}
          {getMedia(3)}
        </div>
      )}
    </div>
  )
}

export default MediaList

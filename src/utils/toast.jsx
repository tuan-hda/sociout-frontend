import React from 'react'
import classnames from 'classnames'
import { default as myToast } from 'react-hot-toast'
import { MdOutlineClose } from 'react-icons/md'
import { HiLightningBolt } from 'react-icons/hi'

const toast = (heading, body, width, backgroundColor) => {
  return myToast.custom(
    t => (
      <div
        className={classnames([
          width ?? '',
          'flex items-center w-[400px] px-4 py-6 text-white shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:-translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out',
          t.visible ? 'bottom-0' : '-bottom-96',
          backgroundColor ?? 'bg-gray-900'
        ])}
      >
        <div className='text-xl'>
          <HiLightningBolt />
        </div>

        {/* Content */}
        <div className='flex flex-col items-start justify-center ml-4'>
          {heading && (
            <h1 className='text-white font-semibold leading-none tracking-wider mb-2'>
              {heading}
            </h1>
          )}

          <p className='text-white leading-relaxed tracking-wider text-sm'>
            {body}
          </p>
        </div>

        <div
          onClick={() => myToast.dismiss(t.id)}
          className='absolute top-2 right-2 cursor-pointer text-lg'
        >
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: 'notification', position: 'bottom-center' }
  )
}

export default toast

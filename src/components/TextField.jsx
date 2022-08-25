import React from 'react'
import classNames from 'classnames'

const TextField = ({
  placeholderText,
  type,
  icon,
  name,
  marginTop,
  register,
  width,
  kind,
  inputClassname,
  wrapperClassname
}) => {
  return (
    <div
      className={classNames([
        wrapperClassname ? wrapperClassname : 'h-[50px] w-[350px]',
        'pl-4 pr-2 gap-2 flex items-center rounded-[10px] bg-blueGray outline-lightBlue outline-2 focus-within:outline'
      ])}
      style={{
        marginTop,
        width
      }}
    >
      {/* Show icon if type !== normal */}
      {(!kind || kind !== 'normal') && (
        <div className='w-4 h-4 flex items-center'>
          {icon ? (
            <img src={icon} alt={name + 'icon'} />
          ) : (
            <span className='font-extrabold text-[#868AA5]'>
              {name.charAt(0).toUpperCase() + name.charAt(1)}
            </span>
          )}
        </div>
      )}

      {/* Input */}
      <input
        className={classNames([
          inputClassname,
          'flex-1 w-full placeholder-[#8B8FA8] text-darkInput outline-none bg-transparent font-medium leading-7 rounded-md'
        ])}
        placeholder={placeholderText}
        name={name}
        {...register}
        type={type ?? 'text'}
      />
    </div>
  )
}

export default TextField

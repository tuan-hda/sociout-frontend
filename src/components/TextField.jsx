import React from 'react'

const TextField = ({
  placeholderText,
  type,
  icon,
  name,
  marginTop,
  register,
  width
}) => {
  return (
    <div
      className={`w-[350px] h-[50px] pl-4 flex items-center bg-blueGray rounded-[10px] outline-lightBlue outline-2 focus-within:outline`}
      style={{
        marginTop,
        width
      }}
    >
      {/* Icon */}

      <div className='w-4 h-4 flex items-center'>
        {icon ? (
          <img src={icon} alt={name + 'icon'} />
        ) : (
          <span className='font-extrabold text-[#868AA5]'>
            {name.charAt(0).toUpperCase() + name.charAt(1)}
          </span>
        )}
      </div>

      {/* Input */}
      <input
        className='w-full placeholder-[#8B8FA8] text-darkInput outline-none bg-transparent px-4 font-medium leading-7'
        placeholder={placeholderText}
        name={name}
        {...register}
        type={type ?? 'text'}
      />
    </div>
  )
}

export default TextField

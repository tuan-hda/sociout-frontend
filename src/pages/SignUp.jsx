import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import capitalize from '../components/utils/capitalize'

const TextField = ({
  placeholderText,
  type,
  icon,
  name,
  marginTop,
  register
}) => {
  return (
    <div
      className={`w-[350px] h-[50px] pl-4 flex items-center bg-blueGray rounded-[10px] outline-[#80BEFC] outline-2 focus-within:outline`}
      style={{
        marginTop
      }}
    >
      {/* Icon */}
      <div className='w-4 h-4'>
        {icon && <img src={icon} alt={name + 'icon'} />}
      </div>

      {/* Input */}
      <input
        className='w-full placeholder-[#8B8FA8] text-[#3C4071] outline-none bg-transparent px-4 font-medium leading-8'
        placeholder={placeholderText}
        name={name}
        {...register}
        type={type ?? 'text'}
      />
    </div>
  )
}

const Button = ({
  width,
  height,
  text,
  backgroundColor,
  color,
  fontWeight,
  fontSize,
  padding,
  type
}) => {
  return (
    <button
      className={`min-w-button min-h-button flex items-center hover:opacity-90 rounded-[5px] p-4 176 
      `}
      type={type}
      style={{
        width,
        height,
        backgroundColor,
        color,
        fontWeight,
        fontSize,
        padding
      }}
    >
      <div className='w-full'>{text}</div>
    </button>
  )
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
})

const SignUp = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // Handle submit form
  const onSubmit = data => console.log(data)

  return (
    <div className='flex items-center justify-center bg-mainBackground overflow-auto h-screen min-h-[732px] px-4'>
      {/* Wrapper */}
      <div className='flex items-center justify-center h-[90%] min-h-[700px] max-w-full aspect-[8/5] bg-[white]'>
        {/* Left */}
        <div className='h-full authRes:block hidden'>
          <img
            src={require('../img/login_bg.png')}
            alt='Login background'
            className='object-cover h-full'
          />
        </div>

        {/* Right */}
        <div className='flex-1 flex items-center justify-center min-w-[50%]'>
          {/* Wrapper */}
          <div>
            <header>
              <h2 className='text-primary font-bold text-[#2F3367]'>Sign Up</h2>
              <p className='text-[#303468] mt-3 font-medium text-base'>
                Please fill your information below
              </p>
            </header>

            {/* Error messages */}
            {Object.keys(errors).length > 0 && (
              <div className='relative rounded-[10px] bg-[#FFEBE9] border-[1px] border-[#DE5F67] p-4 mt-5'>
                {/* Close button */}
                <button
                  className='absolute right-0 top-0 p-2'
                  onClick={() => clearErrors()}
                >
                  <IoClose className='text-[#DE5F67] text-lg' />
                </button>

                {Object.keys(errors).map((key, index) => (
                  <p className='font-light' key={index}>
                    {capitalize(errors[key].message)}.
                  </p>
                ))}
              </div>
            )}

            {/* Form wrapper */}
            <form
              className='mt-8 font-medium'
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                placeholderText='Email'
                type='text'
                icon={require('../img/icon/profile.png')}
                name='email'
                register={register('email')}
              />
              <TextField
                placeholderText='Password'
                type='password'
                icon={require('../img/icon/password.png')}
                name='password'
                marginTop='20px'
                register={register('password')}
              />
              <TextField
                placeholderText='Confirm password'
                type='password'
                icon={require('../img/icon/password.png')}
                name='confirmPassword'
                marginTop='20px'
                register={register('confirmPassword')}
              />

              {/* Button */}
              <div className='mt-7 space-y-4 flex justify-end'>
                <Button
                  width='130px'
                  height='50px'
                  text={
                    <div className='flex justify-between items-center'>
                      <span>Next</span>
                      <IoIosArrowForward className='text-lg font-extrabold' />
                    </div>
                  }
                  backgroundColor='#0078EF'
                  color='#fff'
                  fontWeight='600'
                  type='submit'
                />
              </div>
            </form>

            <footer className='mt-8'>
              <hr />
              <div className='flex justify-between mt-5'>
                <span className='text-darkBlue font-medium'>
                  Already have an account?
                </span>
                <Link to='/login' className='font-semibold text-textBlue'>
                  Login
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/containers'
import { IoIosArrowForward } from 'react-icons/io'

const Input = ({ props }) => {
  const { placeholderText, type, icon, name } = { ...props }

  return (
    <div className='w-[350px] h-[50px] px-4 flex items-center bg-blueGray rounded-[10px] outline-[#80BEFC] outline-2 focus-within:outline'>
      <div className='w-4 h-4'>
        {icon && <img src={icon} alt={name + 'icon'} />}
      </div>

      <input
        type={type ? type : 'text'}
        placeholder={placeholderText}
        className='w-full placeholder-[#8B8FA8] text-[#3C4071] outline-none bg-transparent ml-4 font-medium'
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
  padding
}) => {
  return (
    <button
      className={`min-w-button min-h-button flex items-center hover:opacity-90 rounded-[5px] p-4 176 
      `}
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

const Login = () => {
  const getInputProps = (placeholderText, type, icon, name) => ({
    placeholderText: placeholderText,
    type: type,
    icon: icon,
    name: name
  })

  return (
    <div className='flex items-center justify-center bg-mainBackground overflow-auto h-screen min-h-[732px]'>
      <div className='flex items-center justify-center h-[700px] w-authHalf authRes:w-full max-w-authRes bg-[white]'>
        {/* Left */}
        <div className='h-full authRes:block hidden'>
          <img
            src={require('../img/login_bg.png')}
            alt='Login background'
            className='object-contain h-full'
          />
        </div>

        {/* Right */}
        <div className='flex-1 flex items-center justify-center min-w-authHalf'>
          {/* Wrapper */}
          <div>
            <header>
              <h2 className='text-primary font-bold text-[#2F3367]'>
                Login to your account
              </h2>
              <p className='text-[#303468] mt-3 font-medium text-base'>
                Welcome back
              </p>
            </header>

            {/* Form wrapper */}
            <div className='mt-8 space-y-5 font-medium'>
              <Input
                props={getInputProps(
                  'Email',
                  'text',
                  require('../img/icon/profile.png'),
                  'profile'
                )}
              />
              <Input
                props={getInputProps(
                  'Password',
                  'password',
                  require('../img/icon/password.png')
                )}
              />
            </div>

            {/* Remember me & forgot password*/}
            <div className='flex justify-between items-center mt-7'>
              <div className=''>
                <input
                  type='checkbox'
                  id='rememberMe'
                  className='accent-blue-500'
                />
                <label
                  className='text-darkBlue ml-3 font-medium'
                  htmlFor='rememberMe'
                >
                  Remember me
                </label>
              </div>

              <Link
                to='/forgotpassword'
                className='text-textBlue font-semibold'
              >
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <div className='mt-8 space-y-4 flex justify-end'>
              <Button
                width='130px'
                height='50px'
                text={
                  <div className='flex justify-between items-center'>
                    <span>Login</span>
                    <IoIosArrowForward className='text-lg font-extrabold' />
                  </div>
                }
                backgroundColor='#0078EF'
                color='#fff'
                fontWeight='600'
              />
            </div>

            <footer className='mt-8'>
              <hr />
              <div className='flex justify-between mt-5'>
                <span className='text-darkBlue font-medium'>
                  Don't have an account?
                </span>
                <Link to='/signup' className='font-semibold text-textBlue'>
                  Join now
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

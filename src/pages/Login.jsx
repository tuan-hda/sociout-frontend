import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button, ErrorMessage } from '../components/index'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { logInAction } from '../actions/index'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  rememberMe: yup.boolean()
})

const Login = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // Handle submit form
  const onSubmit = async data => {
    const { email, password } = data
    try {
      const result = dispatch(logInAction(email, password))
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

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
          <div className='w-[350px]'>
            <header className=''>
              <h2 className='text-primary font-bold text-[#2F3367]'>
                Login to your account
              </h2>
              <p className='text-[#303468] mt-3 font-medium text-base'>
                Welcome back
              </p>
            </header>

            {/* Error messages */}
            {Object.keys(errors).length > 0 && (
              <ErrorMessage errors={errors} clearErrors={clearErrors} />
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

              {/* Remember me & forgot password*/}
              <div className='flex justify-between items-center mt-7'>
                <div className=''>
                  <input
                    type='checkbox'
                    id='rememberMe'
                    name='rememberMe'
                    className='accent-blue-500'
                    {...register('rememberMe')}
                  />
                  <label
                    className='text-darkBlue ml-3 font-medium'
                    htmlFor='rememberMe'
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to='/recoverpassword'
                  className='text-textBlue font-semibold'
                >
                  Forgot password?
                </Link>
              </div>

              {/* Button */}
              <div className='mt-7 space-y-4 flex justify-end'>
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
                  type='submit'
                />
              </div>
            </form>

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

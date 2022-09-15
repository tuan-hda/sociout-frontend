import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button, ErrorMessage, Loader } from '../components/index'
import * as yup from 'yup'
import { signUpService } from '../services/index'
import toast from '../utils/toast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useSelector } from 'react-redux'

const schema = yup.object().shape({
  email: yup.string().email().required('email is required'),
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required('password is required')
    .matches(/^.*\d.*/g, 'password must contain at least 1 number')
    .matches(
      /^.*[A-Z].*/g,
      'password must contain at least 1 uppercase character'
    )
    .matches(
      /^.*[a-z].*/g,
      'password must contain at least 1 lowercase character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
})

const SignUp = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const { loading: authLoading } = useSelector(state => state.auth)

  // Handle submit form
  const onSubmit = async data => {
    setLoading(true)
    try {
      const { email, firstName, lastName, password } = data
      await signUpService(email, firstName, lastName, password)
      toast('', 'Signed up successfully.')
      setTimeout(() => navigate('/login'), 2000)
    } catch (err) {
      if (err.response) {
        console.log(err.response.header)
        console.log(err.response.status)
        console.log(err.response.data)
      } else {
        console.log(err.response)
      }
      setError({ error: { message: 'Some errors have occurred' } })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center bg-mainBackground overflow-auto h-screen min-h-[732px] px-4'>
      {(loading || authLoading) && <Loader />}

      {/* Wrapper */}
      <div className='flex items-center justify-center h-[90%] min-h-[700px] max-w-full aspect-[8/5] bg-[white]'>
        {/* Left */}
        <div className='h-full authRes:block hidden'>
          <LazyLoadImage
            src={require('../img/login_bg.png')}
            alt='Login background'
            wrapperClassName='object-cover h-full'
            effect='blur'
          />
        </div>

        {/* Right */}
        <div className='flex-1 flex items-center justify-center min-w-[50%]'>
          {/* Wrapper */}
          <div className='w-[350px]'>
            <header className=''>
              <h2 className='text-primary font-bold text-[#2F3367]'>Sign Up</h2>
              <p className='text-[#303468] mt-3 font-medium text-base'>
                Please fill your information below
              </p>
            </header>

            {/* Error messages */}
            {Object.keys(errors).length > 0 && (
              <ErrorMessage clearErrors={clearErrors} errors={errors} />
            )}

            {error && (
              <ErrorMessage errors={error} clearErrors={() => setError()} />
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
              <div className='flex justify-between mt-5'>
                <TextField
                  placeholderText='First name'
                  type='text'
                  name='firstName'
                  register={register('firstName')}
                  width='170px'
                />
                <TextField
                  placeholderText='Last name'
                  type='text'
                  name='lastName'
                  register={register('lastName')}
                  width='170px'
                />
              </div>
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
                <span
                  className='text-darkBlue font-medium'
                  onClick={() =>
                    toast.success('Signed up successfully.', {
                      position: 'bottom-center',
                      style: {
                        fontSize: '15px',
                        padding: '22px 16px'
                      }
                    })
                  }
                >
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

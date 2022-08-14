import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button } from '../components/index'
import * as yup from 'yup'
import capitalize from '../components/utils/capitalize'
import { useEffect } from 'react'
import { useRef } from 'react'

const schema = yup.object().shape({
  email: yup.string().email().required()
})

const lastStepSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8)
    .max(16)
    .required('password is required')
    .matches(/^.*\d.*/g, 'password must contain at least 1 number')
    .matches(/^.*[A-Za-z].*/g, 'password must contain at least 1 char'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match')
})

const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // There are 3 step:
  //    1. Enter Email
  //    2. Enter OTP
  //    3. Set new password
  const [currentStep, setStep] = useState(0)
  const [otp, setOtp] = useState(new Array(6).fill(''))
  const ref = useRef()

  // STEP 1 HANDLING
  const onMailSubmit = data => {
    console.log(data)
    setStep(currentStep + 1)
  }

  // STEP 2 HANDLING
  const handleOtpChange = (e, index) => {
    const {
      target: { value }
    } = e

    if (!value.match(/^\d+$/)) {
      console.log(value)
      console.log("doesn't match")
      return
    }

    const newOtp = [...otp]
    newOtp[index] = value.charAt(value.length - 1)
    setOtp(newOtp)
  }

  const countFilledInputs = () => {
    let index = otp.filter(x => x !== '').length
    if (index === 6) {
      index = 5
    }
    return index
  }

  // Auto focus next input
  useEffect(() => {
    ref.current?.focus()
  }, [otp])

  const handleKeyDown = ({ key }) => {
    if (key === 'Backspace') {
      console.log('Handlekeydown')
      // Case 1: if all input are filled
      if (otp[5] !== '') {
        const newOtp = [...otp]
        newOtp[5] = ''
        setOtp(newOtp)
        console.log(newOtp)
        return
      }

      // Case 2: otherwise
      let currentIndex = countFilledInputs() - 1
      if (currentIndex < 0) currentIndex = 0
      const newOtp = [...otp]
      console.log(newOtp)
      newOtp[currentIndex] = ''
      setOtp(newOtp)
    }
  }

  const getOtp = () => {
    return otp.reduce((result, current) => (result += current), '')
  }

  const onOtpSubmit = e => {
    console.log(getOtp())
    setStep(currentStep + 1)
    e.preventDefault()
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
          <div>
            <header className='w-[350px]'>
              <h2 className='text-primary font-bold text-[#2F3367]'>
                Recover Password
              </h2>
              <p className='text-[#303468] mt-3 font-medium text-base'>
                {currentStep === 0 && "Don't worry, happens to the best of us"}
                {currentStep === 1 &&
                  'Fill the code you received from your email below'}
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
              onSubmit={
                currentStep === 1 ? onOtpSubmit : handleSubmit(onMailSubmit)
              }
            >
              {currentStep === 0 && (
                <TextField
                  placeholderText='Email'
                  type='text'
                  icon={require('../img/icon/profile.png')}
                  name='email'
                  register={register('email')}
                />
              )}

              {/* OTP input */}
              {currentStep === 1 && (
                <div className='flex justify-between'>
                  {otp.map((_, index) => (
                    <input
                      ref={index === countFilledInputs() ? ref : null}
                      key={index}
                      type='text'
                      className='w-[50px] h-[50px] outline-none bg-blueGray rounded-md text-center font-medium leading-7 text-darkInput focus:outline-lightBlue outline-2 border-none'
                      value={otp[index]}
                      onChange={e => handleOtpChange(e, index)}
                      onKeyDown={handleKeyDown}
                    />
                  ))}
                </div>
              )}

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
                  Already remember?
                </span>
                <Link to='/login' className='font-semibold text-textBlue'>
                  Back to login
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecoverPassword

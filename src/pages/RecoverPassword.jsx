import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button, ErrorMessage } from '../components/index'
import * as yup from 'yup'
import { useEffect } from 'react'
import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const schema = yup.object().shape({
  email: yup.string().email().required()
})

const lastStepSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, 'password must be at least 8 characters')
    .max(16, 'password must be at most 16 characters')
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
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'passwords must match')
})

const RecoverPassword = () => {
  // First step schema
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  // Last step schema
  const {
    register: l_register,
    handleSubmit: l_handleSubmit,
    clearErrors: l_clearErrors,
    formState: { errors: l_errors }
  } = useForm({
    resolver: yupResolver(lastStepSchema)
  })

  const navigate = useNavigate()

  // There are 3 step:
  //    1. Enter Email
  //    2. Enter OTP
  //    3. Set new password
  const [currentStep, setStep] = useState(0)
  const [otp, setOtp] = useState(new Array(6).fill(''))
  const ref = useRef()

  const [otpError, setOtpError] = useState({})

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
    e.preventDefault()
    if (getOtp().length < 6) {
      setOtpError({
        content: {
          message: 'You must fill in all fields'
        }
      })
      return
    }
    setOtpError({})
    setStep(currentStep + 1)
  }

  // STEP 3 HANDLING
  const onSetNewPasswordSubmit = data => {
    console.log(data)
    navigate('/login')
  }

  // SUMMARY
  const steps = [
    {
      message: 'We will send you an email',
      errors: errors,
      submitOption: handleSubmit(onMailSubmit),
      buttonText: 'Next',
      clearErrors: clearErrors
    },
    {
      message: 'Fill the code you received from email',
      errors: otpError,
      submitOption: onOtpSubmit,
      buttonText: 'Next',
      clearErrors: () => setOtpError({})
    },
    {
      message: 'Set your new password',
      errors: l_errors,
      submitOption: l_handleSubmit(onSetNewPasswordSubmit),
      buttonText: 'Finish',
      clearErrors: l_clearErrors
    }
  ]

  return (
    <div className='flex items-center justify-center bg-mainBackground overflow-auto h-screen min-h-[732px] px-4'>
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
              <h2 className='text-primary font-bold text-[#2F3367]'>
                Recover Password
              </h2>
              <p className='text-[#303468] mt-3 font-medium text-base'>
                {steps[currentStep].message}
              </p>
            </header>

            {/* Error messages */}
            {Object.keys(steps[currentStep].errors).length > 0 && (
              <ErrorMessage
                errors={steps[currentStep].errors}
                clearErrors={steps[currentStep].clearErrors}
              />
            )}

            {/* Form wrapper */}
            <form
              className='mt-8 font-medium'
              onSubmit={steps[currentStep].submitOption}
            >
              {/* Step 1 */}
              {currentStep === 0 && (
                <TextField
                  placeholderText='Email'
                  type='text'
                  icon={require('../img/icon/profile.png')}
                  name='email'
                  register={register('email')}
                />
              )}

              {/* Step 2: OTP input */}
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

              {/* Step 3 */}
              {currentStep === 2 && (
                <React.Fragment>
                  <TextField
                    placeholderText='New password'
                    type='password'
                    icon={require('../img/icon/password.png')}
                    name='newPassword'
                    marginTop='20px'
                    register={l_register('newPassword')}
                  />
                  <TextField
                    placeholderText='Confirm new password'
                    type='password'
                    icon={require('../img/icon/password.png')}
                    name='confirmNewPassword'
                    marginTop='20px'
                    register={l_register('confirmNewPassword')}
                  />
                </React.Fragment>
              )}

              {/* Button */}
              <div className='mt-7 space-y-4 flex justify-end'>
                <Button
                  width='130px'
                  height='50px'
                  text={
                    <div className='flex justify-between items-center'>
                      <span>{steps[currentStep].buttonText}</span>
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

import React from "react"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button, ErrorMessage, Loader } from "../components/index"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { clearError, logInAction } from "../actions/index"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  rememberMe: yup.boolean(),
})

const Login = () => {
  const dispatch = useDispatch()
  const { loading: authLoading, error } = useSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  // Handle submit form
  const onSubmit = async (data) => {
    const { email, password } = data
    dispatch(logInAction(email, password))
  }

  return (
    <div className='flex items-center justify-center bg-mainBackground overflow-auto h-screen min-h-[732px] px-4'>
      {authLoading && <Loader />}

      {/* Wrapper */}
      <div className='flex items-center justify-center h-[90%] min-h-[700px] max-w-full aspect-[8/5] bg-[white]'>
        {/* Left */}
        <div className='h-full authRes:block hidden w-full'>
          <LazyLoadImage
            src={require("../img/login_bg.png")}
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
                Login to your account
              </h2>
              <p className='text-[#303468] mt-3 font-medium text-base'>
                Welcome back to Sociout
              </p>
            </header>

            {/* Error messages */}
            {Object.keys(errors).length > 0 && (
              <ErrorMessage errors={errors} clearErrors={clearErrors} />
            )}

            {error && (
              <ErrorMessage
                errors={error}
                clearErrors={() => dispatch(clearError())}
              />
            )}

            {/* Form wrapper */}
            <form
              className='mt-8 font-medium'
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                placeholderText='Email'
                type='text'
                icon={require("../img/icon/profile.png")}
                name='email'
                register={register("email")}
              />
              <TextField
                placeholderText='Password'
                type='password'
                icon={require("../img/icon/password.png")}
                name='password'
                marginTop='20px'
                register={register("password")}
              />

              {/* Buttons */}
              <div className='mt-7 flex justify-between items-center'>
                <Link
                  to='/recover-password'
                  className='text-textBlue font-semibold'
                >
                  Forgot password?
                </Link>

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
                <Link to='/sign-up' className='font-semibold text-textBlue'>
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

import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ThemeWrapper from '../../utils/ThemeWrapper'

function Reset_Password({darkMode}) {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
    // console.log(data);
    navigate("/login")
    
  };
  return (
    <div className={`h-screen flex  w-screen`} >
      <div className={`bg-[url('/login-bg.jpg')] bg-cover w-2/3 h-screen`}>
      </div>
      <div className={`${darkMode?"from-customDark2 via-customDark to-customBlack text-customWhite":'bg-customLight text-customBlack'} shadow-md h-full p-8 w-full max-w-lg bg-gradient-to-br flex min-w-80 text-center flex-col justify-center`}>
        <h2 className="text-4xl font-semibold text-center mb-10">RESET PASSWORD</h2>
        <div className="mb-6 text-center">Enter your login email and we’ll send you a link to reset your password.
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className=' text-center content-center'>
          <div className="mb-4 text-center">
            <input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Enter a valid email',
                },
              })}
              className={`w-full px-4 py-2 bg-transparent border-b max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]  ${
                errors.email ? 'border-b-red-500' : 'border-b-gray-300'
              }`}
            /><br></br>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
              
          <button
            type="submit"
            className="w-full bg-gradient-to-br font-semibold text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp  transition duration-300 mt-4 max-w-xs">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ThemeWrapper(Reset_Password)

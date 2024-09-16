import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import ThemeWrapper from '../../utils/ThemeWrapper';

function Signup({darkMode}) {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // console.log(data);
    navigate("/login")
    
  };

  const handleRecaptcha = (value) => {
    // console.log('Captcha value:', value);
  };

  return (
    <div className={`h-screen flex  w-screen`} >
      <div className={`bg-[url('/login-bg.jpg')] bg-cover w-2/3 h-screen`}>
      </div>
      <div className={`${darkMode?"from-customDark2 via-customDark to-customBlack text-customWhite":"from-customLight2 text-customBlack to-customLight3 "} shadow-md h-full min-w-80 p-8 w-full max-w-lg bg-gradient-to-br flex  flex-col justify-center`}>
        <h2 className="text-4xl font-semibold text-center mb-10">SIGNUP</h2>
        <div className="flex mb-6 justify-center">Already a member? &nbsp;
          <span onClick={()=>navigate("/login")} className='text-customLightBlue font-semibold cursor-pointer'>
            Login
          </span>
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
              className={`w-full px-4 py-2 bg-transparent placeholder:text-gray-500  border-b max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]  ${
                errors.email ? 'border-b-red-500' : 'border-b-gray-300'
              }`}
            /><br></br>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="mb-6 text-center">
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
              className={`w-full px-4 py-2 bg-transparent placeholder:text-gray-500   border-b max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]  ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            /><br></br>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>

          <div className="flex justify-center mb-6 ">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_SITE_KEY} 
              onChange={handleRecaptcha}
            />
          </div>
              
          <button
            type="submit"
            className="w-full bg-gradient-to-br font-semibold text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp  transition duration-300 mt-4 max-w-xs">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default ThemeWrapper(Signup);

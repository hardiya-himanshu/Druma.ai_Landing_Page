import React from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'
import { useForm } from 'react-hook-form';

function ContactUs({darkMode}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className={` bg-gradient-to-br ${darkMode?"from-blue-900 via-blue-700 to-cyan-500  text-customWhite":'from-white to-gray-600 via-gray-400'} bg-[length:200%_200%] animate-gradientMove h-fit relative flex flex-col gap-20 items-center py-32`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${darkMode?"from-black/10 via-black/60 to-customDark4/100":" from-black/0 to-black/80"}`}></div>

        <div className="relative z-10 flex justify-center items-center  h-full text-center text-white max-w-5xl">
          <div className='text-center'>
            <h1 className="text-6xl font-bold mb-8 animate-fadeInDown">
            Contact</h1>
            <p className="text-xl mt-16 mb-4 animate-fadeInUp">
            Email Us : <span><a href="emailto:sales@druma.in" className={`${darkMode?"hover:text-customBlue":"hover:text-customBlue2"}`}>sales@druma.in</a></span>
            </p>
            <p className="text-4xl mb-4 animate-fadeInUp">
              OR
            </p>
            <p className="text-lg animate-fadeInUp">
            Fill in the details below and <br />we will get back to you in 24 hours
            </p>
          </div>
         
        </div>
      <div className={`w-fit  mx-auto p-6 bg-transparent rounded-md z-40 ${darkMode?"from-customDark2 to-customDark3 text-customWhite":'from-customLight2 text-customBlack to-gray-500'} shadow-lg bg-gradient-to-br flex  flex-col justify-center`}>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Select Service */}
        <div className='flex gap-10 '>

          <div >
            <div className="mb-4 w-60">

            <select 
              {...register('service', { required: true })} 
              className="w-full placeholder:text-gray-500 py-2  bg-transparent border-b-2  max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]">
              <option value="">-- Select a Service --</option>
              <option value="remoteAI">Remote AI</option>
              <option value="dataLabeling">Data Labeling</option>
              <option value="both">Both</option>
            </select>
            {errors.service && <p className="text-red-600 text-sm mt-1  ">Service is required.</p>}
          </div>

          {/* Name */}
          <div className="mb-4 w-60">
            <input
              {...register('name', { required: true })}
              type="text"
              className="w-full placeholder:text-gray-500 py-2  bg-transparent border-b-2  max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]"
              placeholder="Name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">Name is required.</p>}
          </div>

          {/* Subject */}
          <div className="mb-4 w-60">
            <input
              {...register('subject', { required: true })}
              type="text"
              className="w-full placeholder:text-gray-500 py-2  bg-transparent border-b-2  max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]"
              placeholder="Subject"
            />
            {errors.subject && <p className="text-red-600 text-sm mt-1">Subject is required.</p>}
          </div>
          </div>

          <div>


          {/* Company Name */}
          <div className="mb-4 w-60">
            <input
              {...register('companyName')}
              type="text"
              className="w-full placeholder:text-gray-500 py-2  bg-transparent border-b-2  max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]"
              placeholder="Company Name"
            />
          </div>

          {/* Email */}
          <div className="mb-4 w-60">
            <input
              {...register('email', { 
                required: "Email is required", 
                pattern: { 
                  value: /^\S+@\S+$/i, 
                  message: "Invalid email address" 
                }
              })}
              type="email"
              className="w-full placeholder:text-gray-500 py-2  bg-transparent border-b-2  max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div className="mb-4 w-60">
            <input
              {...register('phone', {
                required: "Phone number is required", 
                pattern: {
                  value: /^[0-9\b]+$/,
                  message: "Invalid phone number"
                }
              })}
              type="text"
              className="w-full placeholder:text-gray-500 py-2  bg-transparent border-b-2  max-w-xs focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]"
              placeholder="Phone Number"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Additional Details */}
          
          </div>
        </div>
        <div className="mb-4 ">
            <textarea
              {...register('additionalDetails')}
              className="w-full placeholder:text-gray-500 py-2  bg-transparent border-b-2  focus:outline-none focus:border-b-2 focus:border-b-customBlue focus:shadow-blue-700 focus:shadow-[0_10px_7px_-5px_rgba(0,0,0,0.3)]"
              rows="4"
              placeholder="Any additional details"
              />
          </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-br font-semibold text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp  transition duration-300 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
      </section>
  )
}

export default ThemeWrapper(ContactUs)

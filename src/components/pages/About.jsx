import React from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'

function About({darkMode}) {
  return (
    <section className={`p-4 bg-gradient-to-br ${darkMode?"from-blue-900 via-blue-700 to-cyan-500  text-customWhite":'from-white to-gray-600 via-gray-400'} bg-[length:200%_200%] animate-gradientMove h-fit relative flex flex-col gap-20 items-center py-32`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${darkMode?"from-black/10 via-black/60 to-customDark4/100":" from-black/0 to-black/80"}`}></div>

        <div className="relative z-10 flex justify-center items-center  h-full text-center text-white max-w-5xl flex-wrap">
          <div className='text-left max-w-xl'>
            <h1 className="text-6xl font-bold mb-4 animate-fadeInDown">
            Our Story</h1>
            <p className="text-lg mt-8 mb-4 animate-fadeInUp">
            We are a team of technologists who are passionate about AI and its immense potential.
            </p>
            <p className="text-lg mb-4 animate-fadeInUp">
            We believe that the power of AI should be accessible to everyone. Therefore, we came up with Druma to work with different companies and be their AI departments.
            </p>
            <p className="text-lg mb-4 animate-fadeInUp">
            We have expertise in the fields of AI, automation, cloud technology and mobile development.
            </p>
          </div>
          <div>
            <img src="/story.png" width="400px" alt="" />
          </div>
        </div>

        <div className="relative z-10 flex justify-center items-center gap-10 h-full text-center text-white max-w-5xl flex-wrap">
          <div>
            <img src="/tech.png" width="400px" alt="" />
          </div>
          <div className='p-2 text-left max-w-xl'>
            <h1 className="text-6xl font-bold mb-4 animate-fadeInDown">
            Use of Technology</h1>
            <p className="text-lg mt-8 mb-4 animate-fadeInUp">
            We use multiple technologies and frameworks for developing AI services - TensorFlow, Keras, PyTorch, OpenCV being some of them.
            </p>
            <p className="text-lg mb-4 animate-fadeInUp">
            For our data labeling services, we have developed our own platform which is accessible on PC and phones to our data labeling professionals.
            </p>
            <p className="text-lg mb-4 animate-fadeInUp">
            Since our whole set of tools is also available on phone, we can leverage power of volunteers and easily scale our labeling capabilities depending on the project size.
            </p>
          </div>
         
        </div>
      </section>
  )
}

export default ThemeWrapper(About)

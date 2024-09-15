import React from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'
import { Link as ScrollLink} from 'react-scroll'


function Home({darkMode}) {
  return (
    <div className={`w-full`} >
      
      <section id='section1' className={`parallax bg-gradient-to-br ${darkMode?"from-blue-900 via-blue-700 to-cyan-500  text-customWhite":'from-white to-gray-600 via-gray-400'} bg-[length:200%_200%] animate-gradientMove  h-screen relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-6xl font-bold mb-4 animate-fadeInDown">
          Leverage the Power of AI</h1>
          <p className="text-xl mt-8 animate-fadeInUp">
          Artificial Intelligence is powering majority of businesses leading to improved productivity, more sales and overall growth of these companies

          </p>
          <p className="text-xl mb-8 animate-fadeInUp">
          Druma can make your business AI ready so you can be ahead of your competition
          </p>
          <ScrollLink to="section2" >
            <button className="bg-gradient-to-br font-semibold text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp transition duration-300">
            Learn More
            </button>
          </ScrollLink>
        </div>
      </section>

      <section id='section2' className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Our Services</h2>
        {/* AI */}
        <div className='flex justify-center items-center gap-10 mt-16'>
          <div className='max-w-2xl text-left'>
            <p className=" mx-auto text-lg font-semibold mb-10 animate-fadeInUp">
            &#8226; Hire a remote AI department
            </p>
            <p className="font-semibold mx-auto text-lg mb-2 animate-fadeInUp">
            We work with you to develop AI solutions tailored to your needs
            </p>
            
            <p className=" mx-auto text-md mb-10 animate-fadeInUp">
            We function as your AI department and therefore, it's our job to implement AI solutions which will help improve your business or automate your processes thus saving you time to focus on the more important things.
            </p>
          </div>
          <div>
            <img src="/world-map.png" width="400px" alt="" />
          </div>
        </div>
        {/* Data labeling */}
        <div className='flex justify-center items-center gap-10 mt-16'>
          <div className='max-w-2xl text-left'>
            <p className="font-semibold mx-auto text-lg mb-10 animate-fadeInUp">
            We work with you to develop AI solutions tailored to your needs
            </p>
            <p className=" mx-auto text-md mb-10 animate-fadeInUp">
            We function as your AI department and therefore, it's our job to implement AI solutions which will help improve your business or automate your processes thus saving you time to focus on the more important things.
            </p>
            <p className="mx-auto text-md mb-10 animate-fadeInUp">
            If you are a enterprise who is in the initial stages of AI implementation, or an enterprise who wants to improve AI, we can help you.
            </p>
            <p className=" mx-auto text-md mb-10 animate-fadeInUp">
            We function as your AI department and therefore, it's our job to implement AI solutions which will help improve your business or automate your processes thus saving you time to focus on the more important things.
            </p>
          </div>
          <div>
            <img src="/world-map.png" width="400px" alt="" />
          </div>
        </div>
        
        <button className="bg-gradient-to-br font-semibold text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp  transition duration-300">
          Get Started
        </button>
      </section>

      <section id='section3' className="parallax bg-[url('/blue-grad.jpg')] bg-cover bg-center h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-6xl font-bold mb-4 animate-fadeInDown">Transform Your Business with AI</h1>
          <p className="text-2xl mb-8 animate-fadeInUp">
            Unlock the full potential of your business using intelligent automation and data-driven insights.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg animate-fadeInUp transition duration-300">
            Contact Us
          </button>
        </div>
      </section>

      <section id='section4' className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Contact Us</h2>
        <p className="max-w-3xl mx-auto text-lg mb-10 animate-fadeInUp">
          Reach out to learn more about how our AI SaaS platform can help your business grow.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Get In Touch
        </button>
      </section>
    </div>
  )
}

export default ThemeWrapper(Home)

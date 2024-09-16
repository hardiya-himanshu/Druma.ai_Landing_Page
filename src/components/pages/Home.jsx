import React from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'
import { useNavigate } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
import { Navigate } from 'react-router-dom'


function Home({darkMode}) {
  const navigate = useNavigate()

  return (
    <div className={`w-full`} >
      
      <section id='section1' className={`p-4 bg-gradient-to-br ${darkMode?"from-blue-900 via-blue-700 to-cyan-500  text-customWhite":'from-white to-gray-600 via-gray-400'} bg-[length:200%_200%] animate-gradientMove  h-screen relative`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${darkMode?"from-black/10 via-black/60 to-customDark4/100":" from-black/0 to-black/80"}`}></div>
        
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

      <section id='section2' className={`p-4 ${darkMode?"bg-customDark4  text-customWhite":'bg-white text-customBlack'} h-fit  py-20 text-center`}>
        <h2 className="text-5xl font-bold mb-6 animate-fadeInUp">Our Services</h2>
        
        {/* AI */}
        <div className='flex justify-center items-center gap-10 mt-16 flex-wrap'>
          <div className='max-w-2xl text-left'>
            <p className=" mx-auto text-xl font-semibold mb-10 animate-fadeInUp">
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
        <div className='flex justify-center items-center gap-10 mt-16 flex-wrap'>
          <div className='flex flex-col  items-center'>
            <div className='flex gap-32 '>
            </div>
            <div className='flex gap-5 flex-wrap'>
              <div>
                <span>With Druma</span>
                <img src="/data-label1.png" width="200px" alt="" />
              </div>
              <div>
                <span>Without Druma</span>
                <img src="/data-label2.png" width="200px" alt="" />
              </div>
            </div>
          </div>
          <div className='max-w-2xl  text-left'>
            <p className=" mx-auto text-xl font-semibold mb-10 animate-fadeInUp">
            &#8226; Data Labeling
            </p>
            <p className="font-semibold mx-auto text-lg mb-2 animate-fadeInUp">
            Whether it is text or images
            </p>
            
            <p className=" mx-auto text-md mb-10 animate-fadeInUp">
            At Druma Labeling, we leverage our team of professionals to correctly label all your data as per your requirements.
            </p>
          </div>
         
        </div>
        
        <button onClick={()=>navigate("/services")} className="bg-gradient-to-br font-semibold text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp  transition duration-300 mt-16">
          Access Now
        </button>
      </section>

      <section id='section3' className="p-4 h-96 parallax bg-[url('/blue-grad.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate-fadeInDown">About Us</h1>
          <p className="text-2xl mb-8 animate-fadeInUp">
            Want to know about our story or technology we work in ?
          </p>
          <button onClick={()=>navigate("/about")} className="bg-gradient-to-br font-semibold text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp  transition duration-300 mt-4">
            Know More
          </button>
        </div>
      </section>

      <section id='section4' className={`p-4 ${darkMode?"bg-customDark4 text-customWhite":'text-customBlack bg-customLight'} py-20 text-center`}>
        <h2 className="text-5xl font-bold mb-4 animate-fadeInUp">Contact</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8 animate-fadeInUp">
          Reach out to learn more about how our services can help your business grow.
        </p>
        <button onClick={()=>navigate("/contact")}  className="bg-gradient-to-br font-semibold text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp  transition duration-300 mt-4">
          Get In Touch
        </button>
      </section>
    </div>
  )
}

export default ThemeWrapper(Home)

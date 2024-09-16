import React, {useState} from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'
import ImageCarousel from '../../utils/ImageCarousel'
import DivCarousel from '../../utils/DivCarousel';

const images = [
  '/sample-img1.png',
  '/sample-img2.png',
  '/sample-img3.png',
  '/sample-img4.png',
];

const imgOfData =[
  '/data-img1.png',
  '/data-img2.png'
]

function Services({darkMode}) {
  const [activeDiv, setActiveDiv] = useState(1)
  return (
    <section className={` bg-gradient-to-br ${darkMode?"from-blue-900 via-blue-700 to-cyan-500  text-customWhite":'from-white to-gray-600 via-gray-400'} bg-[length:200%_200%] animate-gradientMove h-fit relative flex flex-col gap-20 items-center py-28`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${darkMode?"from-black/10 via-black/60 to-customDark4/100":" from-black/0 to-black/80"}`}></div>
        <h1 className="text-6xl font-bold mb-4 text-white animate-fadeInDown z-10">
        Our Services</h1>
        <div className="relative z-10 flex justify-center items-center  h-full text-center text-white max-w-5xl">
          <div className='text-left'>
            <h1 className="text-5xl font-bold mb-4 animate-fadeInDown">
            AI Services</h1>
            <p className="text-lg mt-8 mb-4 animate-fadeInUp">
            If you are a enterprise who is in the initial stages of AI implementation, or an enterprise who wants to improve AI, we can help you.
            </p>
            <p className="text-lg mb-4 animate-fadeInUp">
            From model development to optimization for best results, we do it all.
            </p>
          </div>
          <div>
            <img src="/ai-service.png" width="600px" alt="" />
          </div>
        </div>

        <div className="w-full relative px-6 flex flex-col items-center justify-center ">
          {/* Button to show different sections */}
          <div className="flex gap-4">
            <button 
              className={`bg-gradient-to-br font-semibold  py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp duration-100 transition ${
                activeDiv === 1 ? 'text-customWhite from-customBlue  to-customBlue2' : 'from-gray-200 to-gray-400 text-customBlack'
              }`} 
              onClick={() => setActiveDiv(1)}
            >
              Automation
            </button>
            <button 
              className={`bg-gradient-to-br font-semibold  py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp duration-100 transition ${
                activeDiv === 2 ? 'text-customWhite from-customBlue  to-customBlue2' : 'from-gray-200 to-gray-400 text-customBlack'
              }`} 
              onClick={() => setActiveDiv(2)}
            >
              Cognitive Insights
            </button>
            <button 
              className={`bg-gradient-to-br font-semibold  py-2 px-3 rounded-lg cursor-pointer animate-fadeInUp duration-100 transition ${
                activeDiv === 3 ? 'text-customWhite from-customBlue  to-customBlue2' : 'from-gray-200 to-gray-400 text-customBlack'
              }`}  
              onClick={() => setActiveDiv(3)}
            >
              Customer Engagement
            </button>
          </div>

          {/* Show Div Content based on button click */}
          <div className={`text-customWhite bg-transparent w-full max-w-5xl h-fit p-4 rounded-lg flex items-center justify-center`}>
            {activeDiv === 1 && (
              <div className=" flex gap-10 justify-center items-center">
                <div className='mt-10'>
                <h2 className="text-4xl mb-5 font-bold">Automation</h2>
                <p className='mb-2 text-lg'>Have a task which takes up your time? Automate it!</p>
                <p className='mb-2 text-lg'>Many companies have started using robotic process automation (RPA) for performing tasks  like document scanning, filling in forms, moving data, opening documents and extracting data.</p>
                <p className='mb-2 text-lg'>Robots (or bots) work across interfaces and mimic what a human would do - 24x7, 365 days.</p>
                <p className='mb-2 text-lg'>Discuss with us on how you can improve your productivity exponentially  (and save cost at the same time) by using RPA.</p>
                </div>
                <div>
                <img src="/ai1.webp" alt="" />
                </div>         
              </div>
            )}
            {activeDiv === 2 && (
              <div className=" flex gap-10 justify-center items-center">
              <div className='mt-10'>
              <h2 className="text-4xl mb-5 font-bold">Cognitive Insights</h2>
              <p className='mb-2 text-lg'>With the amount of data that is generated, it is not possible for a human to analyze everything and make decisions based on it.</p>
              <p className='mb-2 text-lg'>Artificial Intelligence is exceptionally good at finding patterns in large volumes of data and making predictions based on it in real-time.</p>
              <p className='mb-2 text-lg'>Utilize the power of AI to:
                <ul>
                  
                &#8226; Predict customer buying behviour <br />
                &#8226; Real time fraud detection<br />
                &#8226; Marketing personalization<br />
                &#8226; Demand forecasting<br />
                &#8226; And many more data intensive tasks<br />
                </ul>
              </p>
              <p className='mb-2 text-lg'>Get in touch to leverage the power of data for advanced analytics..</p>
              </div>
              <div>
              <img src="/ai2.webp" alt="" />
              </div>         
            </div>
            )}
            {activeDiv === 3 && (
              <div className=" flex gap-10 justify-center items-center">
              <div className='mt-10'>
              <h2 className="text-4xl mb-5 font-bold">Customer Engagement</h2>
              <p className='mb-2 text-lg'>A happy customer is a returning customer.</p>
              <p className='mb-2 text-lg'>Customer engagement has become the top most priority for many organizations.</p>
              <p className='mb-2 text-lg'>And a great way to provide top-notch, smooth and fast experience is by using AI.
                <ul>        
                &#8226; Chatbots <br />
                &#8226; Intent prediction<br />
                &#8226; Emotion analytics<br />
                </ul>
              </p>
              <p className='mb-2 text-lg'>are few of the many applications which have helped organizations in improving customer experience.</p>
              <p className='mb-2 text-lg'>Discuss how you can give your customers a superior customer experience.</p>
              </div>
              <div>
              <img src="/ai3.webp" alt="" />
              </div>         
            </div>
            )}
          </div>
        </div>

        <div className="relative z-10 flex justify-center items-center gap-20 h-full text-center text-white max-w-5xl">
          
          <div className='text-left max-w-3xl'>
            <h1 className="text-5xl font-bold mb-4 animate-fadeInDown">
            Data Labeling Services</h1>
            <p className="text-lg mt-8 mb-4 animate-fadeInUp">
              Spent days on figuring out why your model is not performing well only to find problems with the data?
            </p>
            <p className="text-lg mb-4 animate-fadeInUp">
            AI/ML applications require vast amounts of data. Often, the data contains errors or irrelevant data which adversely affects your model performance.
            </p>
            <p className="text-lg  animate-fadeInUp">
            Druma provides you with high quality data labeling solution so you will never have to worry about data errors. If you have used our service, be assured that you are getting quality, error free, and clean data for training.
            </p>
          </div>
          <div className='w-full'>
            <img src="/data-service.png" width="800px" alt="" />
          </div>
         
        </div>

        <div className='flex gap-10 justify-center items-center'>
        <div className='relative'>
            <h1 className='text-3xl font-bold mb-4 text-white text-center animate-fadeInDown'>Be it Images</h1>
            <div className="bg-transparent h-96 text-center w-96 flex items-center justify-center">
              <ImageCarousel images={images} />
            </div>
        </div>
        <div className=' relative text-3xl font-bold text-white'>OR</div>
        <div className='relative'>
            <h1 className='text-3xl font-bold mb-4 text-white text-center animate-fadeInDown'>Text Data</h1>
            <div className="bg-transparent h-96 text-center w-full flex items-center justify-center">
              <ImageCarousel images={imgOfData} />
            </div>
        </div>
        </div>

      </section>
  )
}

export default ThemeWrapper(Services)

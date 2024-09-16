import React from 'react'
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
  return (
    <section className={` bg-gradient-to-br ${darkMode?"from-blue-900 via-blue-700 to-cyan-500  text-customWhite":'from-white to-gray-600 via-gray-400'} bg-[length:200%_200%] animate-gradientMove h-fit relative flex flex-col gap-20 items-center py-32`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${darkMode?"from-black/10 via-black/60 to-customDark4/100":" from-black/0 to-black/80"}`}></div>
        <h1 className="text-6xl font-bold mb-4 text-white animate-fadeInDown z-10">
        Our Services</h1>
        <div className="relative z-10 flex justify-center items-center  h-full text-center text-white max-w-5xl">
          <div className='text-left'>
            <h1 className="text-4xl font-bold mb-4 animate-fadeInDown">
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



        <div className="relative z-10 flex justify-center items-center gap-20 h-full text-center text-white max-w-5xl">
          
          <div className='text-left max-w-3xl'>
            <h1 className="text-4xl font-bold mb-4 animate-fadeInDown">
            Data Labeling</h1>
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
            <div className="bg-transparent h-96 text-center w-96 flex items-center justify-center">
              <ImageCarousel images={imgOfData} />
            </div>
        </div>
        </div>

      </section>
  )
}

export default ThemeWrapper(Services)

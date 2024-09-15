import React from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'

function Home({darkMode}) {
  return (
    <div className={`w-full h-screen bg-gradient-to-br ${darkMode?"from-blue-900 via-blue-700 to-cyan-500  text-customWhite":'from-white to-gray-600 via-gray-400'} bg-[length:200%_200%] animate-gradientMove flex justify-center items-center`}>
      <div className=''>
        <div>

          <h1 className='text-5xl'>Leverage the Power of AI</h1>
          <p className='text-xl'>
            Artificial Intelligence is powering majority of businesses leading to improved productivity, more sales and overall growth of these companies.
          </p>
          <p className='text-xl'>
            Druma can make your business AI ready so you can be ahead of your competition.
            </p>
        </div>
        <div>
          <img src="" alt="" />

        </div>
      </div>
    </div>
  )
}

export default ThemeWrapper(Home)

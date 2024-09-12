import React from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'
import { useNavigate } from 'react-router-dom'


function Header({darkMode}) {
  const navigate = useNavigate()
  const navItems = [
    {
      name:"Home",
      slug:"/"
    },
    {
      name:"Services",
      slug:"/services"
    },
    {
      name:"About",
      slug:"/about"
    },
    {
      name:"Contact",
      slug:"/contact"
    }
  ]


  return (
    <header className={`${darkMode?"bg-customDark text-customWhite":'bg-customLight text-customBlack'}  flex items-center justify-between p-2 sticky z-50 shadow-2xl top-0`}>
      <div  className="flex gap-3 items-center">
        <img src="/logo.png" width="40px" alt="" />
        <div className="font-bold text-2xl">Druma</div>
      </div>
      <div className="flex gap-3 items-center">
        <ul className="mx-auto w-fit p-2 flex gap-5">
          {
            navItems.map((item, index)=>(
               <li key={index} onClick={() => navigate(item.slug)} className='cursor-pointer p-2 hover:rounded-xl '>{item.name}</li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default ThemeWrapper(Header)

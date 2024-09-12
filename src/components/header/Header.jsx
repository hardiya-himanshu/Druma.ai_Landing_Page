import React from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { toggleTheme } from '../../store/themeSlice'

function Header() {
  const darkMode = useSelector((state)=>state.theme.darkMode)
        const dispatch = useDispatch()

  const handleTheme = ()=>{
      dispatch(toggleTheme())
  }

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
    <header className={`${darkMode?"bg-customDark text-customWhite":'bg-customLight text-customBlack'}  flex items-center justify-between sticky z-50 px-3 shadow-2xl top-0`}>
      <div  className="flex gap-3 items-center cursor-pointer" onClick={()=>navigate("/")}>
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
      <div className="flex gap-3 items-center ">
        <div className={`flex gap-2 justify-center items-center ${darkMode?"bg-customBlue":"bg-customLightBlue"}  py-1 px-3 rounded-lg`}>
          <span>Login</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

        </div>
      {darkMode?
        <svg onClick={handleTheme} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
        :
        <svg onClick={handleTheme} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
        }

      </div>
    </header>
  )
}

export default (Header)

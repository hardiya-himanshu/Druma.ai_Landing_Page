import React, {useState, useEffect} from 'react'
import ThemeWrapper from '../../utils/ThemeWrapper'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { toggleTheme } from '../../store/themeSlice'

function Header() {
  
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

  const [isScrolled, setIsScrolled] = useState(false);
  const[menu_opt, show_menu_opt] = useState(false)
  const navigate = useNavigate()
  const darkMode = useSelector((state)=>state.theme.darkMode)
  const dispatch = useDispatch()

  const handleTheme = ()=>{
      dispatch(toggleTheme())
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

      window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <header className={` ${darkMode?" text-customWhite ":' text-customBlack'} bg-gradient-to-br flex items-center justify-between fixed z-50 px-3 right-0 left-0 top-0 transition-all duration-500 ${isScrolled ? `${darkMode?" text-customWhite bg-customDark2 ":'bg-customLight text-customBlack'}` : 'bg-transparent'} p-2`}>
      <div  className="flex gap-3 items-center cursor-pointer" onClick={()=>navigate("/")}>
        <img src="/logo.webp" width="40px" alt="" />
        <div className="font-bold text-2xl ">Druma</div>
      </div>
      <div className="flex gap-3 items-center mx-auto w-fit">
        <ul className="flex gap-5 ">
        
          {
            navItems.map((item, index)=>(
               <li key={index} onClick={() => navigate(item.slug)} className={`cursor-pointer p-2 hover:rounded-xl font-semibold hover:text-customBlue duration-200 navItems`}>{item.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="flex gap-3 items-center ">
        <div className={`flex gap-2 justify-center items-center bg-gradient-to-br text-customWhite from-customBlue  to-customBlue2 py-2 px-3 rounded-lg cursor-pointer  `}>
          <span className='font-semibold' onClick={()=>navigate("/login")}>Get Started</span>
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
         <div >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden menuShow " onClick={()=>{show_menu_opt(!menu_opt)}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                {menu_opt?
                  <div className={`flex flex-col  items-center `}>
                  <ul className={`fixed left-2  right-2 mx-auto w-full  p-2 border justify-between top-16 flex flex-col gap-5 ${darkMode?"bg-customDark overflow-hidden text-customWhite":'bg-white text-customBlack'} rounded-lg `}>
                    {
                      navItems.map((item, index)=>(
                        <li key={index} onClick={() => navigate(item.slug)} className={` text-lg cursor-pointer p-2 hover:rounded-xl font-semibold hover:text-customBlue duration-200`}>{item.name}</li>
                      ))
                    }
                  </ul>
                  </div>             
                    :
                  null
                }
            </div>

      </div>
    </header>
  )
}

export default (Header)

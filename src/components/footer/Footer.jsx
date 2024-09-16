import React from 'react'
import { Link } from 'react-router-dom'
import ThemeWrapper from '../../utils/ThemeWrapper'

function Footer({darkMode}) {
  return (
    <div className={`${darkMode?"from-customDark3 to-customBlack text-customWhite":'from-customLight to-customLight3 text-customBlack'} bg-gradient-to-br z-10 overflow-hidden py-5  bottom-0 right-0 left-0 `}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 flex-col justify-center items-center">
        <div className="m-2 flex  justify-between  flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-md font-bold text-customBlue uppercase">
                        Links
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium  hover:text-customBlue"
                                to="/services"
                            >
                                Services
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium  hover:text-customBlue"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium  hover:text-customBlue"
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-md font-bold uppercase text-customBlue">
                        About
                    </h3>
                    <ul>
                        <li className="mb-4">
                        <a className='hover:text-customBlue' href="mailto:sales@druma.ai">sales@druma.ai</a>
                        </li>
                        <li className="mb-4">
                        <a className='hover:text-customBlue' href="mailto:support@druma.ai">support@druma.ai</a>
                        </li>
                        <Link className="mb-4 mt-4 hover:text-customBlue" to="https://www.google.com/maps?ll=19.19009,72.978795&z=16&t=m&hl=en&gl=IN&mapclient=embed&q=Ravi+Uday+Co-operative+Society+Juhu+Chandan+Society,+Jambli+Naka,+Thane+West+Thane,+Maharashtra+400601" target='_blank'>
                            <li >
                            Ravi Uday Co-operative Society, Juhu Chandan Society, Jambli Naka, Thane West, Thane, Maharashtra 400601
                            </li>
                        </Link>
                        
                        
                    </ul>
                </div>
            </div>
            
        
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-md font-bold uppercase text-customBlue">
                        Legals
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium  hover:text-customBlue"
                                to="/terms-of-use"
                            >
                                Terms of Use
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium  hover:text-customBlue"
                                to="/privacy-policy"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium  hover:text-customBlue"
                                to="/cancellations"
                            >
                                Cancellations
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-md font-bold uppercase text-customBlue">
                        Social
                    </h3>
                    <div className='flex gap-2'>
                        
                        <div>
                            <Link
                                
                                to="https://www.linkedin.com/company/drumatech/" target='_blank'
                            >
                                <img src="/linkedin-icon.png" alt="Linkedin_icon" width="30px" />
                            </Link>
                        </div>
                        <div>
                            <Link
                                
                                to="https://www.instagram.com/druma.ai/" target='_blank'
                            >
                                <img src="/instagram-icon.png" alt="Instagram_icon" width="26px"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        <div className="text-center m-auto mt-4 w-full md:w-1/2 lg:w-5/12">
            <div>
                <p className="text-sm text-customBlue font-semibold">
                    &copy; Copyright 2024. All Rights Reserved.
                </p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeWrapper(Footer)
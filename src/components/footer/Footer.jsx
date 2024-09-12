import React from 'react'
import { Link } from 'react-router-dom'
import ThemeWrapper from '../../utils/ThemeWrapper'

function Footer({darkMode}) {
  return (
    <div className=" border-2 border-red-700 z-10 overflow-hidden py-5  bottom-0 right-0 left-0  bg-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 flex-col justify-center items-center">
        <div className="m-6 flex  justify-between flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-sm font-bold uppercase text-blue-900">
                        Company
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Features
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-sm font-bold uppercase text-blue-900">
                        Support
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-sm font-bold uppercase text-blue-900">
                        Legals
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium text-gray-900 hover:text-blue-800"
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="  text-center m-auto w-full md:w-1/2 lg:w-5/12">
            <div>
                <p className="text-sm text-blue-900 font-semibold">
                    &copy; Copyright 2024. All Rights Reserved.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeWrapper(Footer)
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Header: NextPage = () => {
  return (
    <>
     <nav className="bg-white border-b border-gray-200  z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
         <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
               <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                  button
               </button>
               <a href="https://demo.themesberg.com/windster/" className="text-xl font-bold flex items-center lg:ml-2.5">
   y            <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-2" alt="Windster Logo" />
               <span className="self-center whitespace-nowrap">Windster</span>
               </a>
               <form action="#" method="GET" className="hidden lg:block lg:pl-32">
                  <label htmlFor="topbar-search" className="sr-only">Search</label>
                  <div className="mt-1 relative lg:w-64">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      
                     </div>
                     <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                  </div>
               </form>
            </div>
            <div className="flex items-center">
               <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                  <span className="sr-only">Search</span>
                 
               </button>
               <div className="hidden lg:flex items-center">
                  <span className="text-base font-normal text-gray-500 mr-5">Open source ❤️</span>
                  <div className="-mb-1">
                     <a className="github-button" href="https://github.com/themesberg/windster-tailwind-css-dashboard" data-color-scheme="no-preference: dark; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub">Star</a>
                  </div>
               </div>
               <a href="https://demo.themesberg.com/windster/pricing/" className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
               
                  Upgrade to Pro
               </a>
            </div>
         </div>
      </div>
   </nav>
    
    </>
  )
}

export default Header

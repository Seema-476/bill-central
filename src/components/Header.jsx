import React, { useState } from 'react'
import { HEADER_BTNS } from '../utils/Helper';
import CustomButton from '../common/CustomButton';
import headerLogoImg from '../assets/images/png/header-logo.png'

const Header = () => {
  const [isMenuOpen, setOpenNav] = useState(false);
  const toggleMenu = () => {
    setOpenNav(!isMenuOpen)
  }
  return (
    <div className='md:h-20 h-16 flex items-center justify-center'>
      <div className='container'>
        <div className='flex justify-between'>
          <a href="#"><img src={headerLogoImg} alt="logo" className='md:w-[108px] w-[100px]' /></a>
          <div className='flex lg:justify-between justify-end items-center'>
            <div
              onClick={toggleMenu}
              className='menuIcon flex relative max-sm:w-7 max-sm:h-5 max-lg:w-[38px] max-lg:h-5 z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
            >
              {isMenuOpen ? (
                <>
                  <span className="h-[4px] absolute top-3 w-full bg-white transform rotate-45 rounded transition duration-300"></span>
                  <span className="h-[4px] absolute top-3 w-full bg-white transform -rotate-45 rounded transition duration-300"></span>
                </>
              ) : (
                <>
                  <span className="h-[3px] w-full bg-white ml-auto rounded"></span>
                  <span className="h-[3px] w-full bg-white rounded"></span>
                  <span className="h-[3px] w-full bg-white rounded"></span>
                </>
              )}
            </div>
            <div className={`menuList gap-6 ${isMenuOpen ? 'max-lg:right-0' : 'max-lg:right-[-100%]'} z-10 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:flex-col max-lg:gap-7 max-lg:top-0 max-lg:bg-deep-blue max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
              {HEADER_BTNS.map((obj, index) => (
                <ul key={index} className='flex'>
                  <li>
                    <a href="#" className='font-normal whitespace-nowrap text-base leading-[18.4px] text-white opacity-80 hover:opacity-[1] duration-700 relative after:absolute after:contents-[""] after:bg-white after:w-0 after:h-[.80px] after:bottom-0 after:left-0 after:duration-700 hover:after:w-full'>
                      {obj.btn}
                    </a>
                  </li>
                </ul>
              ))}
              <CustomButton text="Get Started" classStyle="bg-white !text-black lg:hidden"></CustomButton>
            </div>
         
          </div>
          <CustomButton text="Get Started" classStyle="bg-white !text-black max-lg:hidden"></CustomButton>
      </div>
      </div>
  </div>
  )
}

export default Header
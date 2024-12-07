import React from 'react'
import Header from './Header'
import CustomButton from '../common/CustomButton'
import heroImg from '../assets/images/png/hero-image.png'
import Description from '../common/Description'
import dotsElipImg from '../assets/images/png/dots-elip.png'

const Hero = () => {
  return (
    <div className='bg-hero-bg bg-cover lg:bg-[length:100%_100%] bg-center bg-no-repeat lg:h-[810px]'>
      <Header />
      <div className='container'>
        <div className='flex max-lg:flex-col xl:pt-[109px] md:pt-12 py-9 max-lg:gap-7 relative'>
          <img src={dotsElipImg} alt="dots" className='absolute w-[200px] -right-16 top-12 xl:block hidden' />
          <div>
              <h1 className="font-normal text-white xl:text-[64px] md:text-5xl md:leading-[56px] text-4xl xl:leading-[70px] max-w-[612px] max-lg:text-center max-lg:mx-auto">
                Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans
              </h1>
              <Description text="Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place."
                classStyle="max-w-[506px] pt-4 md:pb-[42px] pb-8" />
          
            <div className='flex justify-between md:p-[9px_9px_9px_22px] p-[7px_7px_7px_18px] bg-white rounded-tr-[100px] rounded-br-[100px] rounded-bl-[20px] max-w-[476px] w-full max-lg:mx-auto'>
              <input type="text" placeholder='Start typing your address' classStyle='outline-none font-normal md:text-base text-sm md:leading-5 !w-full !placeholder:text-dark-blue !text-dark-blue' />
              <CustomButton text="Compare" classStyle="fill-white" />
            </div>
          </div>
          <div className='flex justify-center relative z-10'>
            <img src={heroImg} alt="hero" className='max-w-[558px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
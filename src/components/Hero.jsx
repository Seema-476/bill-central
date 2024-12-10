import React from 'react'
import Header from './Header'
import CustomButton from '../common/CustomButton'
import Description from '../common/Description'
import CustomInput from '../common/CustomInput'

const Hero = () => {
  return (
    <div className='bg-hero-bg bg-cover lg:bg-[length:100%_100%] bg-center bg-no-repeat lg:h-[810px]'>
      <Header />
      <div className='container'>
        <div className='flex max-lg:flex-col justify-between xl:pt-[109px] md:py-12 py-9 max-lg:gap-9 relative'>
          <img src="/assets/images/webp/dots-elip.webp" alt="dots" className='absolute w-[200px] -right-16 top-12 xl:block hidden' />
          <div className='lg:w-[50%] pr-4'>
            <h1 className="font-normal text-white xl:text-[64px] md:text-5xl md:leading-[56px] text-4xl xl:leading-[70px] max-w-[612px] max-lg:text-center max-lg:mx-auto">
              Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans
            </h1>
            <Description text="Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place."
              classStyle="max-w-[506px] pt-4 lg:pb-[42px] pb-8 !text-white opacity-90 max-lg:text-center max-lg:mx-auto text-start lg:!m-0" />

            <form method="get" id="emailForm" className='flex items-center justify-between md:p-[9px_9px_9px_22px] p-[7px_7px_7px_18px] bg-white rounded-tr-[100px] rounded-br-[100px] rounded-bl-[70px] w-full max-w-[476px] max-lg:mx-auto border border-off-white border-opacity-20'>
              <CustomInput type="text" text="Start typing your address" classStyle='outline-none font-normal md:text-base text-sm md:leading-5 !placeholder:text-dark-blue !text-dark-blue' />
              <CustomButton text="Compare" classStyle="!text-white" imgSrc="/assets/images/svg/arrow-white.svg" />
            </form>
          </div>
          <div className='flex justify-center relative z-10'>
            <img src="/assets/images/webp/hero-image.webp" alt="hero" className='max-w-[558px] w-full pointer-events-none' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
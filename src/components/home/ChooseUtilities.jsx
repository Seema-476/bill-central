import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import { DATA } from '../../utils/Helper'

const ChooseUtilities = () => {
  return (
    <div className='xl:py-20 md:py-10 py-6'>
      <div className='container'>
        <Heading text="Why Choose Us for " textbold="Utilities" />
        <Description text="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!"
          classStyle="max-w-[620px] pt-4 xl:pb-[58px] pb-7" />
        <div className='flex xl:gap-6 gap-4 max-lg:flex-wrap'>
          <div className='lg:max-w-[424px] w-full bg-deep-blue rounded lg:p-10 sm:p-7 p-5 max-lg:flex max-sm:flex-col max-sm:items-center  justify-between !max-md:flex-wrap'>
            <img src="/assets/images/webp/thumb-image.webp" alt="thumb" className='sm:max-w-[232px] max-w-[180px] lg:w-full w-[50%] max-sm:w-full' />
            <div className='lg:w-full w-[50%] max-sm:w-full'>
              <div>
                <p className='font-normal xl:text-2xl text-xl leading-6 xl:leading-custom-6xl max-sm:text-center text-white pt-[30px]'>
                  Tailored Recommendations
                </p>
                <Description
                  text="Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available."
                  classStyle="lg:max-w-[344px] text-white opacity-90 text-start pt-3 pb-[22px] !m-0 max-sm:text-center max-sm:mx-auto" />
                <button className='bg-white md:py-3 md:px-6 py-2 px-4 rounded-[446px] hover:scale-95 duration-700 max-sm:text-center max-sm:mx-auto max-sm:flex'>
                  <img src="/assets/images/svg/utilities-btn-arrow.svg" alt="arrow" />
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col xl:gap-6 gap-4 w-full'>
            <div className='lg:max-w-[692px] w-full flex gap-6 max-sm:flex-wrap'>
              {DATA.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className='lg:max-w-[334px] sm:w-1/2 w-full bg-white border border-silver-gray shadow-custom-xl xl:p-6 p-5 rounded hover:shadow-custom-2xl duration-700'>
                  <img src={item.imgSrc} alt={item.altText} className='lg:w-[60px] lg:h-[60px] w-10 h-10' />
                  <p className='font-normal xl:text-2xl text-xl leading-6 xl:leading-custom-6xl text-z-black lg:pt-[18px] pt-3 pb-3'>
                    {item.title}
                  </p>
                  <Description text={item.description} classStyle="text-start !text-dark-blue" />
                </div>
              ))}
            </div>
            <div className='lg:max-w-[692px] w-full flex xl:gap-6 gap-4 max-sm:flex-wrap'>
              {DATA.slice(2, 4).map((item, index) => (
                <div
                  key={index}
                  className='lg:max-w-[334px] sm:w-1/2 w-full bg-white border border-silver-gray shadow-custom-xl xl:p-6 p-5 rounded hover:shadow-custom-2xl duration-700'
                >
                  <img src={item.imgSrc} alt={item.altText} className='lg:w-[60px] lg:h-[60px] w-10 h-10' />
                  <p className='font-normal xl:text-2xl text-xl leading-6 xl:leading-custom-6xl text-z-black lg:pt-[18px] pt-3 pb-3'>
                    {item.title}
                  </p>
                  <Description text={item.description} classStyle="text-start !text-dark-blue" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUtilities
import React from 'react'
import { LOGO_LIST } from '../../utils/Helper'

const CompaniesLogo = () => {
  return (
    <div className='lg:pb-20 lg:pt-[54px] md:py-14 py-10'>
      <div className='lg:container max-lg:px-4'>
        <div className='max-lg:container'>
          <p className='font-normal md:text-custom-2xl sm:text-3xl text-2xl sm:leading-10 md:leading-custom-8xl text-deep-blue max-w-[548px] relative z-10 max-lg:text-center max-lg:mx-auto'>More Than <span className='font-bold text-sky-blue'>80,000</span>+ Companies Trust Bill Central </p>
       </div>
        <div className='flex lg:gap-[51px] gap-8 items-center w-full lg:pt-16 pt-8 max-w-[1129px] overflow-auto scrollbar-hidden pb-7'>
            {LOGO_LIST.map((obj, index) => (
              <img key={index}
                src={obj.src} alt={obj.alt} className={`w-[126px] pointer-events-none ${index === LOGO_LIST.length - 1 ? 'w-[63px]' : ''}`} />
            ))}
          </div>
      </div>
    </div>
  )
}

export default CompaniesLogo

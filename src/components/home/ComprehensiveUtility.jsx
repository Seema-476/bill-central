import React, { useState } from 'react'
import Heading from '../../common/Heading'
import { COMPREHENSIVE_DETAILS } from '../../utils/Helper';

const ComprehensiveUtility = () => {
  const [accoActive, setAccoActive] = useState(0);

  const toggleAccordion = (index) => {
    setAccoActive(accoActive === index ? accoActive : index);
  };
  return (
    <div className='xl:py-20 md:py-10 py-6'>
      <div className='container xl:pr-0'>
        <div className='flex max-lg:flex-wrap flex-row justify-between'>
          <div className='lg:max-w-[558px] w-full lg:pr-4 xl:pr-0 max-lg:pb-7'>
            <Heading text="Comprehensive Utility " textbold="Comparisons" classStyle="lg:text-start lg:max-w-[456px] xl:pb-[46px] pb-8" />
            <div className='!duration-700 !transition-all !ease-in-out'>
              {COMPREHENSIVE_DETAILS.map((obj, index) => (
                <div key={index} onClick={() => toggleAccordion(index)} class={`border border-gray bg-white hover:!shadow-custom-xl !transition-all !ease-in-out !duration-700 rounded md:p-[14px] p-3 mb-6 cursor-pointer  ${accoActive === index ? 'shadow-custom-xl' : ''}`}>
                  <div className='flex xl:gap-6 gap-5 items-center'>
                    <span>{obj.comparisonsSvg}</span>
                    <div className='flex flex-col w-full'>
                      <div className={`flex ${accoActive !== index ? '!justify-between' : 'justify-between'}`}>
                        <p className='font-normal xl:text-2xl text-xl xl:leading-custom-6xl text-dark-blue pb-2'>{obj.question}</p>
                        <img src="/assets/images/svg/down-arrow.svg" alt="down" className={`flex ${accoActive !== index ? '' : 'rotate-180'}`} />
                      </div>
                      {accoActive === index && <p className='font-normal xl:text-base text-sm xl:leading-custom-5xl text-dark-blue opacity-90 max-w-[442px]'>{obj.answer}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='lg:max-w-[530px] w-full flex items-center justify-end max-lg:justify-center'>
            <img src="/assets/images/webp/comprehensive-main-image.webp" alt="comprehensive" className='max-w-[530px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComprehensiveUtility
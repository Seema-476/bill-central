import React, { useState } from 'react'
import Heading from '../common/Heading'
import { COMPREHENSIVE_DETAILS } from '../utils/Helper';

const ComprehensiveUtility = () => {
  const [accoActive, setAccoActive] = useState(0);

  const toggleAccordion = (index) => {
    setAccoActive(accoActive === index ? accoActive : index);
  };
  return (
    <div className='lg:py-20 md:py-12'>
      <div className='container'>
        <div className='flex flex-wrap flex-row px-3 max-lg:flex-col-reverse'>
          <div className='lg:w-[50%] w-full px-3'>
            <Heading text="Comprehensive Utility " textbold="Comparisons" classStyle="lg:text-start lg:max-w-[456px] pb-[46px]" />
            <div className='duration-700'>
              {COMPREHENSIVE_DETAILS.map((obj, index) => (
                <div key={index} onClick={() => toggleAccordion(index)} class={`border border-gray bg-white hover:!shadow-custom-xl duration-700 rounded p-[14px] mb-6 cursor-pointer  ${accoActive === index ? 'shadow-custom-xl' : ''}`}>
                  <div className='flex gap-6 items-center'>
                    <span>{obj.comparisonsSvg}</span>
                    <div className='flex flex-col w-full'>
                      <div className={`flex ${accoActive !== index ? '!justify-between' : 'justify-between'}`}>
                        <p className='font-normal text-2xl leading-7 text-dark-blue pb-2'>{obj.question}</p>
                        <img src="/assets/images/svg/down-arrow.svg" alt="down" className={`flex ${accoActive !== index ? '' : 'rotate-180'}`} />
                        </div>
                      {accoActive === index && <p className='font-normal text-base leading-custom-5xl text-dark-blue opacity-90'>{obj.answer}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='lg:w-[50%] w-full flex items-center max-lg:pb-8 justify-end max-lg:justify-center'>
            <img src="/assets/images/webp/comprehensive-main-image.webp" alt="comprehensive" className='max-w-[530px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComprehensiveUtility
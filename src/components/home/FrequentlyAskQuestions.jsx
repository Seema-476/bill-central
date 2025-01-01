import React, { useState } from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import { FREQUENTLY_ASK_QUESTIONS } from '../../utils/Helper'

const FrequentlyAskQuestions = () => {
      const [accoActive, setAccoActive] = useState(0);
    
      const toggleAccordion = (index) => {
        setAccoActive(accoActive === index ? null : index);
      };
    return (
        <div>
            <div className='container'>
                <Heading text="Frequently Asked " textBold="Questions" />
                <Description text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"
                    classStyle="pt-4 pb-[56px] lg:max-w-[556px]" />
                  <div className='!duration-700 !transition-all !ease-in-out'>
                    {FREQUENTLY_ASK_QUESTIONS.map((obj, index) => (
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
        </div>
    )
}

export default FrequentlyAskQuestions
import React from 'react'
import { BENIFITS_LIST } from '../../utils/Helper'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import CustomButton from '../../common/CustomButton'

const SwitchingEnergy = () => {
  return (
    <div className='xl:py-20 md:py-10 py-6'>
      <div className='container'>
        <div className='flex flex-wrap max-lg:flex-col-reverse flex-row px-3 justify-center'>
          <div className='xl:w-[41.66%] lg:w-1/2 w-full px-3 flex max-lg:justify-center'>
            <img src="/assets/images/webp/switching-energy.webp" alt="switching" className='max-w-[507px] w-full pointer-events-none' />
          </div>
          <div className='xl:w-[58.33%] lg:w-1/2 w-full px-3 flex justify-end max-lg:pb-8'>
            <div>
              <Heading boldText="Switching Energy" text="Made Simple " classStyle="lg:text-start text-bold lg:max-w-[409px] max-lg:mx-auto text-normal" />
              <Description text="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity 
            and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers
            quickly and easily, helping you save on energy bills." classStyle="lg:text-start lg:max-w-[558px] !m-0 pt-4 lg:pb-[38px] sm:pb-7 pb-5 max-lg:mx-auto" />
              <p className='font-normal md:text-2xl text-xl md:leading-custom-6xl text-deep-blue lg:pb-7 sm:pb-5 pb-3 max-lg:mx-auto max-lg:text-center'>Benefits of Comparing Energy Plans</p>
              <div className='xl:pb-11 md:pb-8 pb-6 flex max-lg:justify-center '>
                <div className='flex flex-col sm:gap-2 gap-1'>
                  {BENIFITS_LIST.map((benefit, index) => (
                    <div key={index} className='relative after:w-1 after:h-1 after:rounded-full after:bg-dark-blue after:top-[10px] after:-left-0 after:absolute after:content-[""]'>
                      <p className='font-normal md:text-base text-sm text-dark-blue pl-6'>{benefit}</p>
                    </div>
                  ))}
               </div>
              </div>
              <CustomButton text="Compare With Us" imgSrc="/assets/images/svg/arrow-white.svg" classDesign="md:w-6 w-4" classStyle="max-lg:mx-auto" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchingEnergy
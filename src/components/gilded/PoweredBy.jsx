import React from 'react';
import { POWERED_BY_DATA } from '../../utils/Helper';

const PoweredBy = () => {
  return (
    <div className="lg:pt-[58px] lg:pb-[136px] md:py-20 py-12 bg-black -mt-[2px]" id="nodes">
      <div className="container max-w-[1360px] mx-auto">
        <h2 className="font-Josefin font-bold text-5xl leading-[61.2px] max-md:text-3xl max-md:leading-10 text-white text-center  lg:pb-[68px] pb-10">
          <span className="text-gradient">Powered </span>By:
        </h2>
        <div className="flex gap-6 lg:flex-row flex-wrap justify-center">
          {POWERED_BY_DATA.map((obj, index) => (
            <div
              key={index}
              className="max-w-[312px] w-full hover:bg-gradient-to-l from-sky-blue to-light-purple hover:shadow-custom-3xl duration-500 rounded-3xl h-full">
              <div className="max-w-[312px] w-full px-[19px] rounded-[24px] flex items-center justify-center flex-col bg-gradient-to-t from-custom-black to-custom-dark-black border border-border-gray h-[214.25px]">
                <img src={obj.img} alt={obj.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PoweredBy
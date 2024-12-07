import React from 'react'
import arrowSvg from '../assets/images/svg/arrow.svg'

const CustomButton = ({ text, classStyle }) => {
  return (
    <button className={`flex items-center gap-1 text-white rounded-tr-[50px] bg-sky-blue rounded-br-[50px] rounded-bl-[20px] md:py-3 md:px-5 py-2 px-4 font-bold md:text-base text-sm leading-4 md:leading-[18.4px] hover:scale-95 duration-700 ${classStyle}`}>
      {text} <img src={arrowSvg} alt="arrow" className={`fill-white ${classStyle}`} />
    </button>
  )
}

export default CustomButton
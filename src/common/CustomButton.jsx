import React from 'react'

const CustomButton = ({ text, classDesign, classStyle, imgSrc }) => {
  return (
    <button className={`flex items-center justify-center gap-1 text-white rounded-tr-[50px] bg-sky-blue rounded-br-[50px] rounded-bl-[40px] md:py-3 md:px-5 py-2 px-4 font-bold md:text-base sm:text-sm text-xs md:leading-custom-2xl hover:scale-95 duration-700 ${classStyle}`}>
      {text} <img src={imgSrc} alt="arrow" className={`${classDesign}`} />
    </button>
  )
}

export default CustomButton
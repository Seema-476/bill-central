import React from 'react'

const CustomButton = ({ text, classStyle, imgSrc }) => {
  return (
    <button className={`flex items-center justify-center gap-1 text-white rounded-tr-[50px] bg-sky-blue rounded-br-[50px] rounded-bl-[40px] md:py-3 md:px-5 py-2 px-4 font-bold md:text-base text-sm leading-4 md:leading-[18.4px] hover:scale-95 duration-700 ${classStyle}`}>
      {text} <img src={imgSrc} alt="arrow" className={`${classStyle}`} />
    </button>
  )
}

export default CustomButton
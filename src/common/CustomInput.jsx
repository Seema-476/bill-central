import React from 'react'

const CustomInput = ({ text, classStyle, type }) => {
  return (
      <input type={type} placeholder={text} className={`!outline-none font-normal md:text-base text-sm md:leading-5 text-dark-blue mr-1 !placeholder:text-dark-blue ${classStyle}`}
        required />
  )
}

export default CustomInput
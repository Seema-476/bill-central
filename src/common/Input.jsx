import React from 'react'

const Input = ({ text, classStyle }) => {
  return (
    <input type={type} placeholder={text} className={`outline-none font-normal md:text-base text-sm md:leading-5 text-dark-blue w-full mr-1 !placeholder:text-dark-blue ${classStyle}`}/>
  )
}

export default Input
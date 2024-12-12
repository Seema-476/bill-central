import React from 'react'

const Heading = ({ text, textbold, boldtext, classStyle }) => {
  return (
    <h2 className={`font-normal xl:text-5xl md:text-custom-2xl md:leading-custom-8xl sm:text-3xl text-2xl xl:leading-custom-9xl text-dark-blue text-center ${classStyle}`}>
      <span className="!font-bold">{boldtext}</span>  {text}<span className="!font-bold">{textbold}</span></h2>
  )
}

export default Heading
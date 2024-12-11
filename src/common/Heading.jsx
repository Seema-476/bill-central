import React from 'react'

const Heading = ({ text, textbold, boldtext, classStyle }) => {
  return (
    <h2 className={`font-normal lg:text-5xl text-3xl lg:leading-custom-9xl text-dark-blue text-center ${classStyle}`}>
      <span className="!font-bold">{boldtext}</span>  {text}<span className="!font-bold">{textbold}</span></h2>
  )
}

export default Heading
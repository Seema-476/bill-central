import React from 'react'

const Heading = ({ text, textbold, classStyle }) => {
  return (
    <h2 className={`font-normal lg:text-5xl text-3xl lg:leading-custom-8xl text-dark-blue text-center ${classStyle}`}>
      {text}<span className="!font-bold">{textbold}</span></h2>
  )
}

export default Heading
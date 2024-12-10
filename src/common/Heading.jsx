import React from 'react'

const Heading = ({ text, textbold, classStyle }) => {
  return (
    <h2 className={`font-normal text-5xl leading-custom-8xl text-dark-blue text-center ${classStyle}`}>
      {text}<span className="!font-bold">{textbold}</span></h2>
  )
}

export default Heading
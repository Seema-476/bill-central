import React from 'react'

const Description = ({text,classStyle}) => {
  return (
      <p className={`font-normal text-base text-white opacity-90 max-lg:text-center max-lg:mx-auto ${classStyle}`}>{text}</p>
  )
}

export default Description
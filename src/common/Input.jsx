import React from 'react'

const Input = ({text, classStyle}) => {
  return (
      <div className={`flex justify-between md:p-[9px_9px_9px_22px] p-[7px_7px_7px_18px] bg-white rounded-tr-[100px] rounded-br-[100px] rounded-bl-[20px] max-w-[476px] max-lg:mx-auto ${classStyle}`}>
          <input type={type} placeholder={text} className='outline-none font-normal md:text-base text-sm md:leading-5' />
      </div>
  )
}

export default Input
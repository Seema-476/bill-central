import React from 'react'
import { COMPETE_LIST, } from '../../utils/Helper'

const Table = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='font-avantt bg-green py-14 px-4 rounded-xl overflow-x-auto'>
                {COMPETE_LIST.map((obj, i) => (
                    <div key={i} className={`flex ${i === 0 ? "border-none" : "border-t"} pr-2 w-[568px]`}>
                        <div className={`${i === 0 ? "opacity-0" : ""} w-[140px] py-[18.8px] pr-12 pl-2`}>
                            <p className='text-sm font-normal text-white leading-custom-llg avantt-normal'>{obj.service}</p>
                        </div>
                        <div className={`${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} w-24 bg-white text-center flex justify-center items-center py-[18.8px] avantt-semibold`}>
                            <p className={`text-xs leading-custom-lg text-black font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-[34px]" : ""}`}>{obj.rift}</p>
                        </div>
                        <div className={`${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} w-24 bg-white text-center flex justify-center items-center py-[18.8px] mx-3 avantt-semibold`}>
                            <p className={`text-xs leading-custom-lg text-black font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-[30px]" : ""}`}>{obj.taxscouts}</p>
                        </div>
                        <div className={`${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} w-24 bg-white text-center flex justify-center items-center mr-3 py-[18.8px] avantt-semibold`}>
                            <p className={`text-xs leading-custom-lg text-black font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-14 px-[1px]" : ""}`}>{obj.coconut}</p>
                        </div>
                        <div className={`${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} w-24 text-center flex justify-center items-center bg-light-green py-[18.8px] avantt-semibold`}>
                            <p className={`text-xs leading-custom-lg text-black font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-20" : ""}`}>{obj.pie}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table
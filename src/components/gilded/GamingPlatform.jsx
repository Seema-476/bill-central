import React from 'react'

const GamingPlatform = () => {
    return (
        <div className='bg-gaming-platform bg-no-repeat bg-cover bg-center -mt-[2px]'>
            <div className='max-w-[940px] px-4 mx-auto relative pt-[229px] py-[228px] max-lg:py-[200px] max-md:py-[160px]'>
                <h3 className='text-white font-Josefin lg:text-[40px] lg:leading-[62.4px] text-center md:text-4xl md:leading-[46px] sm:text-3xl sm:leading-10 text-2xl'>
                    <span className='relative'>
                        Gilded
                        <img
                            src="/assets/images/svg/future-vector-left.svg"
                            alt='Quotes-open'
                            className='absolute xl:left-[-88%] lg:-left-[80px] md:-left-[75px] sm:-left-[66px] -left-[18px] xl:top-[-70px] lg:-top-[62px] sm:-top-[50px] -top-11 xl:w-[102px] lg:w-[90px] sm:w-[73px] w-[50px]'
                        />
                    </span>
                    Games is a new type of gaming platform, partially owned and operated
                    by its players. Earn Gild tokens by playing and use them to decide the
                    future of the <span className='relative'>
                        game!
                        <img
                            className='absolute lg:bottom-[-70px] lg:!right-[-110px] md:bottom-[-45px] sm:-bottom-16 md:-right-[70px] sm:-right-0 -right-2 lg:w-[90px] sm:w-[73px] w-[50px] platform-right-arrow'
                            src="/assets/images/svg/future-vector-right.svg"
                            alt='Quotes-close'
                        />
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default GamingPlatform
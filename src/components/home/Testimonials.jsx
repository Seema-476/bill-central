import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { SLIDES } from '../../utils/Helper';

const Testimonials = () => {
  return (
    <div className='xl:py-20 md:py-10 py-6'>
      <div className='lg:max-w-[1324px] mx-auto container'>
        <Heading text="Our " textBold="Testimonials" />
        <Description text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"
          classStyle="pt-4 xl:pb-[62px] pb-8 lg:max-w-[490px]" />
        <div className='!m ax-w-[1140px] mx-auto relative container'>
          <div className='xl:block hidden'>
            <button className='!w-10 !h-10 border border-dark-blue rounded-[50%] flex justify-center items-center swiper-button-prev absolute -left-[65px]'>
              <img src="/assets/images/svg/prev-arrow.svg" alt="prev" /> 
            </button>
            <button className='!w-10 !h-10 border border-dark-blue rounded-[50%] flex justify-center items-center swiper-button-next absolute -right-[65px]'>
              <img src="/assets/images/svg/next-arrow.svg" alt="prev" /></button>
          </div>
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            pagination={{
              clickable: true,
             }}
            navigation={{ 
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            loop={true}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              375: {
                slidesPerView: 1,
                pagination: { clickable: true },
              },
              576: {
                slidesPerView: 1,
                pagination: { clickable: true },
              },
              768: {
                slidesPerView: 2,
                pagination: { clickable: true },
              },
              1024: {
                slidesPerView: 3,
                pagination:{ clickable: false },
              },
              1280: {
                slidesPerView: 3,
                pagination: { clickable: false },
              },
            }}>
              {SLIDES.map((slide, index) => (
                <SwiperSlide key={index} className="border border-gray shadow-custom-xl md:p-5 p-3 max-w-[364px] rounded">
                  <div className="flex gap-2">
                    <img src={slide.imageUrl} alt={slide.name} className="md:w-[60px] w-12 max-md:h-12" />
                    <div>
                      <p className="font-normal md:text-2xl text-xl md:leading-9 text-black">{slide.name}</p>
                      <p className="font-normal md:text-base text-sm text-black opacity-50">{slide.username}</p>
                    </div>
                  </div>
                  <img src="/assets/images/svg/star.svg" alt="star" className="md:pb-[18px] md:pt-6 py-4" />
                  <Description text={slide.description} classStyle="text-start !text-dark-blue" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
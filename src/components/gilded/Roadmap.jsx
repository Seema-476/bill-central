import React from "react";
import { ROADMAP_DATA } from '../../utils/Helper';

const Roadmap = () => {

    return (
        <div className="bg-black">
            <div
                className="xl:pt-[114px] md:pb-9 lg:pt-12 md:pt-9 py-6 relative max-w-[1920px] mx-auto -mt-[2px]"
                id="nodes"
            >
                <div className="absolute right-0 top-[46.7%] xl:block hidden">
                    <img
                        src="/assets/images/svg/dashed-line.svg"
                        alt="timeline-line"
                        className="2xl:max-w-[654px] w-full max-w-[300px]"
                    />
                </div>
                <div className="container max-w-[1360px] mx-auto relative">
                    <h2 className="font-Josefin font-bold text-5xl leading-[61.2px] max-md:text-3xl max-md:leading-10 text-white text-center xl:pb-[97px] pb-10">
                        <span className="text-gradient">Road</span>map
                    </h2>
                    <div className="lg:flex relative justify-between after:absolute after:content-[''] lg:after:left-0 lg:after:right-0 lg:after:top-[34px] after:!bg-custom-gray lg:after:w-[83%] after:w-[1px] lg:after:h-[1px] after:h-[70%] after:top-0 sm:after:left-[33px] after:left-[25px] max-lg:max-w-full max-xl:max-w-[980px] xl:max-w-[1224px]">
                        {ROADMAP_DATA.map((obj, index) => (
                            <div
                                key={index}
                                className={`flex flex-col lg:ps-0 sm:ps-[90px] ps-[70px] ${index > 0 ? "lg:mt-0 mt-[30px]" : ""
                                    } lg:pt-[95px] relative`}
                            >
                                <div className="relative after:absolute after:content-[''] after:bg-gradient-to-r from-light-purple to-sky-blue after:shadow-custom-3xl lg:after:top-[-95px] lg:after:left-0 after:top-0 after:left-[-67px] sm:after:-left-20 lg:after:w-[65px] after:w-[45px] lg:after:h-[62px] after:h-11 after:rounded-[50%] after:z-10">
                                    <p className="font-Poppins font-semibold sm:text-lg text-base !sm:leading-[23.22px] leading-5 text-white">
                                        {obj.title}
                                    </p>
                                    <p className="font-Poppins font-semibold sm:text-4xl text-2xl text-white sm:!leading-[46.44px]">
                                        {obj.question}
                                    </p>
                                    {obj.description.map((detail, i) => (
                                        <div key={i} className="flex items-center sm:pt-[12px] pt-[10px]">
                                            <div className="size-1 rounded-[50%] bg-custom-gray ms-1"></div>
                                            <p className="font-Montserrat font-normal sm:text-lg text-base sm:leading-[32.4px] text-white opacity-[70%] ps-2">
                                                {detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Roadmap;
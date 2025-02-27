import React from "react";
import { LuMapPin } from "react-icons/lu";
import { GoGlobe } from "react-icons/go";
import { LuChevronDown } from "react-icons/lu";
import { FiCpu } from "react-icons/fi";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { FiHardDrive } from "react-icons/fi";
import { RiRam2Line } from "react-icons/ri";
import { LuMonitor } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import SliderCustom from './SliderCustom';

const ServerConfig = () => {
    return (
        <>
            <div className="lg:block">
                <p className="text-white text-[1.8rem] text-center lg:text-left lg:text-[2.25rem] font-semibold">Server Configuration</p>
                <p className="text-white text-sm text-center lg:text-left lg:text-base">Customize your server's specifications to ensure optimal performance and reliability.</p>
            </div>
            
            <div className="flex flex-col space-y-4 lg:space-y-0">
                <div className='flex flex-col lg:flex-row lg:items-center'>
                    <span className="flex items-center justify-center lg:justify-start gap-2 w-full lg:w-[30%] mb-2 lg:mb-0">
                        <LuMapPin className="text-white text-[1.5rem] lg:text-[1.8rem]" />
                        <p className="text-txMo text-[1rem] lg:text-[1.1rem]">Location</p>
                    </span>
                    <div className='flex items-center pt-[0.7rem] pr-[1rem] pb-[0.7rem] pl-[1rem] w-full lg:w-[70%]'>
                        <button className='w-full h-[3rem] text-[12px] lg:h-[2.37rem] lg:w-auto flex items-center justify-between lg:justify-start gap-2 pt-[7px] pb-[7px] pl-[14px] pr-[14px] border border-defaultBo rounded-[24px] text-white lg:text-[1rem] lg:text-[1.1rem] hover:bg-defaultBo transition-all duration-200'>
                            <span className='flex gap-1 items-center'>
                                <GoGlobe className='text-white text-[1.2rem] lg:text-[1.3rem]' />
                                <p className='text-white'>Phoenix, AZ</p>
                            </span>
                            <LuChevronDown className='text-white text-[1.2rem] lg:text-[1.3rem]' />
                        </button>
                    </div>
                </div>
                
                <div className='flex flex-col lg:flex-row lg:items-center'>
                    <span className="flex items-center justify-center lg:justify-start gap-2 w-full lg:w-[30%] mb-2 lg:mb-0">
                        <FiCpu className="text-white text-[1.5rem] lg:text-[1.8rem]" />
                        <p className="text-txMo text-[1rem] lg:text-[1.1rem]">Processor</p>
                    </span>
                    
                    <div className='flex items-center pt-[0.7rem] pr-[1rem] pb-[0.7rem] pl-[1rem] gap-2 w-full lg:w-[70%]'>
                        <button className='flex items-center p-2 border h-[2.3rem] border-defaultBo rounded-[8px] hover:bg-defaultBo transition-all duration-200'>
                            <FiMinus className='text-white text-[0.8rem] lg:text-[1.2rem]' />
                        </button>
                        <div className='flex h-[2.75rem] gap-[10px] bg-secondaryBg rounded-[24px] p-[0.6rem]'>
                            <span className='hidden lg:flex text-white items-center justify-center bg-tertiaryBg rounded-[8px] px-[0.6rem] py-[0.3rem]'>Intel</span>
                            <span className='text-white'>6</span>
                                <RxDividerVertical className='text-[#8B8B93] text-[1.5rem]' />
                            <span className='text-white'>2.90</span>
                        </div>
                        <button className='flex items-center p-2 border h-[2.3rem] border-defaultBo rounded-[8px] hover:bg-defaultBo transition-all duration-200'>
                            <FiPlus className='text-white text-[0.8rem] lg:text-[1.2rem]' />
                        </button>
                    </div>
                </div>
                
                <div className='flex flex-col lg:flex-row lg:items-center'>
                    <span className="flex items-center justify-center lg:justify-start gap-2 w-full lg:w-[30%] mb-2 lg:mb-0">
                        <FiHardDrive className="text-white text-[1.5rem] lg:text-[1.8rem]" />
                        <p className="text-txMo text-[1rem] lg:text-[1.1rem]">Storage</p>
                    </span>
                    
                    <div className='flex items-center pt-[0.7rem] pr-[1rem] pb-[0.7rem] pl-[1rem] gap-2 w-full lg:w-[70%]'>
                        <button className='flex items-center p-2 border h-[2.3rem] border-defaultBo rounded-[8px] hover:bg-defaultBo transition-all duration-200'>
                            <FiMinus className='text-white text-[0.8rem] lg:text-[1.2rem]' />
                        </button>
                        <div className='flex justify-center items-center h-[3rem] lg:h-[2.3rem] gap-[10px] bg-secondaryBg rounded-[24px] p-[0.6rem]'>
                            <span className='flex items-center justify-center text-[12px] text-white'>2x 2TB NVME</span>
                        </div>
                        <button className='flex items-center p-2 border h-[2.3rem] border-defaultBo rounded-[8px] hover:bg-defaultBo transition-all duration-200'>
                            <FiPlus className='text-white text-[0.8rem] lg:text-[1.2rem]' />
                        </button>
                    </div>
                </div>
                
                <div className='flex flex-col lg:flex-row lg:items-center'>
                    <span className="flex items-center justify-center lg:justify-start gap-2 w-full lg:w-[30%] mb-2 lg:mb-0">
                        <RiRam2Line className="text-white text-[1.5rem] lg:text-[1.8rem]" />
                        <p className="text-txMo text-[1rem] lg:text-[1.1rem]">Memory</p>
                    </span>
                    
                    <div className='flex items-center pt-[0.7rem] pr-[1rem] pb-[0.7rem] pl-[1rem] gap-2 w-full lg:w-[70%]'>
                        <button className='flex items-center p-2 border h-[2.3rem] border-defaultBo rounded-[8px] hover:bg-defaultBo transition-all duration-200'>
                            <FiMinus className='text-white text-[1.2rem]' />
                        </button>
                        <div className='flex h-[2.3rem] gap-[10px] bg-secondaryBg rounded-[24px] p-[0.6rem]'>
                            <span className='flex items-center text-white'>16GB</span>
                        </div>
                        <button className='flex items-center p-2 border h-[2.3rem] border-defaultBo rounded-[8px] hover:bg-defaultBo transition-all duration-200'>
                            <FiPlus className='text-white text-[1.2rem]' />
                        </button>
                    </div>
                </div>
                
                <div className='flex flex-col lg:flex-row lg:items-center'>
                    <span className="flex items-center justify-center lg:justify-start gap-2 pr-[6.5rem] lg:mt-[-1.4rem] mb-2 lg:mb-0">
                        <LuMonitor className="text-white text-[1.5rem] lg:text-[1.8rem]" />
                        <span className="flex items-center text-txMo text-[1rem] lg:text-[1.1rem]">
                            IP Addresses
                            <button><IoIosHelpCircleOutline className='pl-[0.2rem] text-fourthBg text-[1.3rem]' /></button>
                        </span>
                    </span>
                    
                    <SliderCustom w={250} min={"1 IP"} max={"50 IPs"} />
                    
                </div>
            </div>
        </>
    )
}

export default ServerConfig;
import React from 'react';
import Price from './Price';
import { FiTool } from "react-icons/fi";
import ServerConfig from './ServerConfig';
import { LuMonitor } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuChevronDown } from "react-icons/lu";
import { FiCreditCard } from "react-icons/fi";
import { ReactComponent as ActivityIcon } from '../../assets/svg/activity.svg';
import { priceList1, priceList2, priceList3, priceList4, tblPlan } from './priceData';
import CustomConfig from './CustomConfig';
import SliderCustom from './SliderCustom';

const MainContent = () => {
    return (
        <main className='bg-mainBg'>
            <div className='container mx-auto'>
                <div className='flex w-full pt-[50px] lg:pt-0 lg:h-[21rem] items-center justify-center'>
                    <div className='flex flex-col w-[80rem] h-[9.4rem]'>
                        <p className='text-signUpBtn text-center lg:text-left text-sm'>Pricing</p>
                        <p className='text-white text-[2rem] lg:text-[3rem] font-bold text-center lg:text-left'>Simple, transparent pricing</p>
                        <p className='text-white pt-[10px] text-[1.25rem] text-center lg:text-left'>We believe hosting should be accessible to all companies, no matter the size.</p>
                    </div>
                </div>
                
                <div className='flex flex-col mt-[80px] pb-[2rem] lg:pb-[6rem] lg:mt-0 lg:flex-row gap-8 items-center lg:items-start justify-center'>
                    <Price dataList={priceList1} />
                    <Price dataList={priceList2} />
                    <Price dataList={priceList3} />
                </div>
                
                <div className='flex flex-col p-[2rem] lg:p-[6rem] gap-16'>
                    <div className='flex w-full items-center justify-center'>
                        <div className='flex flex-col w-[80rem] h-[9.4rem]'>
                            <p className='text-signUpBtn text-center lg:text-left text-sm'>Pricing</p>
                            <p className='text-white text-[2rem] lg:text-[3rem] font-bold text-center lg:text-left'>Build a plan that fits your needs</p>
                            <p className='text-white pt-[10px] text-[1.25rem] text-center lg:text-left'>Unlimited data transfer, unshared 1×10GE — 2×100GE ports</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:p-8 gap-8">
                        
                        {/* Server Config Section */}
                        <div className="flex flex-col items-center xl:flex-row justify-between xl:w-full gap-6">
                            <div className="flex flex-col bg-headerBg w-full rounded-[24px] p-8 lg:p-8 gap-8 box-border">
                                <ServerConfig />
                            </div>
                            
                            <Price dataList={priceList4} option={false}/>
                            
                        </div>
                        
                        {/* Bandwidth Commit Section */}
                        <div className='flex flex-col lg:flex-row justify-between p-4 lg:p-6 bg-headerBg box-border rounded-[24px]'>
                            <div className="flex flex-col lg:flex-row lg:w-[43rem]">
                                <span className="flex items-center gap-2 lg:pr-[2rem] mb-2 lg:mb-0">
                                    <ActivityIcon className="text-white text-[1.5rem] lg:text-[1.8rem]" />
                                    <span className="flex items-center text-txMo text-[1rem] lg:text-[1.5rem]">
                                        Bandwidth Commit
                                        <button><IoIosHelpCircleOutline className='pl-[0.2rem] text-fourthBg text-[1.3rem]' /></button>
                                    </span>
                                </span>
                                
                                <SliderCustom w={300} min={"5 Gbps"} max={"50 Gbps"} />
                            </div>
                            
                            <div className='text-white'>
                                <p>Amount</p>
                                <div className='flex items-center gap-2'>
                                    <span className='text-fourthBg'>$</span>
                                    <span>60</span>
                                </div>
                            </div>
                        </div>
                        
                        <CustomConfig />
                        
                        {/* Support Section */}
                        <div className='flex flex-col w-full justify-between p-4 lg:p-6 bg-headerBg box-border rounded-[24px]'>
                            <p className="text-white text-[1.8rem] lg:text-[2.25rem] font-semibold">Support</p>
                            <p className='text-white'>Need help maintaining your servers? Get email and chat support from our technicians.</p>
                            
                            <div className='flex items-center justify-between mt-8'>
                                <div className="flex flex-col gap-3">
                                    <p className='text-white font-semibold'>Current Plan</p>
                                    
                                    <button className='flex gap-2 border border-secondBo rounded-[24px] px-4 py-2 hover:bg-secondBo transition-all duration-200'>
                                        <span className='text-white flex gap-2'>
                                            <FiTool className='text-white text-[1.5rem]' />
                                            Basic
                                        </span>
                                        <LuChevronDown className="text-white text-[1.5rem]"/>
                                    </button>
                                </div>
                                
                                <div className='text-white'>
                                    <p>Amount</p>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-fourthBg'>$</span>
                                        <span>15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Your plan Section */}
                        <div className='flex flex-col w-full p-4 lg:p-6 bg-headerBg box-border rounded-[24px]'>
                            <p className="text-white text-[1.8rem] lg:text-[2.25rem] font-semibold">Your Plan</p>
                            <p className='text-white'>Based on your current choices.</p>
                            
                            <div className="flex flex-col my-10 pt-3">
                                <div className='flex flex-col'>
                                    {
                                        tblPlan.map((item, index) => (
                                            <div key={index} className={`flex text-white justify-between py-[10px] ${index === tblPlan.length - 1 ? 'border-t border-txDe' : ''}`}>
                                                <p className='text-txDe'>{item.name}</p>
                                                <p className='text-white'>{item.cost}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            
                            <button className='flex items-center justify-center text-white gap-2 bg-signUpBtn rounded-[24px] w-[8.68rem] px-4 py-2 hover:bg-signUpBtn/80 transition-all duration-200'>
                                <FiCreditCard className='text-white text-[1.3rem]' />
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;

import React from 'react';
import { ReactComponent as CheckIcon } from '../../assets/svg/check.svg';
import { FiPlusCircle } from "react-icons/fi";

const Price = ({dataList, fontSize=""}) => {
    return (
        <div className="z-10 flex flex-col items-center w-[20rem] lg:w-[24rem] p-8 bg-headerBg rounded-[24px] box-border">
            <span className='text-white text-[3.75rem] pt-[0.5rem] mb-[1rem] font-semibold'>{ dataList.head[0] }</span>
            <p className='text-white text-center'>{ dataList.head[1] }</p>
            <p className='text-white text-center'>Billed monthly.</p>
            
            <div className="flex flex-col w-full pt-8 pb-8 gap-4">
                { dataList.data.map((item, index) => (
                    <span className='flex items-center gap-3' key={index}>
                        <CheckIcon />
                        <p className='text-white text-sm'>{ item }</p>  
                    </span>
                ))}
            </div>
            
            { dataList.option && <button className="bg-signUpBtn text-white font-semibold text-sm w-full h-[3rem] rounded-[3rem] hover:bg-signUpBtn/80 transition-all duration-200">Get started</button> }
            {
                !dataList.option &&
                <button className="flex items-center justify-center gap-2 border border-defaultBo text-white font-semibold text-sm w-full h-[3rem] rounded-[3rem] hover:bg-defaultBo transition-all duration-200">
                    <FiPlusCircle className="text-[1.2rem]"/> Add Server
                </button>
            }
        </div>
    );
};  

export default Price;

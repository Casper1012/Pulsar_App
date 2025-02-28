import React from 'react';

const timeItems = [
    "15 Min", "1 Hour", "1 Day", "1 Month", "1 Year", "All Time"
];

const MainContent = () => {
    return (
        <div className='flex-1 overflow-y-scroll scrollbar-hide h-full flex flex-col text-white bg-mainBg p-6'>
            <div className='flex w-full gap-6'>
                <div className='w-[70%] p-6 rounded-[25px] bg-sixthBg'>
                    <div className='flex w-full'>
                        <div className="flex flex-col">
                            <p className='text-txDe text-sm'>Activity</p>
                            <p className='text-white text-[1.5rem]'>Total Trafiic</p>
                        </div>
                        
                        <div className='flex items-center gap-[6px]'>
                            <div className="flex w-full h-[2.3rem] items-center justify-between bg-tblDe py-1 px-[1rem] rounded-[24px]">
                                {timeItems.map((item, index) => (
                                    <button key={index} className='text-white py-[0.4rem] px-[1rem] text-sm rounded-[24px] bg-signUpBtn'>{item}</button>
                                ))}
                            </div>
                            
                            <button>Hello</button>
                        </div>
                    </div>
                </div>
                
                <div className='w-[30%] p-6 rounded-[25px] bg-sixthBg'></div>
            </div>
        </div>
    )
}   

export default MainContent;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { LuServer } from "react-icons/lu";
import { LuMonitor } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { ReactComponent as CityImg } from "../../assets/svg/city.svg";
import { ReactComponent as ArrangeIcon } from "../../assets/svg/arrange.svg";
import { ReactComponent as AvatarImg } from "../../assets/svg/avatar2.svg";
import { ReactComponent as MsgIcon } from "../../assets/svg/message.svg";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineMoon } from "react-icons/ai";
import CustomSwitch from '../home/CustomSwitch';
import { IoSunnyOutline } from "react-icons/io5";
import { LuMaximize2 } from "react-icons/lu";

const menuItems = [
    {
        icon: <GoHome className='text-[1.4rem]'/>,
        label: 'Dashboard',
        path: '/home'
    },
    {
        icon: <LuServer className='text-[1.4rem]'/>,
        label: 'Servers',
        path: '/servers'
    },
    {
        icon: <LuMonitor className='text-[1.4rem]'/>,
        label: 'IP Addresses',
        path: '/ip-addresses'
    },
    {
        icon: <LuDatabase className='text-[1.4rem]'/>,
        label: 'Databases',
        path: '/databases'
    },
    {
        icon: <MdPayment className='text-[1.4rem]'/>,
        label: 'Payments',
        path: '/payments'
    },
    {
        icon: <LuSettings className='text-[1.4rem]'/>,
        label: 'Settings',
        path: '/settings'
    }
];

const SideMenu = () => {
    const location = useLocation().pathname;
    const [theme, setTheme] = useState('dark');
    
    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    
    return (
        <div className='flex flex-col w-[16rem] h-screen bg-headerBg gap-6 p-6'>
            <div className='flex flex-col w-full h-[22.56rem] text-txDe border-b border-b-white'>
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} className={`flex items-center gap-[0.6rem] rounded-[3rem] hover:bg-signUpBtn/50 hover:text-white py-[0.7rem] pl-[1.3rem] pr-[1rem] ${location === item.path ? 'bg-signUpBtn text-white hover:bg-signUpBtn' : ''}`}>
                        {item.icon}
                        {item.label}
                    </Link>
                ))} 
            </div>
            
            <div className='relative w-full h-[12.63rem] bg-gradient-menu rounded-[1.1rem] text-white'>
                <CityImg className='absolute top-[11px] right-[9px]' />
                
                <div className="absolute bottom-[2.2rem] left-5">
                    <p className='font-bold pb-[0.2rem]'>Go to Pro</p>
                    <p className='text-[12px] font-normal'>Get access to all<br/> features on Pro account</p>
                </div>

                <button>
                    <ArrangeIcon className='absolute top-2 left-0' />
                </button>
            </div>
            
            <div className='flex flex-col relative h-[17.75rem] bg-tblDe rounded-[0.8rem] pt-[1.38rem] pb-5'>
                <div className="relative msgStyle w-[2.25rem] h-[1.1rem] left-[2rem]">
                    <RiAccountCircleLine className='absolute top-[3px] text-white left-1 text-[0.5rem]' />
                    <div className='absolute top-[3px] text-white left-1 text-[0.5rem] w-[1.1rem] h-[1.1rem]'></div>
                    <div className='absolute top-[4.9px] right-[4.3px] w-[16.5px] h-[3px] border-t border-white'></div>
                    <div className='absolute top-[4.9px] right-[7.76px] w-[13px] h-[3px] border-b border-white'></div>
                </div>
                
                <AvatarImg className='mb-5 ml-[2rem]' />
                
                <div className='flex flex-col gap-5 text-white px-10'>
                    <p className='text-center text-[0.75rem]'>Need help managing<br /> your servers? Add the<br /> <span className="font-bold">Support Plan</span> now!</p>
                    <button className='bg-signUpBtn text-white text-[0.75rem] font-bold rounded-[6px] h-[2rem] py-[0.5rem] px-[0.8rem] hover:bg-signUpBtn/80 hover:text-[0.8rem]'>Upgrade Now</button>
                </div>
            </div>
            
            <div className='flex pt-3 items-center pb-[0.7rem] px-5 bg-tblDe h-[3.3rem] rounded-[12px]'>
                <div className='flex items-center'>  
                    <AiOutlineMoon className={`text-[1.3rem] ${theme === 'dark' ? 'text-thirdBo' : 'text-txTr'}`}/>
                    <CustomSwitch onChange={handleThemeChange} />    
                    <IoSunnyOutline className={`text-[1.3rem] ${theme === 'dark' ? 'text-txTr' : 'text-thirdBo'}`} />
                </div>
                <div className='w-[20px] h-[31px] mr-5 border-r border-sixthBg'></div>
                <button className='flex items-center border border-white rounded-[5px] w-5 h-5 group hover:w-[22px] hover:h-[22px] hover:bg-white/20 hover:text-txDe'>
                    <LuMaximize2 className='text-[1.1rem] text-white group-hover:text-[1.2rem]'/>
                </button>
            </div>
        </div>
    )
}   

export default SideMenu;

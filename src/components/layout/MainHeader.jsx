import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo-big.svg';
import { VscBell } from "react-icons/vsc";
import { TbHelp } from "react-icons/tb";
import avatar from '../../assets/img/avatar.png';

const MainHeader = () => {
    return (
        <div className="z-10 flex items-center justify-between h-15 bg-headerBg shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
            <Logo className='pl-5' />
            
            <div className='flex items-center justify-between gap-6 mr-6'>
                <button><VscBell className='text-[1.25rem] text-txDe hover:bg-txDe/20 hover:rounded-full hover:p-[2px]' /></button>
                <button><TbHelp className='text-[1.4rem] text-txDe hover:bg-txDe/20 hover:rounded-full hover:p-[2px]' /></button>
                <button><img src={avatar} alt="avatar" className='w-10 h-10 rounded-full hover:opacity-80' /></button>
            </div>
        </div>
    )
}
// box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
export default MainHeader;
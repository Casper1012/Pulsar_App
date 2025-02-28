import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/svg/sign-logo.svg';
import { CiMail } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { ReactComponent as ContentDivider } from '../../assets/svg/divider.svg';
import { ReactComponent as GoogleIcon } from '../../assets/svg/google.svg';
import { Link } from 'react-router-dom';

const MainContent = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <main className='flex items-center justify-center w-full sm:h-[calc(100vh-5rem)] bg-mainBg text-white px-4 py-10'>
            <div className='flex flex-col items-center justify-center w-[18.75rem] lg:w-[22.5rem]'>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <Logo />
                    <p className='text-[1.875rem] font-semibold'>Create an account</p>
                </div>
                
                <div className="flex flex-col gap-6 mt-8">
                    <div className='flex justify-between gap-8'>
                        <input type="text" placeholder="First Name" className="w-full h-[2.75rem] rounded-[24px] bg-tblDe py-[10px] px-[14px] outline-none" />
                        <input type="text" placeholder="Last Name" className="w-full h-[2.75rem] rounded-[24px] bg-tblDe py-[10px] px-[14px] outline-none" />
                    </div>
                    
                    <div>
                        <div className='flex items-center gap-2 w-full h-[2.75rem] rounded-[24px] bg-tblDe py-[10px] px-[14px]'>
                            <CiMail className='text-[1.25rem]'/>
                            <input type="text" placeholder="Enter your email" className="w-full text-white bg-transparent outline-none" />
                            <IoIosInformationCircleOutline className='text-[1.25rem] text-red-500'/>
                        </div>
                        <p className='text-[0.875rem] text-red-500'>Please enter a valid email.</p>
                    </div>
                    
                    <div className='flex items-center gap-1 w-full h-[2.75rem] rounded-[24px] bg-tblDe py-[10px] px-[14px]'>
                        <span>US</span>
                        <button><IoChevronDown className='text-[1.25rem]'/></button>
                        <input type="text" placeholder="+1 (555) 000-0000" className="w-full pr-[14px] text-white bg-transparent outline-none" />
                    </div>
                    
                    <div className='flex items-center gap-1 w-full h-[2.75rem] rounded-[24px] bg-tblDe py-[10px] px-[14px]'>
                        <input type="text" placeholder="Password" className="w-full pr-[14px] text-white bg-transparent outline-none" />
                        <FiEye className='text-[1.25rem] text-white'/>
                    </div>
                    
                    <div className='flex items-center gap-1 w-full h-[2.75rem] rounded-[24px] bg-tblDe py-[10px] px-[14px]'>
                        <input type="text" placeholder="Confirm Password" className="w-full pr-[14px] text-white bg-transparent outline-none" />
                        <FiEye className='text-[1.25rem] text-white'/>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button onClick={handleCheckboxChange} className='w-[1.25rem] h-[1.25rem] rounded-[6px] bg-tblDe border border-txBo pl-[1px]'>
                            {isChecked ? (
                                <FaCheck className='text-[1rem] text-white'/>
                            ) : (
                                <></>
                            )}
                        </button>
                        <p className='text-[0.875rem] text-white'>I agree to the <span className='underline'>terms & conditions</span><span className='text-tblDe'>.</span></p>
                    </div>
                </div>
                
                <button className='w-full h-[2.75rem] rounded-[24px] bg-signUpBtn text-white text-[1rem] mt-4'>Get Started</button>
                
                <div className='flex items-center mt-6'>
                    <ContentDivider className='mr-2 w-28 sm:w-full'/>
                    <p>OR</p>
                    <ContentDivider className='ml-2 w-28 sm:w-full'/>
                </div>
                
                <button className='flex items-center justify-center gap-3 w-full h-[2.75rem] rounded-[24px] bg-sixthBg py-[10px] px-[14px] mt-6'>
                    <GoogleIcon />
                    <p>Sign up with Google</p>
                </button>
                
                <div className='flex items-center justify-center gap-3 w-full h-[2.75rem] mt-6'>
                    <p>Already have an account?</p>
                    <Link to='/login' className='text-signUpBtn'>Login</Link>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
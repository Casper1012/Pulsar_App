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
        <main className='flex items-center justify-center w-full min-h-[800px] h-[calc(100vh-5rem)] bg-mainBg text-white px-4 py-10'>
            <div className='flex flex-col items-center justify-center w-[18.75rem] lg:w-[22.5rem]'>
                <div className='flex flex-col items-center justify-center'>
                    <Logo className='mb-4'/>
                    <p className='text-[1.875rem] font-semibold text-center'>Log in to your account</p>
                    <p className='text-center'>Welcome back! Please enter your details.</p>
                </div>
                
                <div className="flex flex-col w-full mt-8">
                    <div className="mb-5">
                        <p>Email</p>
                        <div className='flex items-center gap-2 w-full h-[2.75rem] rounded-[24px] bg-tblDe py-[10px] px-[14px] mt-[6px]'>
                            <CiMail className='text-[1.25rem]'/>
                            <input type="text" placeholder="Enter your email" className="w-full text-white bg-transparent outline-none" />
                            <IoIosInformationCircleOutline className='hidden text-[1.25rem] text-red-500'/>
                        </div>
                    </div>
                    
                    <div className='mb-6'>
                        <p>Password</p>
                        <div className='flex items-center gap-1 w-full h-[2.75rem] rounded-[24px] bg-tblDe py-[10px] px-[14px] mt-[6px]'>
                            <input type="password" placeholder="Password" className="w-full pr-[14px] text-white bg-transparent outline-none" />
                            <FiEye className='text-[1.25rem] text-white'/>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <button onClick={handleCheckboxChange} className='w-[1.25rem] h-[1.25rem] rounded-[6px] bg-tblDe border border-txBo pl-[1px]'>
                                {isChecked ? (
                                    <FaCheck className='text-[1rem] text-white'/>
                                ) : (
                                    <></>
                                )}
                            </button>
                            <p className='text-[0.875rem] text-white'>Remember for 30 days</p>
                        </div>
                        <button className='text-signUpBtn'>Forgot Password?</button>
                    </div>
                </div>
                
                <button className='w-full h-[2.75rem] rounded-[24px] bg-signUpBtn text-white text-[1rem] mt-6'>Sign in</button>
                
                <button className='flex items-center justify-center gap-3 w-full h-[2.75rem] rounded-[24px] bg-sixthBg py-[10px] px-[14px] mt-4'>
                    <GoogleIcon />
                    <p>Sign up with Google</p>
                </button>
                
                <div className='flex items-center justify-center gap-3 w-full h-[2.75rem] mt-6'>
                    <p>Don’t have an account?</p>
                    <Link to='/signup' className='text-signUpBtn'>Sign up</Link>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
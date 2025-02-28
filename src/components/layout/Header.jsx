import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/svg/logo-small.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import BarsIcon from "../../assets/svg/bars.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div className="flex items-center justify-between h-20 p-2 sm:pt-[1.13rem] sm:pr-8 sm:pl-8 sm:pb-[1.13rem] bg-headerBg">
            <div className="relative flex items-center gap-2 sm:gap-10 pt-[2.5px] pb-[2.5px]">
                <span className="pl-[0.5rem] sm:pl-[2.63rem] pb-[7px]"><Logo className="mt-[-3px]" /></span>
                <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}><img src={BarsIcon} alt="Bars Icon" /></button>
                <div className="hidden lg:flex items-center gap-8">
                    <Link to="/" className="text-white text-base hover:opacity-80 transition-opacity">Home</Link>
                    <Link to="/" className="text-white text-base hover:opacity-80 transition-opacity">Products <FontAwesomeIcon icon={faChevronDown} className="pl-2"/></Link>
                    <Link to="/" className="text-white text-base hover:opacity-80 transition-opacity">Resources <FontAwesomeIcon icon={faChevronDown} className="pl-2" /></Link>
                    <Link to="/" className="text-white text-base hover:opacity-80 transition-opacity">Pricing</Link>
                </div>
                
                {isMenuOpen && (
                    <div className="lg:hidden absolute flex flex-col gap-2 top-[60px] right-0 w-[120px] bg-headerBg bg-opacity-80 p-4">
                        <Link to="/" className="text-white text-base hover:opacity-80 transition-opacity">Home</Link>
                        <Link to="/" className="text-white text-base hover:opacity-80 transition-opacity">Products</Link>
                        <Link to="/" className="text-white text-base hover:opacity-80 transition-opacity">Resources</Link>
                        <Link to="/" className="text-white text-base hover:opacity-80 transition-opacity">Pricing</Link>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3">
                <Link to="/login" className="text-white text-base p-2 sm:pt-[0.62rem] sm:pr-[1.12rem] sm:pb-[0.62rem] sm:pl-[1.12rem] hover:opacity-80 transition-opacity">Log in</Link>
                <Link to="/signup" className="text-white text-base bg-signUpBtn rounded-[48px] p-2 sm:pt-[0.62rem] sm:pr-[1.12rem] sm:pb-[0.62rem] sm:pl-[1.12rem] hover:opacity-80 transition-opacity">Sign up</Link>
            </div>
        </div>
    );
};  

export default Header;

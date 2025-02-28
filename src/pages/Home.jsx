import React from 'react';
import MainHeader from '../components/layout/MainHeader';
import SideMenu from '../components/layout/SideMenu';
import MainContent from '../components/home/MainContent'; 

const Home = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <MainHeader />
            <div className="flex flex-row flex-grow scrollbar-hide">
                <SideMenu />
                <MainContent />
            </div>
        </div>        
    )
}

export default Home;
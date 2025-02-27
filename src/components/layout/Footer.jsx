import React from 'react';

const menu = {
    Product: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
    Servers: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    Resources: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"],
    Usecases: ["Startups", "Enterprise", "Government", "SaaS", "Marketplaces", "Ecommerce"],
    Social: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"],
    Legal: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"]
};

const Footer = () => {
    return (
        <div className='bg-headerBg h-[5rem] lg:h-[24rem] flex justify-center items-center'>
            <div className='grid grid-cols-6 gap-8 px-4'>
                {Object.entries(menu).map(([category, items]) => (
                    <div className='flex flex-col gap-4'>
                        <h3 className='hidden lg:block text-white opacity-80'>{category}</h3>
                        <ul className='hidden lg:flex flex-col gap-2 lg:gap-x-8 lg:gap-y-4'>
                            {items.map((item) => (
                                <li key={item} className='text-white cursor-pointer'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;

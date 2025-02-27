import React from "react";
import { configurations } from "./priceData";
import { FaArrowDown } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CustomConfig = () => {
    return (
        <div className="bg-headerBg rounded-[24px] p-8 box-border">
            <p className="text-white text-[1.8rem] lg:text-[2.25rem] font-semibold">Your Configurations</p>
            
            <div className="overflow-x-auto p-3 mt-[1rem] border-t border-t-gray-500">
                <table className="z-10 min-w-full table-auto">
                    <thead className="border-b border-tblDe">
                        <tr className="text-white">
                            <td className="py-2 px-6 text-[18px] text-tblTr"><div className="flex items-center gap-x-2">Location<button><FaArrowDown /></button></div></td>
                            <td className="py-2 px-6 text-[18px] text-tblTr"><div className="flex items-center gap-x-2">Processor<button><FaArrowDown /></button></div></td>
                            <td className="py-2 px-6 text-[18px] text-tblTr"><div className="flex items-center gap-x-2">Storage<button><FaArrowDown /></button></div></td>
                            <td className="py-2 px-6 text-[18px] text-tblTr"><div className="flex items-center gap-x-2">RAM<button><FaArrowDown /></button></div></td>
                            <td className="py-2 px-6 text-[18px] text-tblTr"><div className="flex items-center gap-x-2">IPs<button><FaArrowDown /></button></div></td>
                            <td className="py-2 px-6 text-[18px] text-tblTr"><div className="flex items-center gap-x-2">Cost<button><FaArrowDown /></button></div></td>
                            <td className="py-2 px-6 text-[18px] text-center">Actions</td>
                        </tr>
                    </thead>
                    <tbody className="border border-headerBg border-t-tblDe">
                        {configurations.map((config, index) => (
                            <tr 
                                key={index} 
                                className={`text-white hover:bg-gray-800 transition-all duration-200 ${
                                    index === configurations.length - 1 
                                    ? '' 
                                    : 'border-b border-tblDe'
                                }`}
                            >
                                <td className="p-6">{config.Location}</td>
                                <td className="p-6">
                                    {config.Processor}
                                    <br />
                                    <span className="text-tblMo text-sm">{config.spec}</span>
                                </td>
                                <td className="p-6">{config.Storage}</td>
                                <td className="p-6">{config.RAM}</td>
                                <td className="p-6">{config.IPs}</td>
                                <td className="p-6">{config.Cost}</td>
                                <td className="p-6 text-center">
                                    <button>
                                        <IoIosCloseCircleOutline className="text-[1.5rem] text-tblbtn hover:text-white transition-all duration-200"/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomConfig;
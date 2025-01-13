"use client";

import React, {useState} from "react";
import {HeaderProps} from "@/app/components/header/headerProps";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid";
import RiotGamesLogo from "@/app/components/svg/RiotGamesLogo";

export default function HeaderComponent({
    companyLogo,
    companyLogoAlt,
    arcaneLogo,
    arcaneLogoAlt,
    headerLinks
}: React.PropsWithChildren<HeaderProps>){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="flex justify-around items-center animate-fadeIn">
            <a href="https://www.riotgames.com/en" target="_blank" rel="noopener noreferrer">
                <RiotGamesLogo fill="fill-white" hoverFill="hover:fill-riotRed"/>
            </a>
            <img src={arcaneLogo} alt={arcaneLogoAlt} className="h-12 md:h-20 lg:h-32 object-contain"></img>

            <button
                className="md:hidden text-xl p-2 focus:outline-none"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                {isMenuOpen ? <XMarkIcon className="w-5 h-5"/> : <Bars3Icon className="w-5 h-5"/>}
            </button>

            <div className="hidden md:flex flex-wrap justify-end gap-4 md:gap-8">
                {headerLinks.map((headerLink, index) => (
                    <a
                        key={index}
                        href={headerLink.url}
                        className="relative group transition-all duration-200 font-mallySemibold px-3 py-1 text-xs md:text-base hover:bg-gray-500 hover:bg-opacity-35 hover:rounded-md"
                    >
                        {headerLink.label}
                        <span
                            className="absolute left-0 right-0 -bottom-3 h-5 group-hover:bg-transparent"
                        ></span>
                        <span
                            className="absolute transition-all duration-200 left-0 right-0 -bottom-3.5 h-[5px] bg-riotSand opacity-0 group-hover:opacity-100 after: rounded-md"
                        ></span>
                    </a>
                ))}
            </div>


            {isMenuOpen && (
                <div
                    className="absolute top-16 left-0 w-full bg-gray-400 bg-opacity-5 shadow-xs flex flex-col items-center gap-4 py-4 md:hidden z-10">
                    {headerLinks.map((headerLink, index) => (
                        <a
                            key={index}
                            href={headerLink.url}
                            className="font-mally text-sm"
                        >
                            {headerLink.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

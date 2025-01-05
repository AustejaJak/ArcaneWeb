"use client";

import React, {useState} from "react";
import {HeaderProps} from "@/app/components/header/headerProps";

export default function HeaderComponent({
    companyLogo,
    companyLogoAlt,
    arcaneLogo,
    arcaneLogoAlt,
    headerLinks
}: React.PropsWithChildren<HeaderProps>){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="flex justify-around items-center">
            <a href="https://www.riotgames.com/en" target="_blank" rel="noopener noreferrer">
                <img src={companyLogo} alt={companyLogoAlt} className="h-14 w-14 md:h-20 md:w-20 lg:w-32 lg:h-32"/>
            </a>
            <img src={arcaneLogo} alt={arcaneLogoAlt} className="h-12 md:h-20 lg:h-32 object-contain"></img>

            <button
                className="md:hidden text-xl p-2 focus:outline-none"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                {isMenuOpen ? "✖" : "☰"}
            </button>

            <div className="hidden md:flex flex-wrap justify-end gap-4 md:gap-8">
                {headerLinks.map((headerLink, index) => (
                    <a key={index} href={headerLink.url} className="font-sans text-xs md:text-base">
                        {headerLink.label}
                    </a>
                ))}
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 md:hidden z-10">
                    {headerLinks.map((headerLink, index) => (
                        <a
                            key={index}
                            href={headerLink.url}
                            className="font-sans text-sm"
                        >
                            {headerLink.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

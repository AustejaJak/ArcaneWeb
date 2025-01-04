import React from "react";
import {HeaderProps} from "@/app/components/header/headerProps";

export default function HeaderComponent({
    companyLogo,
    companyLogoAlt,
    arcaneLogo,
    arcaneLogoAlt,
    headerLinks
}: React.PropsWithChildren<HeaderProps>){
    return (
        <div className="flex justify-around items-center">
            <a href="https://www.riotgames.com/en" target="_blank" rel="noopener noreferrer">
                <img src={companyLogo} alt={companyLogoAlt} className="h-32 w-32"/>
            </a>
            <img src={arcaneLogo} alt={arcaneLogoAlt} className="h-full"></img>
            <div className="flex gap-16">
                {headerLinks.map((headerLink, index) => (
                    <a key={index} href={headerLink.url} className="text-xl">
                        {headerLink.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

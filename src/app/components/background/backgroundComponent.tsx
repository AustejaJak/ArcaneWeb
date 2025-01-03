import React from 'react';
import {BackgroundProps} from "@/app/components/background/backgroundProps";

export default function BackgroundComponent({
    backgroundImage = "",
    backgroundAlt = "",
    children
}: React.PropsWithChildren<BackgroundProps>) {
    return (
        <div>
            <img src={ backgroundImage } alt={ backgroundAlt } className="h-screen w-screen">
                {children}
            </img>
        </div>
    );
}

import React from 'react';
import {BackgroundProps} from "@/app/components/background/backgroundProps";

export default function BackgroundComponent({
    backgroundImage,
    backgroundAlt,
}: React.PropsWithChildren<BackgroundProps>) {
    return (
        <div>
            <img src={ backgroundImage } alt={ backgroundAlt } className="fixed h-screen w-screen">
            </img>
        </div>
    );
}

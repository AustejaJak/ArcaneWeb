import "./globals.css";
import React from "react";
import BackgroundComponent from "@/app/components/background/backgroundComponent";
import HeaderComponent from "@/app/components/header/headerComponent";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="h-screen flex flex-col">
                <div className="h-full w-full flex flex-col">
                    <BackgroundComponent
                        backgroundImage="/LandingBackgroundBigRes.png"
                        backgroundAlt="Page Background"
                    />

                    <div className="flex flex-col h-full w-full z-10">
                        <HeaderComponent
                            companyLogo="/RiotGamesLogo.png"
                            companyLogoAlt="Company Logo"
                            arcaneLogo="/ArcaneLogo.png"
                            arcaneLogoAlt="Arcane Logo"
                            headerLinks={[
                                { label: "Shop", url: "/shop" }, // Link for shop page
                                { label: "Connect", url: "/connect" } // Link for connect page
                            ]}
                        />
                        <main className="flex-grow flex items-center justify-center">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}

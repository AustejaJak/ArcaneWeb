import "./globals.css";
import React from "react";
import BackgroundComponent from "@/app/components/background/backgroundComponent";
import HeaderComponent from "@/app/components/header/headerComponent";
import FooterComponent from "@/app/components/footer/footerComponent";

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
                                { label: "SHOP", url: "/shop" },
                                { label: "CONNECT", url: "/connect" }
                            ]}
                        />
                        <main className="flex-grow flex items-start justify-center">
                            {children}
                        </main>

                        <FooterComponent/>
                    </div>
                </div>
            </body>
        </html>
    );
}

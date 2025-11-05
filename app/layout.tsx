import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Navbar17} from "./ui/header/Navbar17";
import {Contact14} from "./ui/contact/Contact14";
import {Footer6} from "./ui/footer/Footer6";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-components', 'arial']
})

export const metadata: Metadata = {
    title: "Malíř Béďa – Specialista na dekorační stěrky a malířské práce",
    description: "Jsem malíř, který specializuje se na dekorační stěrky, které dodají interiéru jedinečný vzhled a charakter. Používám pouze osvědčené značky jako San Marco a Primalex, které zaručují kvalitu i dlouhou životnost. Rád Vám poradím s výběrem materiálů a barev, aby výsledek přesně odpovídal Vašim představám.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} antialiased container flex flex-col min-w-screen gap-8 mx-auto px-4 sm:px-6 lg:px-8`}
        >
        <header>
            <Navbar17/>
        </header>
        <main>{children}</main>
        <footer>
            <Contact14/>
            <Footer6/>
        </footer>
        </body>
        </html>
    );
}

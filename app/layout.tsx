import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import Navbar from '@/app/ui/navigation/navbar';

export const metadata: Metadata = {
    title: {
        template: '%s | geedeekaypee',
        default: 'geedeekaypee',
    },
    description: 'The official GDKP website for scheduling, managing raids',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

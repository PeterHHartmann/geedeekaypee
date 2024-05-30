import type { Metadata } from "next";
import { inter } from "@/app/fonts";
import "@/app/globals.css";
import { Navbar } from '@/components/navigation/Navbar';
import { Providers } from '@/app/providers';

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
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased bg-gradient-to-b from-primary-50 to-primary-150 dark:bg-gradient-to-b dark:from-primary-900 dark:to-primary-950 text-primary-950 dark:text-primary-50`}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}

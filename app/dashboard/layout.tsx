import { Providers } from '@/app/dashboard/providers';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    roster: ReactNode;
    raids: ReactNode;
};

export default function DashboardLayout({ children, roster, raids }: Props) {
    return (
        <main className='flex flex-col min-h-screen w-full py-2 px-2 md:px-4 lg:px-6'>
            <Providers>
                {children}
                <div className='relative flex flex-col-reverse xl:flex-row pb-3'>
                    {roster}
                    {raids}
                </div>
            </Providers>
        </main>
    );
}
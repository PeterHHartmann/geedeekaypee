import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    roster: ReactNode;
    raids: ReactNode;
};

export default function DashboardLayout({ children, roster, raids }: Props) {
    return (
        <>
            <main className='flex min-h-screen flex-col items-center px-2 py-1 h-full md:px-6'>
                <div className='flex flex-col align-center bg-primary-900 w-full h-full rounded-xl p-3 md:p-6 py-6 border-1 border-primary-800'>
                    {children}
                    <div className='flex flex-col sm:flex-row gap-1 md:gap-6'>
                        {roster}
                        {raids}
                    </div>
                </div>
            </main>
        </>
    );
}
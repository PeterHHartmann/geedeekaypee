import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RaidEventPublicPageLayout({ children }: Props) {
    return (
        <main className='flex min-h-screen w-full py-2 px-2 md:px-4 lg:px-6'>
            {children}
        </main>
    );
}; 
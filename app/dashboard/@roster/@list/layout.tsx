import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RosterListLayout({ children }: Props) {
    return (
        <>
            <div className='bg-primary-750 py-1 rounded-xl max-h-[400px] md:max-h-[600px] overflow-y-auto'>
                {children}
            </div>
        </>
    );
}
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RosterListLayout({ children }: Props) {
    return (
        <div className='bg-primary-300 dark:bg-primary-800 rounded-md border-1 border-primary-750 overflow-clip'>
            {children}
        </div>
    );
}
import { ResizeWrapper } from '@/components/roster/ResizeWrapper';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    add_character: ReactNode;
};

export default async function RosterLayout({ children }: Props) {
    return (
        <ResizeWrapper>
            <div className='px-3 pb-3'>
                {children}
            </div>
        </ResizeWrapper>
    );
}
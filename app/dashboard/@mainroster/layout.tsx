import { ResizeWrapper } from '@/components/main-roster/ResizeWrapper';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    add_character: ReactNode;
};

export default async function MainRosterLayout({ children }: Props) {
    return (
        <ResizeWrapper>
            <div className='px-3 pb-3'>
                {children}
            </div>
        </ResizeWrapper>
    );
}
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    list: ReactNode;
    insert: ReactNode;
};

export default function RosterLayout({ children, list, insert }: Props) {
    return (
        <>
            <div className='p-3 rounded-xl bg-primary-800 md:w-96 md:max-w-96 justify-center gap-6 border-2 border-primary-600'>
                {children}
                {list}
                {insert}
            </div>
        </>
    );
}
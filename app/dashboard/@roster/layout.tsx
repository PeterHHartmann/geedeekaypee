import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    list: ReactNode;
    add_character: ReactNode;
};

export default function RosterLayout({ children, list, add_character }: Props) {
    return (
        <div className='p-3 rounded-xl bg-primary-150 dark:bg-primary-850 w-full md:w-5/12 xl:w-4/12 max-w-2xl justify-center gap-6 border-1 border-primary-800'>
            {children}
            {add_character}
            {list}
        </div>
    );
}
import { Button } from '@/app/_ui/button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RaidsLayout({ children }: Props) {
    return (
        <div className='p-3 md:p-6 rounded-xl bg-primary-150 dark:bg-primary-850 w-full border-1 border-primary-800'>
            <div className='flex flex-col md:flex-row md:flex-nowrap items-center border-b-1 border-primary-700 mb-4 pb-2'>
                <h2 className='text-2xl text-center w-full'>Raids</h2>
                <Button className='w-full md:w-3/12 my-2 md:my-0'>
                    <PlusCircleIcon className='w-6' />
                    <p>New Raid</p>
                </Button>
            </div>
            {children}
        </div>
    );
}
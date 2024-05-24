import { Button } from '@/app/ui/button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RaidsLayout({ children }: Props) {
    return (
        <>
            <div className='p-6 rounded-xl bg-primary-800 w-full'>
                <div className='flex items-center border-b-2 border-primary-600 mb-4 pb-2'>
                    <h2 className='text-2xl mx-auto w-min'>Raids</h2>
                    <Button>
                        <PlusCircleIcon className='w-6' />
                        <p className='hidden md:block'>New Raid</p>
                    </Button>
                </div>
                {children}
            </div>
        </>
    );
}
'use client';

import { Button } from '@/components/Button';
import { ChevronLeftIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function RaidsNav() {
    const pathname = usePathname();

    return (
        <div className='w-full sm:w-3/12 my-2 sm:my-0'>
            {pathname == '/dashboard'
                ? <Link href={'/dashboard/new_raid'} className='w-full'>
                    <Button className='w-full'>
                        <PlusCircleIcon className='w-6' />
                        <p>New Raid</p>
                    </Button>
                </Link>
                : null
            }
            {pathname == '/dashboard/new_raid'
                ? <Link href='/dashboard'>
                    <Button className='w-6/12 ml-auto'>
                        <ChevronLeftIcon className='w-6' />
                        <p>Back</p>
                    </Button>
                </Link>
                : null
            }
        </div>
    );
}
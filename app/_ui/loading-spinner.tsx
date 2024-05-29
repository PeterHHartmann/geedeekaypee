import { ArrowPathIcon } from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';

type Props = {
    size: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
};

export function LoadingSpinner({ size }: Props) {
    return sizes[size];
}

const sizes: { [key in Props['size']]: ReactNode } = {
    'xsm': <ArrowPathIcon className='w-5 animate-spin' />,
    'sm': <ArrowPathIcon className='w-6 animate-spin' />,
    'md': <ArrowPathIcon className='w-7 animate-spin' />,
    'lg': <ArrowPathIcon className='w-8 animate-spin' />,
    'xl': <ArrowPathIcon className='w-9 animate-spin' />
};
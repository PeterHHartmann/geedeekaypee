import { XCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export function CloseButton({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...rest}
            className={clsx(
                'flex h-[48px] items-center justify-center rounded-md text-sm font-medium hover:bg-primary-300 md:flex-none md:justify-start md:p-2 md:px-3 bg-primary-50',
                className,
            )}
        >
            <XCircleIcon className='w-6 ml-auto text-primary-950' />
        </button>
    );
}
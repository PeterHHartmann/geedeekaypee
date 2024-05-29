import { Button } from '@/app/_ui/button';
import { XCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export function CloseButton({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button
            {...rest}
            className={clsx(
                'p-1 md:p-1 md:px-1 md:flex md:justify-center aspect-square',
                className
            )}
        >
            <XCircleIcon className='w-8' />
        </Button>
    );
}
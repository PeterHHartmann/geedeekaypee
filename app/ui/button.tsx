import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium bg-primary-950 dark:bg-primary-50 text-primary-50 dark:text-primary-950 hover:bg-primary-700 dark:hover:bg-primary-300 hover:text-primary-50 dark:hover:text-primary-50 md:flex-none md:justify-start md:p-2 md:px-3 border-1 border-primary-900',
                className,
            )}
        >
            {children}
        </button>
    );
}

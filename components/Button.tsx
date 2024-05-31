import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium shadow-lg bg-indigo-600 text-white dark:text-white hover:bg-indigo-500 dark:hover:bg-primary-50 hover:text-white dark:hover:text-slate-950 md:p-2 md:px-3',
                className,
            )}
        >
            {children}
        </button>
    );
}

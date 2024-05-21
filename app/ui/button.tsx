import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-primary-300 hover:text-primary-950 md:flex-none md:justify-start md:p-2 md:px-3 bg-primary-50 text-primary-950',
                className,
            )}
        >
            {children}
        </button>
    );
}

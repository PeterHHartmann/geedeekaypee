import { type PropsWithChildren, type ReactNode } from 'react';

type Props = PropsWithChildren & React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: ReactNode;
};

export function SelectField({ children, label, ...rest }: Props) {
    return (
        <div className='w-full'>
            <label className="flex gap-1 mb-1 font-semibold" htmlFor={rest.id}>
                {label}
            </label>
            <select
                {...rest}
                name={rest.id}
                className='w-full rounded-md border-1 border-slate-950 dark:border-slate-600 py-[9px] px-5 text-sm outline-2 placeholder:text-slate-500'
            >
                {children}
            </select>
        </div>
    );
}
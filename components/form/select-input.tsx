import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren & React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    name: string;
};

export function SelectInput({ children, name, label, ...rest }: Props) {
    return (
        <>
            <label className="mb-3 mt-5 block font-semibold" htmlFor={name}>
                {label}
            </label>
            <select
                {...rest}
                name={name}
                className='w-full rounded-md border-1 border-primary-950 dark:border-primary-600 py-[9px] px-5 text-sm outline-2 placeholder:text-gray-500'
            >
                {children}
            </select>
        </>
    );
}
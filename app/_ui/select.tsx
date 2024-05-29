import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren & React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    name: string;
};

export function Select({ children, name, label, ...rest }: Props) {

    return (
        <>
            <label className="mb-3 mt-5 block font-semibold" htmlFor={name}>
                {label}
            </label>
            <select
                {...rest}
                name={name}
                className='block w-full rounded-md border-1 border-primary-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
            >
                {children}
            </select>
        </>
    );
}
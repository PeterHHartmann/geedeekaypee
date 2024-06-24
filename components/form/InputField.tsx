import type React from 'react';
import type { ReactNode } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: ReactNode;
};

export function InputField({ label, ...rest }: InputProps) {
    return (
        <div className='w-full'>
            <label className="flex gap-1 mb-1 font-semibold" htmlFor={rest.id}>
                {label}
            </label>
            <div className="relative">
                <input
                    {...rest}
                    name={rest.id}
                    className="w-full rounded-md border-1 border-slate-950 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                />
            </div>
        </div>
    );
}
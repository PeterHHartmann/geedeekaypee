import type { HTMLInputTypeAttribute } from 'react';

type InputProps = {
    label: string;
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
};

export function InputField({ label, name, type, placeholder }: InputProps) {
    return (
        <div className='w-full'>
            <label className="mb-3 mt-5 block font-semibold" htmlFor={name}>
                {label}
            </label>
            <div className="relative">
                <input
                    className="peer block w-full rounded-md border-1 border-slate-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-500"
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required
                />
            </div>
        </div>
    );
}
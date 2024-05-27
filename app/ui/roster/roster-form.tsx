'use client';
import { insertCharacter } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';
import { CloseButton } from '@/app/ui/button-close';
import { ExclamationCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, type HTMLInputTypeAttribute, type ReactNode } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

type Props = {
    children: ReactNode;
};

export function InsertCharacterForm({ children }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(insertCharacter, { success: false });

    useEffect(() => {
        if (state.success) {
            setIsOpen(false);
        }
    }, [state]);

    return (
        <>
            <Button className='w-full' onClick={() => setIsOpen(true)}>
                <PlusCircleIcon className='w-6 ml-auto' />
                <p className='mr-auto'>Add character</p>
            </Button>
            {isOpen
                ? <div className='fixed z-10 w-full h-full backdrop-blur-sm inset-0' onClick={() => setIsOpen(false)}>
                    <div className='bg-primary-800 border-1 border-primary-700 mx-auto mt-[5%] md:w-9/12 xl:w-4/12 rounded-xl px-4 py-4 md:px-8 pb-12' onClick={(e) => e.stopPropagation()}>
                        <div className='flex justify-between border-b-2 border-primary-600 pb-2 md:h-[3.5rem] items-center'>
                            <h1 className='text-2xl font-medium'>Add a new character to roster</h1>
                            <CloseButton onClick={() => setIsOpen(false)} />
                        </div>
                        <form action={formAction} className='flex flex-wrap gap-3 mx-auto'>
                            <Input type={'text'} name='name' label='Character Name' placeholder='Enter the name of the character' />
                            {children}
                            <div
                                className="flex h-8 items-end space-x-1"
                                aria-live="polite"
                                aria-atomic="true"
                            >
                                {(!state.success && state.messages) ? (
                                    state.messages.map((message) => (
                                        <>
                                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                            <p className="text-sm text-red-500">{message}</p>
                                        </>
                                    ))
                                ) : null}
                            </div>
                            <div className='w-full'>
                                <SaveButton />
                            </div>
                        </form>
                    </div>
                </div >
                : null
            }
        </>
    );
}

type InputProps = {
    label: string;
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
};

function Input({ label, name, type, placeholder }: InputProps) {
    return (
        <div className='w-full'>
            <label className="mb-3 mt-5 block font-semibold" htmlFor={name}>
                {label}
            </label>
            <div className="relative">
                <input
                    className="peer block w-full rounded-md border-1 border-primary-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-primary-950"
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

function SaveButton() {
    const { pending } = useFormStatus();
    return (
        <Button className="mt-4 w-full bg-primary-950 hover:text-primary-800 md:w-6/12 mx-auto" aria-disabled={pending} disabled={pending}>
            <PlusCircleIcon className="h-5 w-5 text-primary-100 ml-auto" />
            <p className='text-primary-100 mr-auto '>Add</p>
        </Button>
    );
}
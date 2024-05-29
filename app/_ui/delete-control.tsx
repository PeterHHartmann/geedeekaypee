'use client';
import { deleteCharacter } from '@/app/_lib/actions';
import type { RosterCharacter } from '@/app/_lib/definitions';
import { FormErrors } from '@/app/_ui/form-error';
import { Modal } from '@/app/_ui/modal';
import { SubmitButton } from '@/app/_ui/submit-button';
import { TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    character: RosterCharacter;
};

export function DeleteControl({ character }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(deleteCharacter, { success: false });

    return (
        <div>
            <div>
                <Modal
                    headerText='Delete Character'
                    subHeaderText='Are you sure you want to delete this character from your roster?'
                    isOpen={isOpen} setIsOpen={setIsOpen}
                    className='md:w-fit lg:w-3/12'>
                    <form action={formAction}>
                        <input type="hidden" name="character_id" value={character.id} />
                        <FormErrors result={state} />
                        <SubmitButton>
                            <TrashIcon className='w-6' />
                            <p className='text-lg'>Confirm</p>
                        </SubmitButton>
                    </form>
                </Modal>
                <button onClick={() => setIsOpen(!isOpen)} className={clsx(
                    'flex justify-between items-center p-1 w-auto h-auto aspect-square rounded-full hover:bg-primary-50 hover:text-primary-950',
                    { 'bg-primary-50 text-primary-950': isOpen == true }
                )}>
                    <TrashIcon className='w-6' />
                </button>
            </div>
        </div>
    );
}
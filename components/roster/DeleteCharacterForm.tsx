'use client';
import { deleteCharacter } from '@/lib/actions';
import type { RosterCharacter } from '@/lib/definitions';
import { FormErrors } from '@/components/form/form-error';
import { Modal } from '@/components/Modal';
import { SubmitButton } from '@/components/form/submit-button';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { ToolbarButton } from '@/components/SlidingToolbarLeft';

type Props = {
    character: RosterCharacter;
};

export function DeleteCharacterForm({ character }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(deleteCharacter, { success: false });

    return (
        <>
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
            <ToolbarButton onClick={() => setIsOpen(!isOpen)}>
                <TrashIcon className='w-5' />
            </ToolbarButton>
        </>
    );
}
'use client';

import { insertCharacter } from '@/app/_lib/actions';
import type { CharacterClass, CharacterRole } from '@/app/_lib/definitions';
import { Button } from '@/app/_ui/button';
import { FormErrors } from '@/app/_ui/form/form-error';
import { Modal } from '@/app/_ui/modal';
import { SelectInput } from '@/app/_ui/form/select-input';
import { SubmitButton } from '@/app/_ui/form/submit-button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    all_character_classes: CharacterClass[];
    all_roles_for_classes: {
        [class_id: string]: [{
            role_id: string;
            role_name: "Tank" | "Healer" | "Dps";
        }];
    };
};

export function InsertCharacterForm({ all_character_classes, all_roles_for_classes }: Props) {
    const initialSelect = all_character_classes[0].id;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(insertCharacter, { success: false });

    const [roles, setRoles] =
        useState<[{ role_id: CharacterRole['id'], role_name: CharacterRole['name']; }]>(all_roles_for_classes[initialSelect]);

    function handleClassSelectChanged(e: ChangeEvent<HTMLSelectElement>) {
        const class_id = e.target.value;
        const newRoles = all_roles_for_classes[class_id];
        setRoles(newRoles);
    }

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
            <Modal headerText='Add a character to roster' isOpen={isOpen} setIsOpen={setIsOpen} >
                <form action={formAction} className='flex flex-wrap gap-3 mx-auto sm:w-[600px]'>
                    <div className='w-full'>
                        <label className="mb-3 mt-5 block font-semibold" htmlFor='name'>Character Name</label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border-1 border-primary-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                type='text'
                                name='name'
                                placeholder='Enter the name of the character'
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <SelectInput name='class_id' label='Class' required onChange={handleClassSelectChanged}>
                            {all_character_classes.map((character_class, index) => (
                                <option key={`class-selection-option-${character_class.name}`} value={character_class.id} defaultValue={initialSelect}>{character_class.name}</option>
                            ))}
                        </SelectInput>
                    </div>
                    <div className='w-full'>
                        <SelectInput name='role_id' label='Role' required>
                            {roles.map((role, index) => (
                                <option key={`role-selection-option-${role.role_id}`} value={role.role_id}>{`${role.role_name}`}</option>
                            ))}
                        </SelectInput>
                    </div>
                    <FormErrors result={state} />
                    <SubmitButton>
                        <PlusCircleIcon className="h-5 w-5" />
                        <p className=''>Add</p>
                    </SubmitButton>
                </form>
            </Modal>
        </>
    );
}


'use client';
import { Modal } from '@/components/Modal';
import { ToolbarButton } from '@/components/SlidingToolbarLeft';
import { FormErrors } from '@/components/form/form-error';
import { SelectInput } from '@/components/form/select-input';
import { SubmitButton } from '@/components/form/submit-button';
import { updateCharacter } from '@/lib/actions';
import type { CharacterClass, CharacterClassRoleOptions, CharacterRoleOption, RosterCharacter } from '@/lib/definitions';
import { PencilSquareIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    character: RosterCharacter;
    characterClasses: CharacterClass[];
    characterClassRolesOptions: CharacterClassRoleOptions;
};

export function EditCharacterForm({ character, characterClasses, characterClassRolesOptions }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(updateCharacter, { success: false });

    const [roles, setRoles] = useState<CharacterRoleOption[]>(characterClassRolesOptions[character.class_id]);

    function handleClassSelectChanged(e: ChangeEvent<HTMLSelectElement>) {
        const class_id = e.target.value;
        const newRoles = characterClassRolesOptions[class_id];
        setRoles(newRoles);
    }

    useEffect(() => {
        if (state.success) {
            setIsOpen(false);
        }
    }, [state]);

    return (
        <>
            <Modal
                headerText='Edit Character'
                isOpen={isOpen} setIsOpen={setIsOpen}
            >
                <form action={formAction} className='flex flex-wrap gap-3 mx-auto sm:w-[600px]'>
                    <input type="hidden" name="character_id" value={character.id} />
                    <div className='w-full'>
                        <label className="mb-3 mt-5 block font-semibold" htmlFor='name'>Character Name</label>
                        <div className="relative">
                            <input
                                className="w-full rounded-md border-1 border-slate-500 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                                type='text'
                                name='name'
                                placeholder='Enter the name of the character'
                                defaultValue={character.name}
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <SelectInput name='class_id' label='Class' defaultValue={character.class_id} onChange={handleClassSelectChanged} required>
                            {characterClasses.map((character_class, index) => (
                                <option key={`class-selection-option-${character_class.id}`} value={character_class.id}>{character_class.name}</option>
                            ))}
                        </SelectInput>
                    </div>
                    <div className='w-full'>
                        <SelectInput name='role_id' label='Role' defaultValue={character.role_id} required>
                            {roles.map((role, index) => (
                                <option key={`role-selection-option-${role.role_id}`} value={role.role_id}>{`${role.role_name}`}</option>
                            ))}
                        </SelectInput>
                    </div>
                    <FormErrors result={state} />
                    <SubmitButton>
                        <PlusCircleIcon className="h-5 w-5" />
                        <p>Add</p>
                    </SubmitButton>
                </form>
            </Modal>
            <ToolbarButton onClick={() => setIsOpen(!isOpen)}>
                <PencilSquareIcon className='w-6 ' />
            </ToolbarButton>
        </>
    );
}
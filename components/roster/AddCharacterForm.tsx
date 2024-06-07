'use client';

import { insertCharacter } from '@/lib/actions';
import type { CharClass, CharRoleOptionsForClasses, CharRoleOption, CharSpec } from '@/lib/definitions';
import { Button } from '@/components/Button';
import { FormErrors } from '@/components/form/form-error';
import { Modal } from '@/components/Modal';
import { SelectInput } from '@/components/form/select-input';
import { SubmitButton } from '@/components/form/submit-button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    charClasses: CharClass[];
    charSpecs: CharSpec[];
    charRoles: CharRoleOptionsForClasses;
};

export function AddCharacterForm({ charClasses, charRoles, charSpecs }: Props) {
    const defaultClassId = charClasses[0].id;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(insertCharacter, { success: false });

    const [roleOptions, setRoleOptions] = useState<CharRoleOption[]>(charRoles[defaultClassId]);
    const [specOptions, setSpecOptions] = useState<CharSpec[]>(charSpecs.filter((spec) => spec.class_id == charClasses[0].id));

    function handleClassSelectChanged(e: ChangeEvent<HTMLSelectElement>) {
        const class_id = e.target.value;

        const newSpecOptions = charSpecs.filter((spec) => spec.class_id == class_id);
        setSpecOptions(newSpecOptions);

        const newRoleOptions = charRoles[class_id];
        setRoleOptions(newRoleOptions);
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
                                className="w-full rounded-md border-1 border-slate-500 py-[9px] pl-5 text-sm outline-2 placeholder:text-slate-500"
                                type='text'
                                name='name'
                                placeholder='Enter the name of the character'
                                required
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <SelectInput name='class_id' label='Class' required onChange={handleClassSelectChanged}>
                            {charClasses.map((character_class, index) => (
                                <option key={`class-selection-option-${character_class.name}`} value={character_class.id} defaultValue={defaultClassId}>{character_class.name}</option>
                            ))}
                        </SelectInput>
                    </div>
                    <div className='w-full'>
                        <SelectInput name='spec_id' label='Talent Specialization' required>
                            {specOptions.map((specOption, index) => (
                                <option key={`spec-selection-option-${specOption.id}`} value={specOption.id}>{`${specOption.name}`}</option>
                            ))}
                        </SelectInput>
                    </div>
                    <div className='w-full'>
                        <SelectInput name='role_id' label='Role' required>
                            {roleOptions.map((role, index) => (
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
        </>
    );
}


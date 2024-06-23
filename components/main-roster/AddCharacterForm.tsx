'use client';

import { insertMainRosterChar } from '@/lib/actions';
import type { CharClass, CharRoleOptionsForClasses, CharRoleOption, ClassTalentSpec } from '@/lib/definitions';
import { Button } from '@/components/Button';
import { FormErrors } from '@/components/form/FormErrors';
import { Modal } from '@/components/Modal';
import { SelectField } from '@/components/form/SelectField';
import { SubmitButton } from '@/components/form/submit-button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useFormState } from 'react-dom';
import { InputField } from '@/components/form/InputField';

type Props = {
    charClasses: CharClass[];
    charSpecs: ClassTalentSpec[];
    charRoles: CharRoleOptionsForClasses;
};

export function AddCharacterForm({ charClasses, charRoles, charSpecs }: Props) {
    const defaultClassId = charClasses[0].id;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(insertMainRosterChar, { success: false });

    const [roleOptions, setRoleOptions] = useState<CharRoleOption[]>(charRoles[defaultClassId]);
    const [specOptions, setSpecOptions] = useState<ClassTalentSpec[]>(charSpecs.filter((spec) => spec.class_id == charClasses[0].id));

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
            <Modal headerText='Add character' subHeaderText='Add a character to the Main Roster' isOpen={isOpen} setIsOpen={setIsOpen} >
                <form action={formAction} className='flex flex-wrap gap-3 mx-auto sm:w-[600px]'>
                    <InputField
                        id='name'
                        type='text'
                        placeholder='Enter the name of the character'
                        required
                        label='Name'
                    />
                    <SelectField
                        name='class_id'
                        label='Class'
                        required
                        onChange={handleClassSelectChanged}
                    >
                        {charClasses.map((character_class, index) => (
                            <option key={`class-selection-option-${character_class.name}`} value={character_class.id} defaultValue={defaultClassId}>{character_class.name}</option>
                        ))}
                    </SelectField>
                    <SelectField
                        name='spec_id'
                        label='Talent Specialization'
                        required
                    >
                        {specOptions.map((specOption, index) => (
                            <option key={`spec-selection-option-${specOption.id}`} value={specOption.id}>{`${specOption.name}`}</option>
                        ))}
                    </SelectField>
                    <SelectField
                        name='role_id'
                        label='Role'
                        required
                    >
                        {roleOptions.map((role, index) => (
                            <option key={`role-selection-option-${role.role_id}`} value={role.role_id}>{`${role.role_name}`}</option>
                        ))}
                    </SelectField>
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


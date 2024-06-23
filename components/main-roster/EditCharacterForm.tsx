'use client';
import { Modal } from '@/components/Modal';
import { ToolbarButton } from '@/components/SlidingToolbarLeft';
import { FormErrors } from '@/components/form/FormErrors';
import { InputField } from '@/components/form/InputField';
import { SelectField } from '@/components/form/SelectField';
import { SubmitButton } from '@/components/form/submit-button';
import { updateMainRosterChar } from '@/lib/actions';
import type { CharClass, CharRoleOptionsForClasses, CharRoleOption, ClassTalentSpec, RosterCharacter } from '@/lib/definitions';
import { PencilSquareIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useFormState } from 'react-dom';

type Props = {
    character: RosterCharacter;
    charClasses: CharClass[];
    charSpecs: ClassTalentSpec[];
    charRoles: CharRoleOptionsForClasses;
};

export function EditCharacterForm({ character, charClasses, charRoles, charSpecs }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [state, formAction] = useFormState(updateMainRosterChar, { success: false });

    const [roleOptions, setRoleOptions] = useState<CharRoleOption[]>(charRoles[character.class_id]);
    const [specOptions, setSpecOptions] = useState<ClassTalentSpec[]>(charSpecs.filter((spec) => spec.class_id == character.class_id));

    function handleClassSelectChanged(e: ChangeEvent<HTMLSelectElement>) {
        const class_id = e.target.value;

        const newSpecOptions = charSpecs.filter((spec) => spec.class_id == class_id);
        setSpecOptions(newSpecOptions);


        const newRoles = charRoles[class_id];
        setRoleOptions(newRoles);
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
                subHeaderText={`Editing character: ${character.name} in the Main Roster`}
                isOpen={isOpen} setIsOpen={setIsOpen}
            >
                <form action={formAction} className='flex flex-wrap gap-3 mx-auto sm:w-[600px]'>
                    <input type="hidden" name="character_id" value={character.id} />
                    <InputField
                        id='name'
                        type='text'
                        placeholder='Enter the name of the character'
                        defaultValue={character.name}
                        required
                        label='Name'
                    />
                    <SelectField
                        name='class_id'
                        label='Class'
                        defaultValue={character.class_id}
                        onChange={handleClassSelectChanged}
                        required
                    >
                        {charClasses.map((character_class, index) => (
                            <option key={`class-selection-option-${character_class.id}`} value={character_class.id}>{character_class.name}</option>
                        ))}
                    </SelectField>
                    <SelectField
                        name='spec_id'
                        label='Talent Specialization'
                        defaultValue={character.spec_id}
                        required
                    >
                        {specOptions.map((specOption) => (
                            <option key={`spec-selection-option-${specOption.id}`} value={specOption.id}>{`${specOption.name}`}</option>
                        ))}
                    </SelectField>
                    <SelectField
                        name='role_id'
                        label='Role'
                        defaultValue={character.role_id}
                        required
                    >
                        {roleOptions.map((role) => (
                            <option key={`role-selection-option-${role.role_id}`} value={role.role_id}>{`${role.role_name}`}</option>
                        ))}
                    </SelectField>
                    <FormErrors result={state} />
                    <SubmitButton>
                        <PlusCircleIcon className="h-5 w-5" />
                        <p>Save</p>
                    </SubmitButton>
                </form>
            </Modal>
            <ToolbarButton onClick={() => setIsOpen(!isOpen)}>
                <PencilSquareIcon className='w-5 ' />
            </ToolbarButton>
        </>
    );
}
'use client';
import { ToolbarButton } from '@/components/SlidingToolbarLeft';
import type { RosterCharacter } from '@/lib/definitions';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

type Props = {
    character: RosterCharacter;
};

export function EditCharacterForm({ character }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <ToolbarButton onClick={() => setIsOpen(!isOpen)}>
                <PencilSquareIcon className='w-6 ' />
            </ToolbarButton>
        </>
    );
}
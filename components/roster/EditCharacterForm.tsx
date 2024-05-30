'use client';
import { ToolbarButton } from '@/components/SlidingToolbarLeft';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export function EditCharacterForm() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <ToolbarButton onClick={() => setIsOpen(!isOpen)}>
                <PencilSquareIcon className='w-6 ' />
            </ToolbarButton>
        </>
    );
}
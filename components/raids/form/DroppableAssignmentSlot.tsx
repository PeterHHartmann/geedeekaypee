import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import { ButtonRemoveCharacter } from '@/components/raids/form/ButtonRemoveCharacter';
import { CharacterRowDraggable } from '@/components/raids/form/CharacterRowDraggable';
import { CLASS_BG_COLOR } from '@/lib/constants';
import type { RosterCharacter } from '@/lib/definitions';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';

type Props = {
    id: string,
    groupIndex: number,
    rowIndex: number,
    character: RosterCharacter | null;
    removeHandler: (index: number) => void;
};

export function DroppableAssignmentSlot({
    id,
    groupIndex,
    rowIndex,
    character,
    removeHandler
}: Props) {

    const { isOver, setNodeRef } = useDroppable({
        id: `${id}_droppable`,
        data: {
            index: rowIndex
        }
    });

    return (
        <div
            ref={setNodeRef}
            className={clsx(
                'flex w-full h-[40px] overflow-clip justify-center items-center',
                {
                    'bg-transparent': isOver == false,
                    'bg-slate-600': isOver == true
                }
            )}
        >
            {character
                ?
                <div className={`flex justify-center items-center w-full h-full ${CLASS_BG_COLOR[character.class_name]}`}>
                    <input
                        type='hidden'
                        name={`raidassignment_${groupIndex}_${rowIndex}`}
                        value={character.id || undefined}
                    />
                    <CharacterRowDraggable character={character} id={`${id}_draggable`} index={rowIndex}>
                        <CharacterInfo character={character} />
                    </CharacterRowDraggable>
                    <ButtonRemoveCharacter onClickHandler={() => removeHandler(rowIndex)} />
                </div>
                : null
            }
        </div>
    );
}
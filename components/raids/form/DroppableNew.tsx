import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import { CharacterRowDraggable } from '@/components/raids/form/CharacterRowDraggable';
import type { RaidEventAssignment, RaidTemplateAssignment, RosterCharacter } from '@/lib/definitions';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { useEffect, type Dispatch, type SetStateAction } from 'react';


type Props = {
    id: string,
    groupIndex: number,
    rowIndex: number,
    requirements: RaidTemplateAssignment[];
    currentSlot: RosterCharacter | null;
    allAssignedSlots: (RosterCharacter | null)[][];
    setAllAssignedSlots: Dispatch<SetStateAction<(RosterCharacter | null)[][] | undefined>>;
    raidRoster: (RosterCharacter | null)[];
    savedAssignments?: RaidEventAssignment[];
};

export function DroppableNew({
    id,
    groupIndex,
    rowIndex,
    requirements,
    currentSlot,
    allAssignedSlots,
    setAllAssignedSlots,
    raidRoster,
    savedAssignments
}: Props) {

    const { isOver, setNodeRef } = useDroppable({
        id: `${id}_droppable`,
        data: {
            index: rowIndex
        }
    });

    useEffect(() => {
        if (currentSlot == null) {
            const allAssignedCopy = allAssignedSlots.slice(0);
            const newChar = raidRoster.find((rosterChar) => {
                if (rosterChar == null) {
                    return false;
                }
                if (allAssignedCopy[groupIndex].includes(rosterChar)) {
                    return false;
                }
                const meetsReqs = requirements.find((require) => {
                    const class_matches = !require.class_id || (rosterChar.class_id == require.class_id);
                    const role_matches = !require.role_id || (rosterChar.role_id == require.role_id);
                    const spec_matches = !require.spec_id || (rosterChar.spec_id == require.spec_id);
                    return class_matches && role_matches && spec_matches;
                });
                return meetsReqs ? true : false;
            });
            if (newChar) {
                allAssignedCopy[groupIndex][rowIndex] = newChar;
                setAllAssignedSlots(allAssignedCopy);
            }
        }
        if (currentSlot != null) {
            const raidRosterCopy = raidRoster.slice(0);
            if (!raidRosterCopy.includes(currentSlot)) {
                const allAssignedCopy = allAssignedSlots.slice(0);
                allAssignedCopy[groupIndex][rowIndex] = null;
                setAllAssignedSlots(allAssignedCopy);
            }
        }

    }, [currentSlot, allAssignedSlots, groupIndex, requirements, raidRoster, rowIndex, setAllAssignedSlots, savedAssignments]);

    useEffect(() => {
        if (savedAssignments) {
            const foundAssignedForThisSlot = savedAssignments.find((assignment) => assignment.assignment_group == groupIndex && assignment.position == rowIndex);
            if (groupIndex == 1) {
                console.log(foundAssignedForThisSlot);
            }

            if (foundAssignedForThisSlot) {
                const foundRosterChar = raidRoster.find((rosterChar) => rosterChar && rosterChar.id == foundAssignedForThisSlot.raid_roster_id);
                if (foundRosterChar) {
                    const allAssignedCopy = allAssignedSlots.slice(0);
                    allAssignedCopy[groupIndex][rowIndex] = foundRosterChar;
                    if (allAssignedCopy.toString() !== allAssignedSlots.toString()) {
                        setAllAssignedSlots(allAssignedCopy);
                    }
                }
            }
        }
    }, [allAssignedSlots, groupIndex, raidRoster, rowIndex, savedAssignments, setAllAssignedSlots]);

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
            {currentSlot
                ?
                <>
                    <input
                        type='hidden'
                        name={`raidassignment_${groupIndex}_${rowIndex}`}
                        value={currentSlot.id || undefined}
                    />
                    <CharacterRowDraggable character={currentSlot} id={`${id}_draggable`} index={rowIndex}>
                        <CharacterInfo character={currentSlot} />
                    </CharacterRowDraggable>
                </>
                : null
            }
        </div>
    );
}
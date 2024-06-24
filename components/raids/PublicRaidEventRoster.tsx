'use server';

import { CharacterInfo } from '@/components/main-roster/CharacterInfo';
import type { RosterCharacter } from '@/lib/definitions';
import { UserGroupIcon } from '@heroicons/react/24/outline';

type Props = {
    raidRoster: (RosterCharacter | null)[];
};

export async function PublicRaidEventRoster({
    raidRoster
}: Props) {

    const columnSize = 5;
    const raidRosterTable: (RosterCharacter | null)[][] = Array.from(
        { length: Math.ceil(raidRoster.length / columnSize) },
        (_, index) => raidRoster.slice(index * columnSize, (index + 1) * columnSize)
    );

    return (
        <div className='grid grid-flow-row gap-2 w-full h-fit rounded-md overflow-clip bg-slate-100 dark:bg-slate-800/75 shadow-md'>
            <header className='flex gap-1 justify-center p-3 bg-slate-200/75 dark:bg-slate-700/50 shadow-md'>
                <UserGroupIcon className='w-5' />
                <h2 className='text-lg text-center'>Assignments</h2>
            </header>
            <ul className='grid grid-flow-col rounded-md overflow-clip divide-x divide-solid divide-slate-600 shadow-md'>
                {raidRosterTable.map((col, colIndex) => (
                    <div
                        className='grid grid-flow-row min-w-44 divide-y divide-solid divide-slate-700'
                        key={`raidRosterCol-${colIndex}`}
                    >
                        <div className='w-[15%] h-[40px] sm:w-full bg-slate-200 dark:bg-slate-700/50 p-1'>
                            <h3 className='text-center flex justify-center items-center'>
                                <span className='hidden sm:block'>{`Group ${colIndex + 1}`}</span>
                                <span className='block sm:hidden'>{`G${colIndex + 1}`}</span>
                            </h3>
                        </div>
                        <div className='w-full bg-slate-200 divide-y divide-solid divide-slate-700 dark:bg-slate-800/50 dark:divide-slate-600'>
                            {col.map((character, rowIndex) => (
                                <li className='list-none h-[40px] overflow-clip' key={`raidRosterRow-${rowIndex}`}>
                                    {character ?
                                        <CharacterInfo character={character} />
                                        : null
                                    }
                                </li>
                            ))}
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}
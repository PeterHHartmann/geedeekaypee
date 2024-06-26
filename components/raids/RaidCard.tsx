import { SlidingToolbarLeft } from '@/components/SlidingToolbarLeft';
import { RaidCoverImage } from '@/components/raids/RaidCoverImage';
import { RaidEventDeleteForm } from '@/components/raids/form/RaidEventDeleteForm';
import { fetchRaidTemplateSingle } from '@/lib/actions';
import type { RaidEvent } from '@/lib/definitions';
import { formatDateForDisplay, formatTimeForDisplay } from '@/lib/utils';
import { CalendarIcon, ClockIcon, EyeIcon, EyeSlashIcon, LinkIcon, MapPinIcon, TrashIcon, WrenchIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
    raidEvent: RaidEvent;
};

export async function RaidCard({ raidEvent }: Props) {
    const raidTemplate = await fetchRaidTemplateSingle(raidEvent.raid_template_id);

    return (
        <article className={`${RaidCardSkeleton} text-white`}>
            <RaidCoverImage raidName={raidTemplate.raid_variant_name} />
            <div className='w-full h-full rounded-xl shadow-inner shadow-slate-700/50 bg-slate-900/60'>
                <div className='flex flex-wrap w-full rounded-t-xl'>
                    <div className='w-full px-4 pt-4 pb-2 border-b-1 border-slate-700'>
                        <header className='flex justify-between items-center gap-2'>
                            <p className='flex font-semibold'>{raidEvent.title}</p>
                            <div className='flex gap-2 items-center'>
                                {raidEvent.is_public
                                    ? <Link href={`/raid/${raidEvent.id}`} className='flex gap-2 hover:underline'>
                                        <LinkIcon className='w-4' />
                                    </Link>
                                    : null
                                }
                                <SlidingToolbarLeft className='text-slate-50'>
                                    <RaidEventDeleteForm raidEvent={raidEvent}>
                                        <div className='rounded-full hover:bg-white hover:text-slate-950 p-1'>
                                            <TrashIcon className='w-5' />
                                        </div>
                                    </RaidEventDeleteForm>

                                    <Link href={`/dashboard/raid/${raidEvent.id}`} className='text-white ml-auto rounded-full hover:bg-white hover:text-slate-950 p-1'>
                                        <WrenchIcon className='w-5' />
                                    </Link>
                                </SlidingToolbarLeft>
                            </div>
                        </header>
                    </div>
                    <div className='grid grid-flow-row gap-1 py-1'>
                        <CardRow>
                            <MapPinIcon className='w-4' />
                            <p>{raidTemplate.name}</p>
                        </CardRow>
                        <CardRow>
                            <CalendarIcon className='w-4' />
                            <p>{formatDateForDisplay(raidEvent.date)}</p>
                        </CardRow>
                        <CardRow>
                            <ClockIcon className='w-4' />
                            <p>{formatTimeForDisplay(raidEvent.time)}</p>
                            <span className='text-sm'> Server Time</span>
                        </CardRow>
                        <CardRow>
                            {raidEvent.is_public
                                ? <>
                                    <EyeIcon className='w-5' />
                                    <p>Public</p>
                                </>
                                : <>
                                    <EyeSlashIcon className='w-5' />
                                    <p>Draft</p>
                                </>
                            }
                        </CardRow>
                    </div>
                </div>
            </div>
        </article>
    );
}

export const RaidCardSkeleton = 'flex relative z-0 h-[300px] border-1 border-slate-600 bg-slate-700 rounded-xl overflow-clip shadow-md';

function CardRow({ children }: { children: ReactNode; }) {
    return (
        <span className='flex gap-1 px-4 py-1 text-sm'>
            {children}
        </span>
    );
}
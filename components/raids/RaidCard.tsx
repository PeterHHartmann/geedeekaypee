import { fetchRaidTemplateSingle } from '@/lib/actions';
import { RAID_COVER_IMAGES } from '@/lib/constants';
import type { Raid, RaidEvent } from '@/lib/definitions';
import { CalendarIcon, ClockIcon, EyeIcon, EyeSlashIcon, LinkIcon, MapPinIcon, WrenchIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
    raidEvent: RaidEvent;
};

export async function RaidCard({ raidEvent }: Props) {
    const raidTemplate = await fetchRaidTemplateSingle(raidEvent.template_id);

    function formatTimeStr(timeStr: string) {
        const parts = timeStr.split(':');
        const newTimeString = parts[0] + ':' + parts[1];
        return newTimeString;
    }

    function formatDate(date: string) {
        return new Date(date).toDateString();
    }

    return (
        <article className={`${RaidCardSkeleton} text-white`}>
            <RaidCoverImage raidName={raidTemplate.raid_name} />
            <div className='w-full h-full rounded-xl shadow-inner shadow-slate-700/50 bg-slate-900/60'>
                <div className='flex flex-wrap w-full rounded-t-xl'>
                    <div className='w-full px-4 pt-4 pb-2 border-b-1 border-slate-700'>
                        <header className='flex justify-between items-center gap-2'>
                            <p className='flex font-semibold'>{raidEvent.title}</p>
                            <div className='flex gap-1 text-sm'>
                                {raidEvent.is_public
                                    ? <>
                                        <EyeIcon className='w-4' />
                                        <p>Public</p>
                                    </>
                                    : <>
                                        <EyeSlashIcon className='w-4' />
                                        <p>Draft</p>
                                    </>
                                }
                            </div>
                            <div className='flex gap-2 items-center'>
                                {raidEvent.is_public
                                    ? <Link href={`/dashboard`} className='flex gap-2 hover:underline'>
                                        <LinkIcon className='w-4' />
                                    </Link>
                                    : null
                                }
                                <Link href={`/dashboard/raid/${raidEvent.id}`} className='text-white ml-auto rounded-full hover:bg-white hover:text-slate-950 p-2'>
                                    <WrenchIcon className='w-4' />
                                </Link>
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
                            <p>{formatDate(raidEvent.date)}</p>
                        </CardRow>
                        <CardRow>
                            <ClockIcon className='w-4' />
                            <p>{formatTimeStr(raidEvent.time)}</p>
                            <span className='text-sm'> Server Time</span>
                        </CardRow>
                    </div>
                </div>
            </div>
        </article>
    );
}

export const RaidCardSkeleton = 'flex relative z-0 h-[300px] border-1 border-slate-600 bg-slate-700 rounded-xl overflow-clip shadow-md';

type RaidCoverImageProps = {
    raidName: Raid['name'];
};

function RaidCoverImage({ raidName }: RaidCoverImageProps) {
    return (
        <Image
            src={RAID_COVER_IMAGES[raidName]}
            fill
            alt='Raid cover'
            className='absolute w-full h-full object-cover object-center -z-10 rounded-xl mix-blend-hard-light'
        ></Image>
    );
};

function CardRow({ children }: { children: ReactNode; }) {
    return (
        <span className='flex gap-1 px-4 py-1 text-sm'>
            {children}
        </span>
    );
}
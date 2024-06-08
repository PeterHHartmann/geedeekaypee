import { RAID_COVER_IMAGES } from '@/lib/constants';
import type { Raid } from '@/lib/definitions';
import { CalendarIcon, ClockIcon, EyeIcon, EyeSlashIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import type { ReactNode } from 'react';

type Props = {
    title: string;
    raidName: Raid['name'];
    date: string;
    time: string;
    isPublic: boolean;
};

export function RaidCard({ title, raidName, date, time, isPublic }: Props) {
    return (
        <article className={`${RaidCardSkeleton} text-white`}>
            <RaidCoverImage raidName={raidName} />
            <div className='w-full h-full rounded-xl shadow-inner shadow-slate-700/50 bg-slate-900/60'>
                <div className='flex flex-wrap w-full rounded-t-xl'>
                    <div className='w-full px-4 pt-4 pb-2 border-b-1 border-slate-700'>
                        <header className='font-semibold'>{title}</header>
                    </div>
                    <div className='grid grid-flow-row gap-1 py-1'>
                        <CardRow>
                            <GlobeAsiaAustraliaIcon className='w-4' />
                            <p>{raidName}</p>
                        </CardRow>
                        <CardRow>
                            <CalendarIcon className='w-4' />
                            <p>{date}</p>
                        </CardRow>
                        <CardRow>
                            <ClockIcon className='w-4' />
                            <p>{time}</p>
                            <span className='text-sm'> Server Time</span>
                        </CardRow>
                        <CardRow>
                            {isPublic
                                ? <>
                                    <EyeIcon className='w-4' />
                                    <p>Public</p>
                                </>
                                : <>
                                    <EyeSlashIcon className='w-4' />
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
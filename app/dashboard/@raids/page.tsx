
import { RAID_IMAGES } from '@/lib/constants';
import type { Raid } from '@/lib/definitions';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default async function RaidsPage() {
    return (
        <>

            <RaidEntry title='Weekly ICC 25HC' raidName='Icecrown Citadel' date='2024/6/1' time='18:00' isPublic={true} />
            <RaidEntry title='RS 25HC' raidName='Ruby Sanctum' date='2024/6/1' time='21:00' isPublic={false} />
        </>
    );
}

type RaidEntryProps = {
    title: string;
    raidName: Raid['name'];
    date: string;
    time: string;
    isPublic: boolean;
};

function RaidEntry({ title, raidName, date, time, isPublic }: RaidEntryProps) {
    return (
        <div className={'flex relative z-0 h-[300px] border-1 border-slate-600 bg-slate-700 dark:bg-slate-900 rounded-xl object-cover overflow-clip'}>
            <RaidCoverImage raidName={raidName} />
            <div className='flex flex-col gap-1 p-3 w-max bg-slate-700/75 text-white'>
                <h1 className='w-max font-bold border-b-1 border-slate-300'>{title}</h1>
                <p className='border-b-1 border-slate-600'>{raidName}</p>
                <p className='border-b-1 border-slate-600'>{date}</p>
                <p className='border-b-1 border-slate-600'>
                    {time}
                    <span className='text-sm'> Server Time</span>
                </p>
                <div className='flex border-b-[1px] border-slate-600 gap-1'>
                    {isPublic
                        ? <>
                            <EyeIcon className='w-5' />
                            <p>Public</p>
                        </>
                        : <>
                            <EyeSlashIcon className='w-5' />
                            <p>Draft</p>
                        </>
                    }
                </div>
            </div>
            <div className='relative flex-1 h-full min-w-28 bg-gradient-to-r from-slate-700/75 dark:from-slate-900/75'>
            </div>
        </div>
    );
}

type RaidCoverImageProps = {
    raidName: Raid['name'];
};

function RaidCoverImage({ raidName }: RaidCoverImageProps) {
    return (
        <Image
            src={RAID_IMAGES[raidName]}
            fill
            alt='Raid cover'
            className='absolute w-full h-full object-cover object-center -z-10 rounded-xl'
        ></Image>
    );
};
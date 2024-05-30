
import { RAID_IMAGES } from '@/lib/constants';
import type { Raid } from '@/lib/definitions';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default async function RaidsPage() {
    return (
        <div className='flex flex-wrap gap-3'>
            <RaidEntry title='Weekly ICC 25HC' raidName='Icecrown Citadel' date='2024/6/1' time='18:00' isPublic={true} />
            <RaidEntry title='RS 25HC' raidName='Ruby Sanctum' date='2024/6/1' time='21:00' isPublic={false} />
        </div>
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
        <div className={'flex relative z-0 h-[300px] w-[400px] border-1 border-primary-600 bg-primary-700 rounded-xl object-cover overflow-clip'}>
            <RaidCoverImage raidName={raidName} />
            <div className='flex flex-col gap-1 p-3 w-max bg-primary-900 bg-opacity-50'>
                <h1 className='w-max font-bold border-b-[1px] border-primary-300'>{title}</h1>
                <p className='border-b-[1px] border-primary-500'>{raidName}</p>
                <p className='border-b-[1px] border-primary-500'>{date}</p>
                <p className='border-b-[1px] border-primary-500'>
                    {time}
                    <span className='text-sm'> Server Time</span>
                </p>
                <div className='flex border-b-[1px] border-primary-500 gap-1'>
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
            <div className='relative flex-1 h-full min-w-28 bg-gradient-to-r from-primary-900 opacity-50 p-3'>
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
            className='absolute w-full h-full object-cover object-center -z-10 rounded-xl mix-blend-overlay'
        ></Image>
    );
};
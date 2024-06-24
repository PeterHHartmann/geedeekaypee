import { RAID_COVER_IMAGES } from '@/lib/constants';
import type { RaidVariant } from '@/lib/definitions';
import Image from 'next/image';

type RaidCoverImageProps = {
    raidName: RaidVariant['name'];
    className?: string;
};

export function RaidCoverImage({ raidName, className }: RaidCoverImageProps) {
    return (
        <Image
            src={RAID_COVER_IMAGES[raidName]}
            fill
            alt='Raid cover'
            className='absolute w-full h-full object-cover object-center -z-10 rounded-md mix-blend-screen dark:mix-blend-multiply'
        ></Image>
    );
};
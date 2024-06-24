import { PublicRaidEventAssignments } from '@/components/raids/PublicRaidEventAssignments';
import { PublicRaidEventRoster } from '@/components/raids/PublicRaidEventRoster';
import { RaidCoverImage } from '@/components/raids/RaidCoverImage';
import {
    fetchMainRoster,
    fetchRaidEvent,
    fetchRaidEventRoster,
    fetchRaidTemplateSingle
} from '@/lib/actions';
import type { RaidEvent, RosterCharacter } from '@/lib/definitions';
import { formatDateForDisplay, formatTimeForDisplay } from '@/lib/utils';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

type Props = {
    params: { raidEventId: RaidEvent['id']; };
};

export default async function RaidEventPublicPage({ params }: Props) {
    const raidEvent = await fetchRaidEvent(params.raidEventId);
    const mainRoster = await fetchMainRoster(raidEvent.user_email);
    const raidTemplate = await fetchRaidTemplateSingle(raidEvent.raid_template_id);
    const raidEventPositions = await fetchRaidEventRoster(raidEvent.id);

    const raidRoster = raidEventPositions.reduce<(RosterCharacter | null)[]>((acc, eventPosition) => {
        const foundCharacter = mainRoster.find((mainRosterChar) => mainRosterChar.id == eventPosition.main_roster_id);
        if (foundCharacter) {
            acc[eventPosition.position] = foundCharacter;
        }
        return acc;
    }, Array.from(Array(raidTemplate.size), () => null));

    return (
        <div className='grid grid-flow-row gap-2 w-full rounded-md'>
            <div className='grid grid-flow-col gap-3 w-full h-fit'>
                <div className='relative z-0 flex flex-col gap-1 w-full h-auto rounded-md bg-slate-400 dark:bg-slate-500 p-5 overflow-clip font-medium dark:font-normal shadow-md'>
                    <RaidCoverImage raidName={raidTemplate.raid_variant_name} />
                    <div className='grid grid-flow-row-dense gap-1'>
                        <h1 className='text-2xl font-medium'>{raidEvent.title}</h1>
                        <span className='flex gap-1'>
                            <MapPinIcon className='w-5' />
                            <p>{raidTemplate.name}</p>
                        </span>
                        <span className='flex gap-1'>
                            <CalendarIcon className='w-4' />
                            <p>{formatDateForDisplay(raidEvent.date)}</p>
                        </span>
                        <span className='flex gap-1'>
                            <ClockIcon className='w-4' />
                            <p>{formatTimeForDisplay(raidEvent.time)} Server Time</p>
                        </span>
                    </div>
                </div>
                <PublicRaidEventRoster
                    raidRoster={raidRoster}
                />
            </div>
            <div className='grid grid-flow-col auto-cols-auto gap-3 w-full h-fit'>
                <PublicRaidEventAssignments
                    raidEvent={raidEvent}
                    raidTemplate={raidTemplate}
                    raidRoster={raidRoster}
                />
                <div className='w-full h-auto'>
                    <h1>Bosses</h1>
                </div>
            </div>
        </div>
    );
}
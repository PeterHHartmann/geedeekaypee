import { RaidsList } from '@/components/raids/RaidsList';

export default async function RaidsPage() {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            <RaidsList />
        </div>
    );
}
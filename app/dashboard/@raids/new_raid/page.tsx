import { AddRaidForm } from '@/components/raids/form/AddRaidForm';
import { fetchMainRoster, fetchRaids } from '@/lib/actions';

export default async function NewRaidPage() {
    const roster = await fetchMainRoster();
    const raids = await fetchRaids();

    return (
        <>
            <AddRaidForm characters={roster} raids={raids}>
            </AddRaidForm>
        </>
    );
}
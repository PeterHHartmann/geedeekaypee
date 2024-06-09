import { AddRaidForm } from '@/components/raids/form/AddRaidForm';
import { fetchMainRoster, fetchRaidTemplates, fetchRaidTemplatePositions } from '@/lib/actions';

export default async function NewRaidPage() {
    const roster = await fetchMainRoster();
    const raidTemplates = await fetchRaidTemplates();
    const raidTemplatePositions = await fetchRaidTemplatePositions();

    return (
        <>
            <AddRaidForm mainRoster={roster} raidTemplates={raidTemplates} templatePositions={raidTemplatePositions}>
            </AddRaidForm>
        </>
    );
}
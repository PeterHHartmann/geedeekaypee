import { AddRaidForm } from '@/components/raids/form/AddRaidForm';
import { fetchMainRoster, fetchRaidTemplates, fetchRaidTemplatePositions } from '@/lib/actions';

export default async function NewRaidPage() {
    const roster = await fetchMainRoster();
    const raidTemplates = await fetchRaidTemplates();
    const raidTemplatePositions = await fetchRaidTemplatePositions();
    // console.log(raidTemplatePositions);
    console.log(raidTemplates);


    return (
        <>
            <AddRaidForm main_roster={roster} raid_templates={raidTemplates} template_positions={raidTemplatePositions}>
            </AddRaidForm>
        </>
    );
}
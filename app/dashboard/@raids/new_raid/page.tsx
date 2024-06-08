import { AddRaidForm } from '@/components/raids/form/AddRaidForm';
import { fetchMainRoster, fetchRaidTemplates, fetchRaidTemplatePositions } from '@/lib/actions';

export default async function NewRaidPage() {
    const roster = await fetchMainRoster();
    const raids = await fetchRaidTemplates();
    const raidTemplatePositions = await fetchRaidTemplatePositions('348c5108-ab12-4c29-bc0e-9780d3a4bffd');
    console.log(raidTemplatePositions);
    // console.log(JSON.parse(raidTemplatePositions[0].priority_list));

    return (
        <>
            <AddRaidForm characters={roster} raid_templates={raids}>
            </AddRaidForm>
        </>
    );
}
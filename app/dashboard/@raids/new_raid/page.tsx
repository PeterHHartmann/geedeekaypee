import { AddRaidForm } from '@/components/raids/form/AddRaidForm';
import { fetchCharacters } from '@/lib/actions';

export default async function NewRaidPage() {
    const roster = await fetchCharacters();

    return (
        <>
            <AddRaidForm characters={roster}>
            </AddRaidForm>
        </>
    );
}
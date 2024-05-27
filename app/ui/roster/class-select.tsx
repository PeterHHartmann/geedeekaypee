import { fetchCharacterClasses } from '@/app/lib/actions';

export async function CharacterClassSelect() {
    const classOptions = await fetchCharacterClasses();
    return (
        <div className='w-full'>
            <label className="mb-3 mt-5 block font-semibold bg-death-knight" htmlFor='class_id'>
                Class
            </label>
            <select name='class_id' id='class_id' className='peer block w-full rounded-md border-1 border-primary-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-primary-950' required>
                {classOptions.map((characterClass) => (
                    <option key={`class-selection-option-${characterClass.name}`} value={characterClass.id}>{characterClass.name}</option>
                ))}
            </select>
        </div>
    );
}
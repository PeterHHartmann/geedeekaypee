import { fetchCharacterRoles } from '@/app/lib/actions';

export async function CharacterRoleSelect() {
    const roleOptions = await fetchCharacterRoles();
    return (
        <div className='w-full'>
            <label className="mb-3 mt-5 block font-semibold bg-death-knight" htmlFor='role_id'>
                Role
            </label>
            <select name='role_id' id='role_id' className='peer block w-full rounded-md border-1 border-primary-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-primary-950 bg-death-knight' required>
                {roleOptions.map((characterRole) => (
                    <option key={`role-selection-option-${characterRole.name}`} value={characterRole.id}>{characterRole.name}</option>
                ))}
            </select>
        </div>
    );
}
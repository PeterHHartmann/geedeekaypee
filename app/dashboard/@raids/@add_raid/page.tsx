import { Button } from '@/components/Button';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

export default function AddRaidPage() {
    return (
        <Button className='w-full'>
            <PlusCircleIcon className='w-6' />
            <p>New Raid</p>
        </Button>
    );
}
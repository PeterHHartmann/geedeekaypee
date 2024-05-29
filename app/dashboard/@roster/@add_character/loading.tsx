import { Button } from '@/app/_ui/button';
import { LoadingSpinner } from '@/app/_ui/loading-spinner';

export default function AddCharacterSectionLoading() {
    return (
        <Button className='w-full'>
            <LoadingSpinner size='sm' />
        </Button>
    );
}
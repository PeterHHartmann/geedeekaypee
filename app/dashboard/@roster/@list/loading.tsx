import { LoadingSpinner } from '@/app/_ui/loading-spinner';

export default function RosterListLoading() {
    return (
        <div className='flex w-full justify-center mt-4'>
            <LoadingSpinner size='lg' />
        </div>
    );
}
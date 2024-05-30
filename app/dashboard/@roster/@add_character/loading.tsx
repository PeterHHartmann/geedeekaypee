import { SHIMMER } from '@/lib/constants';

export default function AddCharacterSectionLoading() {
    return (
        <div className={`flex w-full h-[48px] items-center justify-center gap-2 rounded-md ${SHIMMER}`}>
        </div>
    );
}
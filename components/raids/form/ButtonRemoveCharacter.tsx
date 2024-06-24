import { XMarkIcon } from '@heroicons/react/24/outline';


type Props = {
    onClickHandler: () => void;
};

export function ButtonRemoveCharacter({ onClickHandler }: Props) {
    return (
        <div className='p-1'>
            <button className='flex p-1 justify-center items-center text-slate-950 hover:text-slate-50 hover:bg-indigo-700 rounded-full' onClick={onClickHandler}>
                <XMarkIcon className='w-5' />
            </button>
        </div>
    );
};
import * as HIcons from '@heroicons/react/24/outline';

export default function DynamicHeroIcon(props): FC<{ icon: string; }> {
    const { ...icons } = HIcons;
    const TheIcon: JSX.Element = icons[props.icon];

    return (
        <>
            <TheIcon className='w-6' aria-hidden="true" />
        </>
    );
};
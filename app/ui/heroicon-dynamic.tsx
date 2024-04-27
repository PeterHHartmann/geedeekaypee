import * as HIcons from '@heroicons/react/24/outline';

export default function DynamicHeroIcon(props: { icon: string; }) {
    // eslint-disable-next-line
    const { ...icons } = HIcons;
    // eslint-disable-next-line
    const TheIcon: JSX.Element = icons[props.icon];

    return (
        <>
            <TheIcon className='w-6' aria-hidden="true" />
        </>
    );
};
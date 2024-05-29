import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function AddCharacterSectionLayout({ children }: Props) {
    return (
        <div className='pt-1 mt-2 justify-center' >
            {children}
        </div>
    );
}
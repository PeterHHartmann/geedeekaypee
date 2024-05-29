import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function AddCharacterSectionLayout({ children }: Props) {
    return (
        <div className='my-2 justify-center' >
            {children}
        </div>
    );
}
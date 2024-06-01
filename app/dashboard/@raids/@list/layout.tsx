import { SHIMMER } from '@/lib/constants';
import clsx from 'clsx';
import { Suspense, type ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function RaidsListLayout({ children }: Props) {

    function CardContainer({ children, className }: { children?: ReactNode, className?: string; }) {
        return (
            <div className={clsx(
                'grid sm:grid-cols-2 lg:grid-cols-3 gap-3 m-3 overflow-y-scroll max-h-[500px] lg:max-h-[780px] lg:min-h-[780px]',
                className
            )}>
                {children}
            </div>
        );
    }

    return (
        <div>
            <Suspense fallback={<CardContainer className={SHIMMER} />} >
                <CardContainer>
                    {children}
                </CardContainer>
            </Suspense>
        </div>
    );
}

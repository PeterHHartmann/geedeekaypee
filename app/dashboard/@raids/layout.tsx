import { SHIMMER } from '@/lib/constants';
import { Suspense, type ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default async function RaidsLayout({ children }: Props) {

    return (
        <section
            className='
                z-0
                basis-11/12
                mx-auto
                rounded-md w-full 
                bg-slate-100 
                dark:bg-slate-800 
                border-1 
                border-slate-300
                dark:border-slate-700 
                shadow-md 
                shadow-slate-200 
                dark:shadow-slate-800 
            '
        >
            <Suspense fallback={
                <div className={`w-full overflow-y-auto h-auto p-3 min-h-[500px] lg:min-h-[900px] rounded-md ${SHIMMER}`}></div>}>
                <div className='w-full overflow-y-auto h-auto p-3 min-h-[500px] lg:min-h-[900px] rounded-md'>
                    {children}
                </div>
            </Suspense>
        </section>
    );
}
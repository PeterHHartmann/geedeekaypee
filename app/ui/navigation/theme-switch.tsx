'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitch() {
    const { setTheme, resolvedTheme } = useTheme();

    // const [mounted, setMounted] = useState<boolean>(false);
    // useEffect(() => {
    //     setMounted(true);
    // }, []);

    // if (!mounted) {
    //     return (
    //         <label className="flex w-14 max-h-8 dark:bg-primary-50 rounded-full p-[0.15rem]">
    //             <div className='flex justify-center items-center in-w-5 min-h-5 p-1 aspect-square rounded-full transition-all ml-0'></div>
    //         </label>
    //     );
    // }

    // if (resolvedTheme == 'dark') {
    //     return (
    //         <label className="flex w-14 max-h-8 bg-primary-950 dark:bg-primary-50 rounded-full p-[0.15rem]">
    //             <ButtonSwitch resolvedTheme={resolvedTheme} onClick={() => setTheme('light')} />
    //         </label>
    //     );
    // }



    // if (resolvedTheme == 'light') {
    //     return (
    //         <label className="flex w-14 max-h-8 bg-primary-950 dark:bg-primary-50 rounded-full p-[0.15rem]">
    //             <ButtonSwitch resolvedTheme={resolvedTheme} onClick={() => setTheme('dark')} />
    //         </label>
    //     );
    // }

    return (
        <>
            <button
                onClick={resolvedTheme == 'light' ? () => setTheme('dark') : () => setTheme('light')}
                className='flex w-14 h-8 bg-primary-950 dark:bg-primary-50 rounded-full p-[0.15rem]'
            >
                <div className={clsx(
                    'flex justify-center items-center h-full aspect-square rounded-full transition-transform ease-in-out duration-200 ml-0 bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-50',
                    {
                        'translate-x-[1.5rem]': resolvedTheme == 'dark'
                    }
                )}>
                    {resolvedTheme == 'light'
                        ? < SunIcon className='w-5' />
                        : <MoonIcon className='w-5' />
                    }
                </div>
            </button>


            {/* <label className="flex w-14 max-h-8 bg-primary-950 dark:bg-primary-50 rounded-full p-[0.15rem]">
                <button
                    onClick={resolvedTheme == 'light' ? () => setTheme('dark') : () => setTheme('light')}
                    className={clsx(
                        'flex justify-center items-center in-w-5 min-h-5 aspect-square rounded-full transition-transform ml-0 bg-primary-50 text-primary-950',
                        {
                            'translate-x-[1.75rem]': resolvedTheme == 'dark'
                        }
                    )}
                >
                    <div>

                    </div>
                    <SunIcon className='w-5' />
                </button>

            </label> */}
        </>
    );

    return null;
}

type ButtonSwitchProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    resolvedTheme: string;
};

function ButtonSwitch({ resolvedTheme, ...rest }: ButtonSwitchProps) {
    console.log(resolvedTheme);

    return (

        <button
            {...rest}
            className={clsx(
                'flex justify-center items-center in-w-5 min-h-5 aspect-square rounded-full transition-all ml-0 bg-primary-50 text-primary-950',
                {
                    'ml-auto translate-x-[1rem]': resolvedTheme == 'dark'
                }
            )}
        >
            {resolvedTheme == 'light'
                ? <SunIcon className='w-5' />
                : <MoonIcon className='w-5' />
            }
        </button>
        // <button onClick={onClickHandler} {...rest} className='flex min-w-5 min-h-5 p-1 aspect-square bg-primary-950 text-primary-50 rounded-full'>
        //     <DynamicHeroIcon icon={modes[resolvedTheme].icon} />

        //     {/* {resolvedTheme && resolvedTheme == 'light'
        //         ? <SunIcon className='w-5' />
        //         : <MoonIcon className='w-5' />
        //     } */}
        // </button>
    );
}
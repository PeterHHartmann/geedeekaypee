import Link from 'next/link';
import { NavLink } from '@/components/navigation/NavLink';
import { auth, signOut } from '@/auth';
import { ThemeSwitch } from '@/components/navigation/ThemeSwitch';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon, CubeIcon, HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/fonts';

export async function Navbar() {
    const session = await auth();
    const user = session?.user;
    return (
        <nav className="w-full h-16 px-2 md:px-6 bg-slate-50 dark:bg-slate-900 sticky top-0 z-50" >
            <div className="mx-auto h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href='/'>
                        <div
                            className={`${lusitana.className} flex flex-row items-center leading-none`}>
                            <CubeIcon className="h-10 w-12 rotate-[15deg]" />
                            <p className="text-3xl">geedeekaypee</p>
                        </div>
                    </Link>
                    <ul className='md:flex md:gap-x-1 lg:gap-x-6 md:justify-between md:items-center'>
                        {user ?
                            <>
                                <li>
                                    <NavLink name='Dashboard' href='/dashboard'>
                                        <HomeIcon className='w-6' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink name={user.name || 'User'} href={`/user/${user.name}`}>
                                        <UserCircleIcon className='w-6' />
                                    </NavLink>
                                </li>
                                <li>
                                    <form
                                        action={async () => {
                                            'use server';
                                            await signOut();
                                        }}
                                    >
                                        <button className="flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-indigo-600 active:bg-indigo-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
                                            <ArrowRightStartOnRectangleIcon className="w-6" />
                                            <p className="hidden md:block">Logout</p>
                                        </button>
                                    </form>
                                </li>
                            </>
                            : <>
                                <li>
                                    <NavLink name='Login' href='/login'>
                                        <ArrowRightEndOnRectangleIcon className='w-6' />
                                    </NavLink>
                                </li>
                            </>
                        }
                        <li>
                            <ThemeSwitch />
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};
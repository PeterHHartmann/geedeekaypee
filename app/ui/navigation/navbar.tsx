import Link from 'next/link';
import AuthLinks from '@/app/ui/navigation/authlinks';
import NavLink from '@/app/ui/navigation/navlink';
import { auth } from '@/auth';
import { ThemeSwitch } from '@/app/ui/navigation/theme-switch';
import { CubeIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default async function Navbar() {
    const session = await auth();
    const user = session?.user;

    return (
        <nav className="w-full h-20 px-2 md:px-6 bg-primary-50 dark:bg-primary-900 sticky top-0 z-50" >
            <div className="mx-auto h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href='/'>
                        <div
                            className={`${lusitana.className} flex flex-row items-center leading-none`}>
                            <CubeIcon className="h-12 w-12 rotate-[15deg]" />
                            <p className="text-[44px]">geedeekaypee</p>
                        </div>
                    </Link>
                    <ul className='md:flex md:gap-x-1 lg:gap-x-6 md:justify-between md:items-center'>
                        {user ?
                            <NavLink name='Dashboard' href='/dashboard' icon='HomeIcon' />
                            : null
                        }
                        <AuthLinks />
                        <ThemeSwitch />
                    </ul>
                </div>
            </div>
        </nav >
    );
};
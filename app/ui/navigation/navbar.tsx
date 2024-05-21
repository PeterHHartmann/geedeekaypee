import Link from 'next/link';
import Logo from '@/app/ui/logo';
import AuthLinks from '@/app/ui/navigation/authlinks';
import NavLink from '@/app/ui/navigation/navlink';
import { auth } from '@/auth';

export default async function Navbar() {
    const session = await auth();
    const user = session?.user;

    return (
        <nav className="w-full h-20 bg-slate-900 sticky top-0" >
            <div className="container mx-auto h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href='/'>
                        <Logo />
                    </Link>
                    <ul className='md:flex gap-x-6 text-slate-50'>
                        {user ?
                            <NavLink name='Dashboard' href='/dashboard' icon='HomeIcon' />
                            : null
                        }
                        <AuthLinks />
                    </ul>
                </div>
            </div>
        </nav >
    );
};
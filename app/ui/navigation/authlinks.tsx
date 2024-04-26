import { auth, signOut } from '@/auth';
import Link from 'next/link';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import NavLink from '@/app/ui/navigation/navlink';

export default async function AuthLinks() {
    const session = await auth();

    return (
        <>
            {session?.user ? (
                <>
                    <li>
                        <NavLink
                            name={session.user.name}
                            href={`/user/${session.user.name}`}
                            icon='UserCircleIcon' />
                    </li>
                    <li>
                        <form
                            action={async () => {
                                'use server';
                                await signOut();
                            }}
                        >
                            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-slate-50 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                                <ArrowRightStartOnRectangleIcon className="w-6" />
                                <p className="hidden md:block">Logout</p>
                            </button>
                        </form>
                    </li>
                </>

            ) : (
                <li>
                    <NavLink name='Login' href='/login' icon='ArrowRightEndOnRectangleIcon' />
                </li>
            )
            }
        </>
    );

}
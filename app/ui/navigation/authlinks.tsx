import { auth, signOut } from '@/auth';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import NavLink from '@/app/ui/navigation/navlink';

export default async function AuthLinks() {
    const session = await auth();
    const user = session?.user;

    if (user) {
        return (
            <>
                <li>
                    <NavLink
                        name={user.name || 'User'}
                        href={`/user/${user.name}`}
                        icon='UserCircleIcon' />
                </li>
                <li>
                    <form
                        action={async () => {
                            'use server';
                            await signOut();
                        }}
                    >
                        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm dark:text-primary-50 font-medium hover:bg-primary-950 dark:hover:bg-primary-50 hover:text-primary-50 dark:hover:text-primary-950 md:flex-none md:justify-start md:p-2 md:px-3">
                            <ArrowRightStartOnRectangleIcon className="w-6" />
                            <p className="hidden md:block">Logout</p>
                        </button>
                    </form>
                </li>
            </>
        );
    }
    return (
        <li>
            <NavLink name='Login' href='/login' icon='ArrowRightEndOnRectangleIcon' />
        </li>
    );
}
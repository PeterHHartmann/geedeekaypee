'use client';
import {
    HomeIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Login', href: '/login', icon: UserCircleIcon }
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <ul className="md:flex gap-x-6 text-slate-50">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <li key={`navlink-${link.name}`}>
                        <Link
                            href={link.href}
                            className={clsx(
                                "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-slate-900 md:flex-none md:justify-start md:p-2 md:px-3",
                                {
                                    'bg-sky-100 text-slate-900': pathname === link.href,
                                },
                            )}
                        >
                            <LinkIcon className="w-6" />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
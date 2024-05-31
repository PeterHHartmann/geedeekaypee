'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import type { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    name: string,
    href: string,
};

export function NavLink({ name, href, children }: Props) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={clsx(
                "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-indigo-600 active:bg-indigo-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
                {
                    'bg-indigo-600 text-white': isActive == true,
                },
            )}
        >
            {children}
            <p className="hidden md:block">{name}</p>
        </Link>
    );
}
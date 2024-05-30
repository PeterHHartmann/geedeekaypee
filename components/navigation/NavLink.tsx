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
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-primary-950 hover:text-primary-50 dark:hover:bg-primary-50 dark:hover:text-primary-950 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                    'bg-primary-950 text-primary-50 dark:bg-primary-50 dark:text-primary-950': isActive == true,
                },
            )}
        >
            {children}
            <p className="hidden md:block">{name}</p>
        </Link>
    );
}
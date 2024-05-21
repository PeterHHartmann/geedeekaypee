'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import DynamicHeroIcon from '@/app/ui/heroicon-dynamic';

type NavLinkProps = {
    name: string,
    href: string,
    icon: string;
};

export default function NavLink(props: NavLinkProps) {
    const pathname = usePathname();

    return (
        <Link
            href={props.href}
            className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-primary-50 hover:text-primary-950 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                    'bg-primary-50 text-primary-950': pathname === props.href,
                },
            )}
        >
            <DynamicHeroIcon icon={props.icon} />
            <p className="hidden md:block">{props.name}</p>
        </Link>
    );
}
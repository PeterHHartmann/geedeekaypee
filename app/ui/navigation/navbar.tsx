import Link from 'next/link';
import Logo from '@/app/ui/logo';
import NavLinks from '@/app/ui/navigation/navlinks';

export default function Navbar() {
    return (
        <nav className="w-full h-20 bg-slate-900 sticky top-0" >
            <div className="container mx-auto px-16 h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href='/'>
                        <Logo />
                    </Link>
                    <NavLinks />
                </div>
            </div>
        </nav >
    );
};
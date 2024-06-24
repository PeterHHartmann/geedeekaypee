<<<<<<< HEAD:app/ui/logo.tsx
import { CubeIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Logo() {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
        >
            <CubeIcon className="h-12 w-12 rotate-[15deg]" />
            <p className="text-[44px]">GDKP</p>
        </div>
    );
=======
import { CubeIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/fonts';

export default function Logo() {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
        >
            <CubeIcon className="h-12 w-12 rotate-[15deg]" />
            <p className="text-[44px]">geedeekaypee</p>
        </div>
    );
>>>>>>> fde10ba6fc4225fa4c723c2defa4b612beb34d7c:components/Logo.tsx
}
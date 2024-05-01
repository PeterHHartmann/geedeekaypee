import Logo from '@/app/ui/logo';
import { getPlayableClasses, getPlayableRaces } from '@/app/lib/actions';
import type { PlayableClass } from '@/app/lib/definitions';

export default async function Page() {
    const playable_classes = await getPlayableClasses();
    const classItems = playable_classes.map((playable_class: PlayableClass) => <p key={`class-${playable_class.id}`}>{playable_class.name}</p>);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <Logo />
            </div>
            <h1 className='text-slate-50'>Dashboard</h1>
            <form action={getPlayableRaces}>
                <button>Races</button>
            </form>
            <div>
                {classItems}
            </div>
        </main>
    );
}

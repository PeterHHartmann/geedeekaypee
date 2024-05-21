import Logo from '@/app/ui/logo';
// import { getPlayableClasses, getPlayableRaces } from '@/app/lib/actions';
// import type { PlayableClass } from '@/app/lib/definitions';

export default async function Page() {
    // const playable_classes = await getPlayableClasses();
    // const classVariants = {
    //     "death knight": "text-deathknight",
    //     druid: "text-druid",
    //     hunter: "text-hunter",
    //     mage: "text-mage",
    //     paladin: "text-paladin",
    //     priest: "text-priest",
    //     rogue: "text-rogue",
    //     shaman: "text-shaman",
    //     warlock: "text-warlock",
    //     warrior: "text-warrior"
    // };

    return (
        <main className="flex min-h-screen flex-col items-center px-12 py-1 h-full">
            <div id='dashboard-container' className='flex flex-col align-center bg-primary-900 w-full h-full rounded-xl px-4 py-6'>
                <h1 className='mx-auto text-3xl mb-4'>Dashboard</h1>
                <div className='flex'>
                    <div id='roster-container' className='p-6 mx-3 rounded-xl bg-primary-800 w-96 max-w-96 justify-center'>
                        <div className='border-b-2 mb-4'>
                            <h2 className='text-2xl mb-2 mx-auto w-min'>Roster</h2>
                        </div>
                        <div>
                            <div className='opacity-100'>player 1</div>
                            <div>player 2</div>
                            <div>player 3</div>
                            <div>player 4</div>
                            <div>player 5</div>
                            <div>player 6</div>
                            <div>player 7</div>
                            <div>player 8</div>
                            <div>player 9</div>
                            <div>player 10</div>
                            <div>player 11</div>
                            <div>player 12</div>
                            <div>player 13</div>
                            <div>player 14</div>
                            <div>player 15</div>
                            <div>player 16</div>
                            <div>player 17</div>
                            <div>player 18</div>
                            <div>player 19</div>
                            <div>player 20</div>
                            <div>player 21</div>
                            <div>player 22</div>
                            <div>player 23</div>
                            <div>player 24</div>
                            <div>player 25</div>
                        </div>
                    </div>
                    <div className='p-6 mx-3 rounded-xl bg-primary-800 w-full'>
                        <div id='create-new-raid'>
                            <button>new raid</button>
                        </div>
                        <div id='your raids'>
                            <div>raid 1</div>
                            <div>raid 2</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <form action={getPlayableRaces}>
                <button>Races</button>
            </form>
            <div>
                {playable_classes.map((playable_class: PlayableClass) =>
                    <p key={`class-${playable_class.id}`} className={`${classVariants[playable_class.name.toLowerCase()]}`}>{playable_class.name.toLowerCase()}</p>)
                }
            </div> */}
        </main>
    );
}

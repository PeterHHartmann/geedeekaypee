import Logo from '@/components/Logo';

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <Logo />
            </div>
        </main>
    );
}

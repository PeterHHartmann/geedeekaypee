import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'User dashboard for managing roster and upcoming raids',
};

export default async function Page() {
    return (
        <h1 className='mx-auto text-3xl mb-4'>Dashboard</h1>
    );
}

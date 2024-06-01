import Logo from '@/components/Logo';
import LoginForm from '../../components/auth/login-form';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 rounded-md shadow-lg">
                <div className="flex h-20 w-full items-end rounded-lg bg-indigo-600 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <Logo />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}
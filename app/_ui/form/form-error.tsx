import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

type Props = {
    result: {
        success: boolean;
        messages?: string[];
    };
};

export function FormErrors({ result }: Props) {
    if (!result.success && result.messages) {
        return (
            <div
                className="flex flex-wrap items-center gap-2 mb-4"
                aria-live="polite"
                aria-atomic="true"
            >
                {result.messages.map((message, index) => (
                    <div key={`form-error-${index}`} className='flex mb-2 w-full'>
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{message}</p>
                    </div>
                ))}
            </div>
        );
    }
    return null;
}
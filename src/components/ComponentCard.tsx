import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router';

type ComponentCardProps = {
    name: string;
    url: string;
}

export function ComponentCard({ name, url }: ComponentCardProps) {
    const navigate = useNavigate();

    function handleRedirect() {
        navigate(url);
    }

    return (
        <button
            className={cn(
                'w-80 h-80 border-2 border-white rounded-lg cursor-pointer',
                'hover:shadow-white hover:scale-105 transition-all hover:bg-zinc-900'
            )}
            onClick={handleRedirect}
        >
            <span>{name}</span>
        </button>
    );
}

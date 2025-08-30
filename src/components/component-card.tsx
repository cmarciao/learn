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
                'w-80 h-80 border-2 border-foreground rounded-lg cursor-pointer',
                'hover:shadow-foreground hover:scale-105 transition-all hover:bg-primary-foreground'
            )}
            onClick={handleRedirect}
        >
            <span>{name}</span>
        </button>
    );
}

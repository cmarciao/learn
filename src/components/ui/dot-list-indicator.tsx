import { cn } from '@/lib/utils';

type DotItemProps = {
    size?: 'default' | 'small' | 'micro';
    isActive: boolean;
}

function DotItem({ isActive, size = 'default' }: DotItemProps) {
    return (
        <div
            className={cn(
                'w-2 h-2 rounded-full bg-gray-500 transition-all',
                isActive ? 'bg-primary' : 'bg-gray-500',
                isActive && 'scale-125',
                size === 'small' && 'w-1 h-1',
                size === 'micro' && 'w-[2px] h-[2px]'
            )}
        >
        </div>
    );
}

type DotListIndicatorProps = {
    size: number;
    totalItems: number;
    currentItemIndex: number;
}

export function DotListIndicator({ size, currentItemIndex }: DotListIndicatorProps) {
    return (
        <section className="flex items-center gap-1">
            {Array(size).fill(0).map((_n, index) => (
                <DotItem
                    key={index}
                    isActive={currentItemIndex === index}
                />
            ))}
        </section>
    );
}

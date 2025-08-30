import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type IconButtonProps = ComponentProps<'button'>;

export function IconButton({ children, ...props }: IconButtonProps) {
    return (
        <button
            className={cn(
                'p-2 hover:bg-primary-foreground transition-all rounded-full',
                props.className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

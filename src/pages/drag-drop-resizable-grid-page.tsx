import { useNavigate } from 'react-router';
import { IconButton } from '@/components/icon-button';
import { routes } from '@/routes/routes';
import { Grip, MoveLeft } from 'lucide-react';
import { ComponentProps, DragEvent as ReactDragEvent, MouseEvent as ReactMouseEvent, useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type GridItem = {
    id: string;
    name: string;
    description: string;
};

const data = [
    {
        id: 'grid-item-0',
        name: 'Grid Item 0',
        description: 'Grid Item 0 Description',
    },
    {
        id: 'grid-item-1',
        name: 'Grid Item 1',
        description: 'Grid Item 1 Description',
    },
    {
        id: 'grid-item-2',
        name: 'Grid Item 2',
        description: 'Grid Item 2 Description',
    },
    {
        id: 'grid-item-3',
        name: 'Grid Item 3',
        description: 'Grid Item 3 Description',
    }
];

function DragDropResizableGridPage() {
    const navigate = useNavigate();

    const [gridItems, setGridItems] = useState<GridItem[]>(data);
    const [draggingItemId, setDraggingItemId] = useState<string | null>(null);

    function handleBackToHomePage() {
        navigate(routes.home);
    }

    useEffect(() => {
        function handleDragStart(event: DragEvent) {
            if (!draggingItemId) return;
            if (!event.dataTransfer) return;

            event.dataTransfer.setData('text/plain', draggingItemId);
            event.dataTransfer.dropEffect = 'move';
        }

        if (!draggingItemId) return;

        const gridItem = document.getElementById(draggingItemId);

        gridItem?.addEventListener('dragstart', handleDragStart);

        return () => {
            gridItem?.removeEventListener('dragstart', handleDragStart);
        };
    }, [draggingItemId]);

    const handleDrop = useCallback((event: ReactDragEvent<HTMLDivElement>) => {
        if (!draggingItemId) return;
        if (!event.dataTransfer) return;
        event.preventDefault();

        const droppedId = event.dataTransfer.getData('text/plain');
        const targetId = event.currentTarget?.id;

        if (!targetId || droppedId === targetId) return;

        setGridItems((prev) => {
            const newArr = [...prev];
            const i = newArr.findIndex((item) => item.id === droppedId);
            const j = newArr.findIndex((item) => item.id === targetId);

            if (i === -1 || j === -1) return prev;

            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            return newArr;
        });
        event.dataTransfer.clearData('text/plain');
    }, [draggingItemId, gridItems, setGridItems]);

    return (
        <div className="p-4">
            <header className="flex gap-4 items-center mt-4">
                <IconButton onClick={handleBackToHomePage}>
                    <MoveLeft />
                </IconButton>
                <h1 className="text-2xl font-bold">Drag Drop Resizable Grid</h1>
            </header>

            <main className="h-[calc(100vh-136px)] mt-12">
                <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
                    {gridItems.map((item) => (
                        <GridItem
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            draggable={draggingItemId === item.id}
                            onDragButtonMouseDown={() => setDraggingItemId(item.id)}
                            onDragOver={(event) => event.preventDefault() }
                            onDrop={handleDrop}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default DragDropResizableGridPage;

type GridItemProps = ComponentProps<'div'> & {
    name: string;
    description: string;
    onDragButtonMouseDown: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function GridItem({ name, description, onDragButtonMouseDown, ...props }: GridItemProps) {
    return (
        <div className="relative w-full h-96 bg-purple-600 rounded-md" {...props}>
            <button type='button' onMouseDown={onDragButtonMouseDown} className={cn('absolute top-4 left-4 cursor-grab')}>
                <Grip />
            </button>

            <div className="flex flex-col justify-center items-center h-full rounded-md">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="font-semibold">{description}</p>
            </div>
        </div>
    );
}

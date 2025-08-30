import { ComponentCard } from '@/components/component-card';
import { routes } from '@/routes/routes';

type ComponentItem = {
    name: string;
    url: string;
}

const componentItems: ComponentItem[] = [
    {
        name: 'Dot List Indicator',
        url: routes['dot-list-indicato']
    },
    {
        name: 'Drag Drop Resizable Grid',
        url: routes['drag-drop-resizable-grid']
    }
];

export function Home() {
    return (
        <div className="p-4">
            <h1 className="mt-4 text-2xl font-bold">
                Components
            </h1>

            <div className="flex flex-wrap gap-4 mt-12">
                {componentItems.map((component) => (
                    <ComponentCard
                        key={component.name}
                        name={component.name}
                        url={component.url}
                    />
                ))}
            </div>
        </div>
    );
};

import { ComponentCard } from '@/components/ComponentCard';
import { routes } from '@/routes/routes';

type ComponentItem = {
    name: string;
    url: string;
}

const componentItems: ComponentItem[] = [
    {
        name: 'Dot List Indicator',
        url: routes['dot-list-indicato']
    }
];

export function Home() {
    return (
        <div className="h-screen bg-zinc-950 p-4">
            <h1 className="text-2xl font-bold mt-4">
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

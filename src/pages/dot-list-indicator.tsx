import { Button } from '@/components/button';
import { IconButton } from '@/components/icon-button';
import { DotListIndicator } from '@/components/ui/dot-list-indicator';
import { routes } from '@/routes/routes';
import { ChevronLeft, ChevronRight, MoveLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const imageUrls = [
    'https://random.dog/0fb4aeee-f949-4c7b-a6d8-05bf0736bdd1.jpg',
    'https://random.dog/3bc8b410-8ebe-4c9d-85ba-d3677f031ac6.jpg',
    'https://random.dog/24178-5036-5513.jpg',
    'https://random.dog/c05eb611-4b3f-46fc-8464-cf270b8a544a.jpg',
    'https://random.dog/cdfe24b3-8ba8-44b1-a5f4-4174936dabb6.jpg',
    'https://random.dog/cfec1b71-28cb-4eb2-b1a9-60cf432f2346.jpg',
];

function DotListIndicatorPage() {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function handleBackToHomePage() {
        navigate(routes.home);
    }

    function handlePreviousImage() {
        if (currentImageIndex === 0) return;

        setCurrentImageIndex((prevState) => prevState - 1);
    }

    function handleNextImage() {
        if (currentImageIndex === imageUrls.length - 1) return;

        setCurrentImageIndex((prevState) => prevState + 1);
    }

    return (
        <div className="p-4">
            <header className="flex gap-4 items-center mt-4">
                <IconButton onClick={handleBackToHomePage}>
                    <MoveLeft />
                </IconButton>
                <h1 className="text-2xl font-bold">Dot List Indicator</h1>
            </header>

            <main className="h-[calc(100vh-88px)] flex items-center justify-center">
                <section className="flex items-center w-full max-w-sm">
                    <Button variant="ghost" onClick={handlePreviousImage}>
                        <ChevronLeft />
                    </Button>

                    <div className="flex flex-col gap-6 items-center mx-auto">
                        <img
                            src={imageUrls[currentImageIndex]}
                            className="w-60 h-60 rounded-3xl"
                            alt=""
                        />

                        <DotListIndicator
                            size={6}
                            totalItems={imageUrls.length}
                            currentItemIndex={currentImageIndex}
                        />
                    </div>

                    <Button variant="ghost" onClick={handleNextImage}>
                        <ChevronRight />
                    </Button>
                </section>
            </main>
        </div>
    );
}

export default DotListIndicatorPage;

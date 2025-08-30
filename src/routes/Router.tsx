import { lazy } from 'react';
import { Home } from '@/pages/home';
import { BrowserRouter, Routes, Route } from 'react-router';
import { routes } from './routes';

const DotListIndicatorPage = lazy(() => import('@/pages/dot-list-indicator'));
const DragDropResizableGridPage = lazy(() => import('@/pages/drag-drop-resizable-grid-page'));

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes['dot-list-indicato']} element={<DotListIndicatorPage />} />
                <Route path={routes['drag-drop-resizable-grid']} element={<DragDropResizableGridPage />} />
            </Routes>
        </BrowserRouter>
    );
}

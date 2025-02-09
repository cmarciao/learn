import { DotListIndicatorPage } from '@/pages/DotListIndicator';
import { Home } from '@/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router';
import { routes } from './routes';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes['dot-list-indicato']} element={<DotListIndicatorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

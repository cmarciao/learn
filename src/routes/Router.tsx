import { Home } from '@/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

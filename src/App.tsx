import { SwitchTheme } from './components/switch-theme';
import { ThemeProvider } from './contexts/theme-provider';
import { Router } from './routes/Router';

export function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='components:theme'>
            <Router />

            <section className='absolute top-8 right-12'>
                <SwitchTheme />
            </section>
        </ThemeProvider>
    );
};

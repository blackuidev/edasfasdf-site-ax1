import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useThemeStore } from '@/store/theme';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useThemeStore();

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

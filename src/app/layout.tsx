import './globals.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StateProvider from './state-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Should I change my job?',
    description: 'Get the answer to the question that haunts your dreams',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-w-[320px]`}>
                <StateProvider>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </StateProvider>
            </body>
        </html>
    );
}

import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from './providers';

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
        <html lang="en" className="bg-gradient-to-r from-sky-500 to-indigo-500 p-6 dark">
            <body className={`${inter.className} mx-auto h-[932px] w-[430px] max-w-3xl rounded border border-indigo-950 p-8`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

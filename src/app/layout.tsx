import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { iphone14ProMaxSize } from './constants/dev-mobile-size';
import { Providers } from './providers';

const font = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
});

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
        <html lang="en" className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 lg:p-6">
            <body className={`${font.className} lg:mx-auto ${iphone14ProMaxSize} border border-neutral-700 bg-white text-neutral-800`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

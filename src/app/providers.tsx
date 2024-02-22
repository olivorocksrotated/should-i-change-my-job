'use client';

import { NextUIProvider } from '@nextui-org/react';

import { createLocalUser } from '@/lib/database/create';
import { isClient, isIndexedDBAvailable } from '@/lib/environments/client';

if (isClient() && isIndexedDBAvailable()) {
    createLocalUser();
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}

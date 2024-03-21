'use client';

import { NextUIProvider } from '@nextui-org/react';
import { StoreInspector } from 'tinybase/ui-react-dom';

import { createLocalUser } from '@/lib/database/create';
import { DatabaseProvider, useInitStore } from '@/lib/database/store';
import { isClient, isIndexedDBAvailable } from '@/lib/environments/client';

if (isClient() && isIndexedDBAvailable()) {
    createLocalUser();
}

export function Providers({ children }: { children: React.ReactNode }) {
    const store = useInitStore();

    return (
        <NextUIProvider>
            <DatabaseProvider store={store}>
                {children}
                <StoreInspector />
            </DatabaseProvider>
        </NextUIProvider>
    );
}

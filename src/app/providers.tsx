'use client';

import { NextUIProvider } from '@nextui-org/react';
import { StoreInspector } from 'tinybase/ui-react-dom';

import { createLocalUser } from '@/lib/database/create';
import { dbName, Provider as DatabaseProvider } from '@/lib/database/store';
import useInitStore from '@/lib/database/use-init-store';
import { isClient, isIndexedDBAvailable } from '@/lib/environments/client';

if (isClient() && isIndexedDBAvailable()) {
    createLocalUser();
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <DatabaseProvider store={useInitStore(dbName)}>
                {children}
                <StoreInspector />
            </DatabaseProvider>
        </NextUIProvider>
    );
}

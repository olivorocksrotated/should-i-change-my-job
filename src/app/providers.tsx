'use client';

import { NextUIProvider } from '@nextui-org/react';
import { StoreInspector } from 'tinybase/ui-react-dom';

import useInitStore from '@/lib/database/init';
import { dbName, Provider as DatabaseProvider } from '@/lib/database/store';

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

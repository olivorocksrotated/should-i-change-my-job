'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { addRxPlugin, RxDatabase } from 'rxdb';
import { disableWarnings, RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { Provider as DatabaseProvider } from 'rxdb-hooks';

import { initDatabase } from '@/lib/database/client';
import { isDevEnvironment } from '@/lib/environments/is-dev';

if (isDevEnvironment()) {
    disableWarnings();
    addRxPlugin(RxDBDevModePlugin);
}

export function Providers({ children }: { children: React.ReactNode }) {
    const [db, setDb] = useState<RxDatabase>();

    useEffect(() => {
        initDatabase().then(setDb);
    }, []);

    return (
        <DatabaseProvider db={db}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </DatabaseProvider>
    );
}

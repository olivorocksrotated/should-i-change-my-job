import { Store } from 'tinybase';
import { createIndexedDbPersister } from 'tinybase/persisters/persister-indexed-db';
import { createStore } from 'tinybase/with-schemas';

import { isClient, isIndexedDBAvailable } from '../environments/client';
import { appSettingsSchema, initialAppSettings } from './app-settings';
import { useCreateStore } from './store';
import { tablesSchema } from './tables';

export default function useInitStore(dbName: string) {
    const store = useCreateStore(() => createStore().setSchema(tablesSchema, appSettingsSchema));

    if (isClient() && isIndexedDBAvailable()) {
        const persister = createIndexedDbPersister(store as Store, dbName);
        /* eslint-disable no-console */
        persister.startAutoLoad(undefined, initialAppSettings)
            .then(() => persister.startAutoSave())
            .then(() => console.info('# Persister ready'));
    }

    return store;
}

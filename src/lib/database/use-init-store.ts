import { Store } from 'tinybase';
import { createIndexedDbPersister } from 'tinybase/persisters/persister-indexed-db';
import { createStore } from 'tinybase/with-schemas';

import { isClient, isIndexedDBAvailable } from '../environments/client';
import { appSettingsSchema, initialAppSettings } from './app-settings-schema';
import { useCreateStore } from './store';
import { tablesSchema } from './table-schemas';

export default function useInitStore(dbName: string) {
    const store = useCreateStore(() => createStore().setSchema(tablesSchema, appSettingsSchema));
    if (isClient() && isIndexedDBAvailable()) {
        const persister = createIndexedDbPersister(store as Store, dbName);
        /* eslint-disable no-console */
        persister.startAutoLoad(undefined, initialAppSettings).then(() => console.info('# Persister auto load started'));
        persister.startAutoSave().then(() => console.info('# Persister auto save started'));
    }

    return store;
}

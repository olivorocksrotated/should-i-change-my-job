import { Store } from 'tinybase';
import { createIndexedDbPersister } from 'tinybase/persisters/persister-indexed-db';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import { createStore } from 'tinybase/with-schemas';

import { isClient, isIndexedDBAvailable } from '../environments/client';
import { appSettingsSchema } from './app-settings-schema';
import { tablesSchema } from './table-schemas';

const UiReactWithSchemas = UiReact as UiReact.WithSchemas<[typeof tablesSchema, typeof appSettingsSchema]>;
const { useCreateStore, Provider: DatabaseProvider } = UiReactWithSchemas;
export { DatabaseProvider };

const dbName = 'siqmj';

export const useInitStore = () => useCreateStore(() => {
    const store = createStore().setSchema(tablesSchema, appSettingsSchema);
    if (isClient() && isIndexedDBAvailable()) {
        const persister = createIndexedDbPersister(store as Store, dbName);
        persister.startAutoLoad();
        persister.startAutoSave();
    }

    return store;
});

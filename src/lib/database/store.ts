import * as UiReact from 'tinybase/ui-react/with-schemas';

import { appSettingsSchema } from './app-settings-schema';
import { tablesSchema } from './table-schemas';

export const dbName = 'siqmj';

const UiReactWithSchemas = UiReact as UiReact.WithSchemas<[typeof tablesSchema, typeof appSettingsSchema]>;
export const {
    useCreateStore,
    useCreatePersister,
    useValues,
    useTables,
    useTable,
    useSetPartialValuesCallback,
    useSetValuesCallback,
    useSetTableCallback,
    useSetTablesCallback,
    useSortedRowIds,
    Provider
} = UiReactWithSchemas;
/* eslint-disable no-console */
import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

import { Collection } from './collections';
import { storySchema } from './schemas';

export const initDatabase = async () => {
    try {
        const db = await createRxDatabase({
            name: 'should-i-quit-my-job-db',
            storage: getRxStorageDexie()
        });
        console.info('Database started');

        if (!db[Collection.Stories]) {
            await db.addCollections({
                [Collection.Stories]: { schema: storySchema }
            });
        }

        return db;
    } catch (error) {
        console.error('Failed to create database', error);
    }
};

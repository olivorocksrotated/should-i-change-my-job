import { db } from './dexie';

export const getUser = () => db.user.limit(1).first();

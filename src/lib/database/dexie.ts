import Dexie, { Table } from 'dexie';

import { getUser } from './queries';

export interface User {
    id?: string;
    showOnboarding: boolean;
}

export interface Story {
  id?: string;
  summary: string;
  great: string;
  sucks: string;
  createdAt: Date;
}

const dbName = 'should-i-quit-my-job';
export class MySubClassedDexie extends Dexie {
    public user!: Table<User>;

    public stories!: Table<Story>;

    constructor() {
        super(dbName);
        this.version(2).stores({
            user: '++id, showOnboarding',
            stories: '++id, summary, great, sucks, createdAt'
        });
    }
}

export const db = new MySubClassedDexie();

export const createLocalUser = async () => {
    const user = await getUser();
    if (user) {
        return;
    }

    const id = Date.now().toString();
    db.user.add({ id, showOnboarding: true }, id);
};

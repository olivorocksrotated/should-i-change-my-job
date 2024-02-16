import Dexie, { Table } from 'dexie';

export interface User {
    id?: string;
    isOnboardingDone: boolean;
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
        this.version(1).stores({
            user: '++id, isOnboardingDone',
            stories: '++id, summary, great, sucks, createdAt'
        });
    }
}

export const db = new MySubClassedDexie();

import { Message } from 'ai/react';
import Dexie, { Table } from 'dexie';

export interface User {
    id?: string;
    showOnboarding: boolean;
}

const dbName = 'should-i-quit-my-job';
export class Database extends Dexie {
    public user!: Table<User>;

    public storyMessages!: Table<Message>;

    constructor() {
        super(dbName);
        this.version(4).stores({
            user: '++id, showOnboarding',
            storyMessages: '++id, role, content, createdAt'
        });
    }
}

export const db = new Database();

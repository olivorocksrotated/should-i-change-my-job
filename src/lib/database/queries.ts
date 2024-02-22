import { db } from './dexie';

export const getUser = () => db.user.limit(1).first();

export const getStory = () => db.storyMessages.toCollection().sortBy('createdAt');

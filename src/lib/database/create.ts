import { Message } from 'ai/react';

import { db } from './dexie';
import { createId } from './id';
import { getUser } from './queries';

export const createLocalUser = async () => {
    const user = await getUser();
    if (user) {
        return;
    }

    const id = createId();
    db.user.add({ id, showOnboarding: true }, id);
};

export const createOrUpdateStory = async (messages: Message[]) => {
    try {
        db.storyMessages.bulkPut(messages);
    } catch (error) {
        console.error('---> error', error);
    }
};

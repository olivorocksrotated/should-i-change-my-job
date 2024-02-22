import { Message } from 'ai/react';

import { db } from './dexie';
import { getUser } from './queries';

const createId = () => Date.now().toString();

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

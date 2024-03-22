'use client';

import { Message } from 'ai/react';
import { useEffect, useMemo, useState } from 'react';

import { useSetTableCallback, useSortedRowIds, useTable } from '@/lib/database/store';
import { dateToISOString } from '@/lib/date/format';

export function useLoadInitialMessages(setMessages: (messages: Message[]) => void) {
    const [isLoadedOnce, setIsLoadedOnce] = useState(false);
    const messageIds = useSortedRowIds('storyMessages', 'createdAt', false);
    const messages = useTable('storyMessages');
    const initialMessages = useMemo(
        () => messageIds.map((id) => messages[id] as Message),
        [messageIds, messages]
    );

    useEffect(() => {
        if (initialMessages.length > 0 && !isLoadedOnce) {
            setIsLoadedOnce(true);
            setMessages(initialMessages);
        }
    }, [initialMessages, isLoadedOnce, setMessages]);
}

export function useUpdateStory() {
    return useSetTableCallback<Message[], 'storyMessages'>(
        'storyMessages',
        (updatedMessages) => updatedMessages.reduce((acc, currentMessage) => ({
            ...acc,
            [currentMessage.id]: { ...currentMessage, createdAt: dateToISOString(currentMessage.createdAt) }
        }), {})
    );
}

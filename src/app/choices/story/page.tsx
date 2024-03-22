'use client';

import { Button, Card, CardBody, Textarea } from '@nextui-org/react';
import { Message, useChat } from 'ai/react';
import { useCallback, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';

import { useSetTableCallback, useSortedRowIds, useTable } from '@/lib/database/store';
import { dateToISOString } from '@/lib/date/format';

export default function StoryPage() {
    const { messages, input, setMessages, handleInputChange, handleSubmit } = useChat({ api: '/api/ai' });

    const sortedStoredMessageIds = useSortedRowIds('storyMessages', 'createdAt', true);
    const storedMessages = useTable('storyMessages');

    const setInitialMessages = useCallback(() => {
        let firstLoadDone = false;
        if (firstLoadDone) {
            return;
        }

        firstLoadDone = true;
        setMessages(sortedStoredMessageIds.map((id) => storedMessages[id] as Message));
    }, [setMessages, sortedStoredMessageIds, storedMessages]);

    const updateStoredMessages = useSetTableCallback<Message[], 'storyMessages'>(
        'storyMessages',
        (updatedMessages) => updatedMessages.reduce((acc, message) => ({
            ...acc,
            [message.id]: { ...message, createdAt: dateToISOString(message.createdAt) }
        }), {})
    );

    useEffect(() => {
        setInitialMessages();
    }, [setInitialMessages]);

    useEffect(() => {
        updateStoredMessages(messages);
    }, [updateStoredMessages, messages]);

    return (
        <article className="flex flex-col justify-between">
            <form
                onSubmit={handleSubmit}
                className="mb-4 flex items-center justify-between gap-4 bg-neutral-200 px-3 py-2"
            >
                <Textarea
                    type="text"
                    size="sm"
                    label="Your answer"
                    minRows={1}
                    maxRows={3}
                    value={input}
                    onChange={handleInputChange}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="solid"
                    size="lg"
                    isIconOnly
                    className="mb-auto h-14"
                >
                    <IoSend size={20} />
                </Button>
            </form>

            <ul>
                {messages.map((m, index) => (
                    <li key={index} className={`mb-4 ${m.role === 'user' ? 'pl-6' : 'pr-6'}`}>
                        <Card className={m.role === 'user' ? 'light' : 'dark'}>
                            <CardBody>
                                <p>{m.content}</p>
                            </CardBody>
                        </Card>
                    </li>
                ))}
            </ul>
        </article>
    );
}
